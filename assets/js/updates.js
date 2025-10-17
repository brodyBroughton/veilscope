/* assets/js/updates.js
   Project Updates: render grid + filters + sorting.
   - Featured highlighting only applies when sort === 'featured'
*/

(function () {
  const DATA_URL = 'assets/data/updates.json';

  // DOM refs
  const grid = document.querySelector('.updates-grid');
  const searchInput = document.getElementById('updates-search');
  const chipsWrap = document.querySelector('.chips');
  const chipButtons = Array.from(chipsWrap?.querySelectorAll('.chip') || []);
  const sortSelect = document.getElementById('sort-select');

  // State
  let allUpdates = [];
  let state = {
    q: '',
    tag: 'All',
    sort: 'featured', // 'featured' | 'date_desc' | 'date_asc'
  };

  // --- Helpers ---
  const toSlug = (s = '') =>
    s.toString()
      .toLowerCase()
      .trim()
      .replace(/['"]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const parseDate = (d) => new Date(d);

  // Restore state from URL if present
  const params = new URLSearchParams(location.search);
  if (params.has('q')) state.q = params.get('q') || '';
  if (params.has('tag')) state.tag = params.get('tag') || 'All';
  if (params.has('sort')) state.sort = params.get('sort') || 'featured';

  // Initialize UI from URL
  if (searchInput) searchInput.value = state.q;
  if (chipsWrap) {
    chipButtons.forEach((btn) => {
      const active = (btn.dataset.tag || 'All') === state.tag;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      if ('active' in btn.dataset) btn.dataset.active = active ? 'true' : 'false';
    });
  }
  if (sortSelect) sortSelect.value = state.sort;

  // Fetch + render
  fetch(DATA_URL)
    .then((r) => r.json())
    .then((data) => {
      allUpdates = Array.isArray(data) ? data : data?.updates || [];
      render();
      bindEvents();
    })
    .catch((err) => {
      console.error('Error loading updates.json', err);
      if (grid) grid.innerHTML = `<p>Failed to load updates.</p>`;
    });

  // --- Filtering / sorting ---
  function filterBySearch(items, q) {
    if (!q) return items;
    const query = q.toLowerCase();
    return items.filter((u) => {
      const hay = [
        u.title || '',
        u.summary || '',
        ...(Array.isArray(u.tags) ? u.tags : []),
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(query);
    });
  }

  function filterByTag(items, tag) {
    if (!tag || tag === 'All') return items;
    return items.filter((u) => (u.tags || []).includes(tag));
  }

  function sortItems(items, mode) {
    const byNewest = (a, b) => parseDate(b.date) - parseDate(a.date);
    const byOldest = (a, b) => parseDate(a.date) - parseDate(b.date);

    if (mode === 'date_desc') return [...items].sort(byNewest);
    if (mode === 'date_asc') return [...items].sort(byOldest);

    // 'featured' — show featured first (newest-first within groups)
    const featured = items.filter((u) => !!u.featured).sort(byNewest);
    const rest = items.filter((u) => !u.featured).sort(byNewest);
    return [...featured, ...rest];
  }

  // Build query string for back/forward state
  function currentQueryString() {
    const p = new URLSearchParams();
    if (state.sort) p.set('sort', state.sort);
    if (state.tag && state.tag !== 'All') p.set('tag', state.tag);
    if (state.q) p.set('q', state.q);
    return p.toString();
  }

  function buildReadMoreHref(update) {
    const slug = update.slug || toSlug(update.title || update.id || '');
    const qs = currentQueryString();
    return `update.html?slug=${encodeURIComponent(slug)}${qs ? `&${qs}` : ''}`;
  }

  // Card template; highlightFeatured decides if we add featured class/badge
  function cardTemplate(update, highlightFeatured) {
    const {
      title = 'Untitled',
      summary = '',
      date = '',
      image = '',
      imageAlt = '',
      tags = [],
      featured = false,
    } = update;

    const showFeatured = highlightFeatured && featured === true;

    const badge = showFeatured
      ? `<span class="badge badge-featured">Featured</span>`
      : '';

    const pills = (tags || [])
      .map((t) => `<span class="update-tag">${t}</span>`)
      .join('');

    const href = buildReadMoreHref(update);
    const dateStr = date ? new Date(date).toLocaleDateString() : '';

    return `
<article class="update-card ${showFeatured ? 'update-card--featured' : ''}">
  <div class="update-media ${image ? '' : 'is-empty'}">
    ${badge}
    ${
      image
        ? `<img src="${image}" alt="${imageAlt || ''}" loading="lazy" decoding="async"
               onerror="this.style.display='none'; this.closest('.update-media').classList.add('is-empty');">`
        : `<div class="is-empty" aria-hidden="true"></div>`
    }
  </div>

  <div class="update-body">
    <div class="update-meta">
      <time datetime="${date || ''}">${dateStr || ''}</time>
      <div class="update-tags">${pills}</div>
    </div>

    <h3 class="update-title">${title}</h3>
    <p class="update-summary">${summary}</p>

    <div class="update-actions">
      <a class="read-more" href="${href}" aria-label="Read more about ${title}">Read more →</a>
    </div>
  </div>
</article>`;
  }

  // --- Render ---
  function render() {
    if (!grid) return;

    // Filter
    let items = filterBySearch(allUpdates, state.q);
    items = filterByTag(items, state.tag);

    // Sort
    const sorted = sortItems(items, state.sort);

    // Only highlight featured when sort === 'featured'
    const highlightFeatured = state.sort === 'featured';

    // Toggle helper class for layout (only if highlighting featured)
    if (highlightFeatured) {
      const featuredCount = sorted.filter((u) => !!u.featured).length;
      grid.classList.toggle('has-two-featured', featuredCount === 2);
    } else {
      grid.classList.remove('has-two-featured');
    }

    // Build markup
    grid.innerHTML = sorted.map((u) => cardTemplate(u, highlightFeatured)).join('');
  }

  // --- Events ---
  function bindEvents() {
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.q = e.target.value.trim();
        render();
        const p = new URLSearchParams(location.search);
        state.q ? p.set('q', state.q) : p.delete('q');
        if (state.tag && state.tag !== 'All') p.set('tag', state.tag);
        if (state.sort && state.sort !== 'featured') p.set('sort', state.sort);
        history.replaceState({}, '', `${location.pathname}?${p.toString()}`);
      });
    }

    if (chipsWrap) {
      chipsWrap.addEventListener('click', (e) => {
        const btn = e.target.closest('.chip');
        if (!btn) return;
        state.tag = btn.dataset.tag || 'All';

        // Visual state
        chipButtons.forEach((b) => {
          const active = b === btn;
          b.setAttribute('aria-pressed', active ? 'true' : 'false');
          if ('active' in b.dataset) b.dataset.active = active ? 'true' : 'false';
        });

        render();

        const p = new URLSearchParams(location.search);
        state.tag && state.tag !== 'All' ? p.set('tag', state.tag) : p.delete('tag');
        if (state.q) p.set('q', state.q);
        if (state.sort && state.sort !== 'featured') p.set('sort', state.sort);
        history.replaceState({}, '', `${location.pathname}?${p.toString()}`);
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.sort = e.target.value; // 'featured' | 'date_desc' | 'date_asc'
        render();

        const p = new URLSearchParams(location.search);
        if (state.sort && state.sort !== 'featured') p.set('sort', state.sort); else p.delete('sort');
        if (state.tag && state.tag !== 'All') p.set('tag', state.tag);
        if (state.q) p.set('q', state.q);
        history.replaceState({}, '', `${location.pathname}?${p.toString()}`);
      });
    }
  }
})();
