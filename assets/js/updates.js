/* assets/js/updates.js
   Project Updates: render grid + filters + sorting.
   - Featured highlighting only applies when sort === 'featured'
   - Images: responsive <picture> with AVIF/WebP + JPEG fallback, width/height for CLS, lazy loaded
*/

(function () {
  // Decide where to load updates from.
  // - In local dev: app runs on http://localhost:3000
  // - In production: app is at https://app.veilscope.com
  const APP_ORIGIN =
    location.hostname === "localhost" || location.hostname === "127.0.0.1"
      ? "http://localhost:3000"
      : "https://app.veilscope.com";

  const DATA_URL = APP_ORIGIN + "/api/public/updates";

  // If your hosting/proxy setup exposes /api/public/updates on the *same* origin
  // as this marketing site, we'll try that as a fallback.
  const FALLBACK_URLS = Array.from(
    new Set([DATA_URL, location.origin + "/api/public/updates"].filter(Boolean))
  );

  // DOM refs
  const grid = document.querySelector(".updates-grid");
  const statusEl = document.getElementById("updates-status");
  const searchInput = document.getElementById("updates-search");
  const chipsWrap = document.querySelector(".chips");
  const chipButtons = Array.from(chipsWrap?.querySelectorAll(".chip") || []);
  const sortSelect = document.getElementById("sort-select");

  // State
  let allUpdates = [];
  let state = {
    q: "",
    tag: "All",
    sort: "featured", // 'featured' | 'date_desc' | 'date_asc'
  };

  // --- Loading UI helpers (skeleton + disabled controls) ---
  function setLoading(isLoading) {
    if (grid) {
      grid.classList.toggle("is-loading", !!isLoading);
      grid.setAttribute("aria-busy", isLoading ? "true" : "false");
    }
    if (statusEl) {
      statusEl.textContent = isLoading ? "Loading updates…" : "";
    }
  }

  function setControlsDisabled(disabled) {
    if (searchInput) searchInput.disabled = !!disabled;
    if (sortSelect) sortSelect.disabled = !!disabled;

    chipButtons.forEach((btn) => {
      btn.disabled = !!disabled;
      btn.setAttribute("aria-disabled", disabled ? "true" : "false");
      // Prevent tabbing to chips while disabled (cleaner keyboard UX)
      btn.tabIndex = disabled ? -1 : 0;
    });

    if (chipsWrap) chipsWrap.setAttribute("aria-disabled", disabled ? "true" : "false");
  }

  // --- Helpers ---
  const toSlug = (s = "") =>
    s
      .toString()
      .toLowerCase()
      .trim()
      .replace(/['"]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const parseDate = (d) => new Date(d);

  const escapeAttr = (s = "") => String(s).replace(/"/g, "&quot;");

  const splitExt = (path = "") => {
    const m = path.match(/^(.*)\.([a-z0-9]+)$/i);
    return m ? { base: m[1], ext: m[2].toLowerCase() } : { base: path, ext: "" };
  };

  // Build a responsive <picture> block for card thumbnails.
  // Uses -600 and -1200 variants (AVIF/WebP/JPEG) with the original file as src fallback.
  function cardPictureMarkup(src, alt) {
    const { base } = splitExt(src || "");
    const sizes = "(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 33vw";
    const width = 1200; // intrinsic natural size hint (prevents CLS) — 16:9 assumed
    const height = 675;

    return `
<picture>
  <source type="image/avif" srcset="${base}-600.avif 600w, ${base}-1200.avif 1200w" sizes="${sizes}">
  <source type="image/webp" srcset="${base}-600.webp 600w, ${base}-1200.webp 1200w" sizes="${sizes}">
  <img
    src="${src}"
    srcset="${base}-600.jpg 600w, ${base}-1200.jpg 1200w"
    sizes="${sizes}"
    width="${width}" height="${height}"
    alt="${escapeAttr(alt || "")}" loading="lazy" decoding="async"
    onerror="this.style.display='none'; this.closest('.update-media').classList.add('is-empty');">
</picture>`;
  }

  // Restore state from URL if present
  const params = new URLSearchParams(location.search);
  if (params.has("q")) state.q = params.get("q") || "";
  if (params.has("tag")) state.tag = params.get("tag") || "All";
  if (params.has("sort")) state.sort = params.get("sort") || "featured";

  // Initialize UI from URL
  if (searchInput) searchInput.value = state.q;
  if (chipsWrap) {
    chipButtons.forEach((btn) => {
      const active = (btn.dataset.tag || "All") === state.tag;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      if ("active" in btn.dataset) btn.dataset.active = active ? "true" : "false";
    });
  }
  if (sortSelect) sortSelect.value = state.sort;

  // --- Fetch (robust) ---
  async function fetchJson(url) {
    const res = await fetch(url, {
      mode: "cors",
      cache: "no-store",
      credentials: "omit",
    });

    // fetch() only rejects on network/CORS errors, not on HTTP errors, so we must check status.
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      const snippet = body.replace(/\s+/g, " ").trim().slice(0, 240);
      throw new Error(
        `HTTP ${res.status} ${res.statusText} from ${url}. Body: ${snippet || "(empty)"}`
      );
    }

    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch (e) {
      const ct = (res.headers.get("content-type") || "").toLowerCase();
      const snippet = text.replace(/\s+/g, " ").trim().slice(0, 240);
      throw new Error(
        `Expected JSON from ${url} but got ${ct || "unknown content-type"}. Body: ${
          snippet || "(empty)"
        }`
      );
    }
  }

  async function loadUpdates() {
    setLoading(true);
    setControlsDisabled(true);

    let lastErr = null;

    for (const url of FALLBACK_URLS) {
      try {
        const data = await fetchJson(url);
        allUpdates = Array.isArray(data) ? data : data?.updates || [];

        setLoading(false);
        setControlsDisabled(false);
        render();
        bindEvents();
        return;
      } catch (err) {
        lastErr = err;
        console.warn("[updates] Fetch attempt failed:", url, err);
      }
    }

    console.error("[updates] All update endpoints failed.", lastErr);
    setLoading(false);
    setControlsDisabled(false);

    if (statusEl) statusEl.textContent = "Failed to load updates. Check the console for details.";
    if (grid) grid.innerHTML = `<p role="alert">Failed to load updates.</p>`;
  }

  // Kick off fetch immediately (skeletons are already in the HTML).
  loadUpdates();

  // --- Filtering / sorting ---
  function filterBySearch(items, q) {
    if (!q) return items;
    const query = q.toLowerCase();
    return items.filter((u) => {
      const hay = [u.title || "", u.summary || "", ...(Array.isArray(u.tags) ? u.tags : [])]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
  }

  function filterByTag(items, tag) {
    if (!tag || tag === "All") return items;
    return items.filter((u) => (u.tags || []).includes(tag));
  }

  function sortItems(items, mode) {
    const byNewest = (a, b) => parseDate(b.date) - parseDate(a.date);
    const byOldest = (a, b) => parseDate(a.date) - parseDate(b.date);

    if (mode === "date_desc") return [...items].sort(byNewest);
    if (mode === "date_asc") return [...items].sort(byOldest);

    // 'featured' — show featured first (newest-first within groups)
    const featured = items.filter((u) => !!u.featured).sort(byNewest);
    const rest = items.filter((u) => !u.featured).sort(byNewest);
    return [...featured, ...rest];
  }

  // Build query string for back/forward state
  function currentQueryString() {
    const p = new URLSearchParams();
    if (state.sort) p.set("sort", state.sort);
    if (state.tag && state.tag !== "All") p.set("tag", state.tag);
    if (state.q) p.set("q", state.q);
    return p.toString();
  }

  function buildReadMoreHref(update) {
    const slug = update.slug || toSlug(update.title || update.id || "");
    const qs = currentQueryString();
    return `update.html?slug=${encodeURIComponent(slug)}${qs ? `&${qs}` : ""}`;
  }

  // Card template; highlightFeatured decides if we add featured class/badge
  function cardTemplate(update, highlightFeatured) {
    const {
      title = "Untitled",
      summary = "",
      date = "",
      image = "",
      imageAlt = "",
      tags = [],
      featured = false,
    } = update;

    const showFeatured = highlightFeatured && featured === true;

    const badge = showFeatured ? `<span class="badge badge-featured">Featured</span>` : "";

    const pills = (tags || []).map((t) => `<span class="update-tag">${t}</span>`).join("");

    const href = buildReadMoreHref(update);
    const dateStr = date ? new Date(date).toLocaleDateString() : "";

    return `
<article class="update-card ${showFeatured ? "update-card--featured" : ""}">
  <a class="update-card-link" href="${href}" aria-label="Read more about ${escapeAttr(title)}">
    <div class="update-media ${image ? "" : "is-empty"}">
      ${badge}
      ${image ? cardPictureMarkup(image, imageAlt) : `<div class="is-empty" aria-hidden="true"></div>`}
    </div>

    <div class="update-body">
      <div class="update-meta">
        <time datetime="${date || ""}">${dateStr || ""}</time>
        <div class="update-tags">${pills}</div>
      </div>

      <h3 class="update-title">${title}</h3>
      <p class="update-summary">${summary}</p>

      <div class="update-actions">
        <span class="read-more">Read more →</span>
      </div>
    </div>
  </a>
</article>`;
  }

  // --- Render ---
  function render() {
    if (!grid) return;

    let items = filterBySearch(allUpdates, state.q);
    items = filterByTag(items, state.tag);

    const sorted = sortItems(items, state.sort);
    const highlightFeatured = state.sort === "featured";

    if (highlightFeatured) {
      const featuredCount = sorted.filter((u) => !!u.featured).length;
      grid.classList.toggle("has-two-featured", featuredCount === 2);
    } else {
      grid.classList.remove("has-two-featured");
    }

    if (!sorted.length) {
      grid.innerHTML = `<p role="status">No updates found.</p>`;
      return;
    }

    grid.innerHTML = sorted.map((u) => cardTemplate(u, highlightFeatured)).join("");
  }

  // --- Events ---
  function bindEvents() {
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.q = e.target.value.trim();
        render();

        const p = new URLSearchParams(location.search);
        state.q ? p.set("q", state.q) : p.delete("q");
        if (state.tag && state.tag !== "All") p.set("tag", state.tag);
        if (state.sort && state.sort !== "featured") p.set("sort", state.sort);
        history.replaceState({}, "", `${location.pathname}?${p.toString()}`);
      });
    }

    if (chipsWrap) {
      chipsWrap.addEventListener("click", (e) => {
        const btn = e.target.closest(".chip");
        if (!btn) return;

        state.tag = btn.dataset.tag || "All";

        chipButtons.forEach((b) => {
          const active = b === btn;
          b.setAttribute("aria-pressed", active ? "true" : "false");
          if ("active" in b.dataset) b.dataset.active = active ? "true" : "false";
        });

        render();

        const p = new URLSearchParams(location.search);
        state.tag && state.tag !== "All" ? p.set("tag", state.tag) : p.delete("tag");
        if (state.q) p.set("q", state.q);
        if (state.sort && state.sort !== "featured") p.set("sort", state.sort);
        history.replaceState({}, "", `${location.pathname}?${p.toString()}`);
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        state.sort = e.target.value;
        render();

        const p = new URLSearchParams(location.search);
        if (state.sort && state.sort !== "featured") p.set("sort", state.sort);
        else p.delete("sort");
        if (state.tag && state.tag !== "All") p.set("tag", state.tag);
        if (state.q) p.set("q", state.q);
        history.replaceState({}, "", `${location.pathname}?${p.toString()}`);
      });
    }
  }
})();
