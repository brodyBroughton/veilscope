// Veilscope — Updates page (Featured-first with cap=2)
// Default sort: "featured" (shows up to 2 featured at top).
// Switching to "newest" or "oldest" renders all cards uniformly.

// Expected DOM per updates.html:
// - grid     : .updates-grid
// - search   : #updates-search
// - chips    : .chip (with data-tag) inside .chips[role=group]
// - sort     : #sort-select (values: featured | date_desc | date_asc)

(function () {
  const DATA_URL   = 'assets/data/updates.json';
  const GRID_SEL   = '.updates-grid';
  const SEARCH_SEL = '#updates-search';
  const CHIP_SEL   = '.chip';
  const SORT_SEL   = '#sort-select';

  const grid        = document.querySelector(GRID_SEL);
  const searchInput = document.querySelector(SEARCH_SEL);
  const chips       = Array.from(document.querySelectorAll(CHIP_SEL));
  const sortSelect  = document.querySelector(SORT_SEL);

  if (!grid) {
    console.error('[updates.js] Missing .updates-grid container.');
    return;
  }

  let allUpdates = [];
  let activeTag  = 'All';

  const isTruthy = (v) => v === true || v === 1 || String(v).toLowerCase() === 'true';
  const safeText = (s) => String(s == null ? '' : s);

  function imagePath(image) {
    if (!image) return null;
    return image.includes('/') ? image : `assets/img/updates/${image}`;
  }

  function buildCard(update, isFeatured) {
    const { title, summary, description, date, tags = [], image, link } = update;
    const src = imagePath(image);

    const el = document.createElement('article');
    el.className = 'update-card' + (isFeatured ? ' update-card--featured' : '');
    el.setAttribute('data-featured', isFeatured ? 'true' : 'false');

    el.innerHTML = `
      <div class="update-media">
        ${isFeatured ? `<span class="badge badge-featured" aria-label="Featured">Featured</span>` : ''}
        ${src ? `<img loading="lazy" decoding="async" src="${src}" alt="${safeText(title)}">` : ''}
      </div>
      <div class="update-body">
        <div class="update-meta">
          <span class="update-date">${safeText(date)}</span>
          <span class="update-tags">
            ${tags.map(t => `<span class="update-tag">${safeText(t)}</span>`).join('')}
          </span>
        </div>
        <h3 class="update-title">${safeText(title)}</h3>
        <p class="update-summary">${safeText(summary || description)}</p>
        <div class="update-actions">
          ${link ? `<a href="${link}" aria-label="Read more about ${safeText(title)}">Read more →</a>` : ''}
        </div>
      </div>
    `;
    return el;
  }

  function applyImageFallbacks(scope) {
    scope.querySelectorAll('.update-media').forEach(media => {
      const img = media.querySelector('img');
      if (!img || !img.getAttribute('src')) {
        media.classList.add('is-empty');
      } else {
        img.addEventListener('error', () => {
          media.classList.add('is-empty');
          img.remove();
        }, { once: true });
      }
    });
  }

  function filterAndSearch(list) {
    // Tag
    let out = list.filter(u => activeTag === 'All' ? true : (Array.isArray(u.tags) && u.tags.includes(activeTag)));
    // Search
    const q = (searchInput && searchInput.value || '').trim().toLowerCase();
    if (q) {
      out = out.filter(u => {
        const hay = [u.title, u.summary || u.description, ...(u.tags || [])]
          .map(safeText).join(' ').toLowerCase();
        return hay.includes(q);
      });
    }
    return out;
  }

  function byDateDesc(a, b) { return new Date(b.date) - new Date(a.date); }
  function byDateAsc(a, b)  { return new Date(a.date) - new Date(b.date); }

  function render() {
    let list = filterAndSearch(allUpdates);
    const sort = (sortSelect && sortSelect.value) || 'featured';

    // "Featured" mode: pull up to 2 featured to the top; rest follow (newest first)
    if (sort === 'featured') {
      list.sort(byDateDesc);

      // choose up to 2 featured (in descending date)
      const featured = list.filter(u => isTruthy(u.featured)).sort(byDateDesc).slice(0, 2);

      // remove selected featured from list
      const key = (u) => `${u.title}@@${u.date}`;
      const featuredKeys = new Set(featured.map(key));
      const remainder = list.filter(u => !featuredKeys.has(key(u)));

      // toggle layout helper on grid (controls side-by-side featured on wide)
      grid.classList.toggle('has-two-featured', featured.length === 2);

      // inject
      grid.innerHTML = '';
      featured.forEach(u => grid.appendChild(buildCard(u, true)));
      remainder.forEach(u => grid.appendChild(buildCard(u, false)));

      applyImageFallbacks(grid);
      return;
    }

    // Non-featured sorts: everything uniform
    if (sort === 'date_desc') list.sort(byDateDesc);
    if (sort === 'date_asc')  list.sort(byDateAsc);

    grid.classList.remove('has-two-featured');
    grid.innerHTML = '';
    list.forEach(u => grid.appendChild(buildCard(u, false)));
    applyImageFallbacks(grid);
  }

  // Interactions
  function wireChips() {
    // Initialize aria-pressed from selection state
    chips.forEach(btn => {
      // default to All pressed true; others false
      const pressed = btn.dataset.tag === 'All';
      btn.setAttribute('aria-pressed', pressed ? 'true' : 'false');
      // remove any legacy data-active attributes (visual state is CSS-driven)
      if (pressed) btn.setAttribute('data-active', 'true'); else btn.removeAttribute('data-active');
    });

    chips.forEach(btn => {
      btn.addEventListener('click', () => {
        chips.forEach(b => {
          b.setAttribute('aria-pressed', 'false');
          b.removeAttribute('data-active');
        });
        btn.setAttribute('aria-pressed', 'true');
        btn.setAttribute('data-active', 'true');
        activeTag = btn.getAttribute('data-tag') || 'All';
        render();
      });
    });
  }

  function wireSearchSort() {
    if (searchInput) searchInput.addEventListener('input', render);
    if (sortSelect)  sortSelect.addEventListener('change', render);
  }

  // Boot
  fetch(DATA_URL, { cache: 'no-cache' })
    .then(r => {
      if (!r.ok) throw new Error(`Failed to load ${DATA_URL} (${r.status})`);
      return r.json();
    })
    .then(json => {
      allUpdates = Array.isArray(json) ? json : [json];
      wireChips();
      wireSearchSort();
      render();
    })
    .catch(err => {
      console.error(err);
      grid.innerHTML = `
        <div class="update-card">
          <div class="update-body">
            <h3 class="update-title">Couldn’t load updates</h3>
            <p class="update-summary">We ran into a problem fetching updates. Please try again later.</p>
          </div>
        </div>
      `;
    });
})();
