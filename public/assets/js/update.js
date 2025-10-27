/* assets/js/update.js
   Reads ?slug=..., fetches updates.json, renders detail page.
   Preserves sort/tag/q on the "Back to Updates" link.
*/

(function () {
  const DATA_URL = 'public/assets/data/updates.json';

  const $ = (sel) => document.querySelector(sel);
  const titleEl = $('#update-title');
  const dateEl = $('#update-date');
  const tagsEl = $('#update-tags');
  const badgeEl = $('#update-badge');
  const imgEl = $('#update-image');
  const imgAltEl = $('#update-image-alt');
  const articleEl = $('#update-article');
  const backLink = $('#back-link');
  const prevLink = $('#prev-update');
  const nextLink = $('#next-update');

  const toSlug = (s = '') =>
    s.toString()
      .toLowerCase()
      .trim()
      .replace(/['"]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const params = new URLSearchParams(location.search);
  const slug = params.get('slug');

  // Rebuild "Back" link including any state (sort, tag, q)
  const backParams = new URLSearchParams();
  ['sort', 'tag', 'q'].forEach((k) => {
    if (params.has(k)) backParams.set(k, params.get(k));
  });
  backLink.href = backParams.toString()
    ? `updates.html?${backParams.toString()}`
    : `updates.html`;

  fetch(DATA_URL)
    .then((r) => r.json())
    .then((data) => {
      const list = Array.isArray(data) ? data : data?.updates || [];
      if (!list.length) throw new Error('No updates found');

      // find current
      const index = list.findIndex(
        (u) => (u.slug && u.slug === slug) || (!u.slug && toSlug(u.title || '') === slug)
      );
      const current = index >= 0 ? list[index] : null;

      if (!current) {
        renderNotFound();
        return;
      }

      renderCurrent(current);

      // pager: prev/next by date (newest first)
      const byNewest = [...list].sort((a, b) => new Date(b.date) - new Date(a.date));
      const i2 = byNewest.findIndex(
        (u) => (u.slug || toSlug(u.title || '')) === (current.slug || toSlug(current.title || ''))
      );
      const prev = byNewest[i2 + 1];
      const next = byNewest[i2 - 1];

      if (prev) {
        prevLink.hidden = false;
        const sp = prev.slug || toSlug(prev.title || '');
        prevLink.href = `update.html?slug=${encodeURIComponent(sp)}${backParams.toString() ? `&${backParams.toString()}` : ''}`;
        prevLink.textContent = `← ${prev.title}`;
      }
      if (next) {
        nextLink.hidden = false;
        const sn = next.slug || toSlug(next.title || '');
        nextLink.href = `update.html?slug=${encodeURIComponent(sn)}${backParams.toString() ? `&${backParams.toString()}` : ''}`;
        nextLink.textContent = `${next.title} →`;
      }
    })
    .catch((err) => {
      console.error(err);
      renderNotFound();
    });

  function renderCurrent(u) {
    const {
      title = 'Untitled',
      summary = '',
      date = '',
      image = '',
      imageAlt = '',
      tags = [],
      featured = false,
      content = '',   // optional rich text/HTML string
      html = '',      // optional alternative key
      body = ''       // optional alternative key
    } = u;

    document.title = `${title} — Veilscope`;

    titleEl.textContent = title;

    if (date) {
      dateEl.dateTime = date;
      dateEl.textContent = new Date(date).toLocaleDateString();
    }

    // tags
    tagsEl.innerHTML = (tags || [])
      .map((t) => `<span class="update-tag">${t}</span>`)
      .join('');

    // featured badge — show only when the data has a *boolean* true
    badgeEl.toggleAttribute('hidden', featured !== true);

    // media
    if (image) {
      imgEl.src = image;
      imgEl.alt = imageAlt || '';
    } else {
      imgEl.src = '';
      imgEl.alt = '';
      imgEl.style.display = 'none';
    }
    if (imageAlt) imgAltEl.textContent = imageAlt;

    // content
    const text = html || content || body || summary;
    // Trusting provided HTML; if plain text, wrap in <p>
    articleEl.innerHTML = /<\/?[a-z][\s\S]*>/i.test(text) ? text : `<p>${escapeHtml(text)}</p>`;
  }

  function renderNotFound() {
    titleEl.textContent = 'Update not found';
    articleEl.innerHTML = `<p>We couldn’t find that update. <a href="${backLink.href}">Back to Updates</a>.</p>`;
    imgEl.style.display = 'none';
    dateEl.textContent = '';
    tagsEl.innerHTML = '';
    badgeEl.hidden = true;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
})();
