(function(){
  // -------------------- Theme --------------------
  const root = document.documentElement;
  const storageKey = 'vs-theme';
  const lastKey = 'vs-last-company';
  const radios = () => document.querySelectorAll('input[name="theme"]');

  function applyTheme(v){
    if(!v || v === 'system'){
      root.removeAttribute('data-theme');
      root.setAttribute('data-theme', 'system');
    }else{
      root.setAttribute('data-theme', v);
    }
  }
  applyTheme(localStorage.getItem(storageKey) || 'system');

  // -------------------- Drawer (mobile only) --------------------
  const drawer  = document.getElementById('appDrawer');
  const scrim   = document.getElementById('scrim');
  const menuBtn = document.getElementById('menuBtn');

  function openDrawer(){
    drawer.removeAttribute('aria-hidden');
    drawer.classList.add('is-open');
    scrim.hidden = false;
    menuBtn?.setAttribute('aria-expanded', 'true');
    drawer.focus();
    document.body.classList.add('no-scroll');
  }
  function closeDrawer(){
    drawer.setAttribute('aria-hidden', 'true');
    drawer.classList.remove('is-open');
    scrim.hidden = true;
    menuBtn?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }
  menuBtn?.addEventListener('click', () => {
    if(drawer.classList.contains('is-open')) closeDrawer(); else openDrawer();
  });
  scrim?.addEventListener('click', closeDrawer);

  // -------------------- Settings modal --------------------
  const settingsDialog = document.getElementById('settingsDialog');
  const openSettings   = document.getElementById('openSettings');
  const closeSettings  = document.getElementById('closeSettings');
  const cancelSettings = document.getElementById('cancelSettings');
  const saveSettings   = document.getElementById('saveSettings');

  let lastFocus = null;

  function trapFocus(e){
    if(!settingsDialog || settingsDialog.hasAttribute('hidden')) return;
    const list = settingsDialog.querySelectorAll('a,button,input,textarea,select,[tabindex]:not([tabindex="-1"])');
    if(!list.length) return;
    const first = list[0], last = list[list.length - 1];
    if(e.key !== 'Tab') return;
    if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }
  function openModal(){
    lastFocus = document.activeElement;
    settingsDialog.removeAttribute('hidden');
    document.addEventListener('keydown', trapFocus);
    const current = localStorage.getItem(storageKey) || 'system';
    radios().forEach(r => r.checked = (r.value === current));
    const first = settingsDialog.querySelector('input[name="theme"]');
    first && first.focus();
  }
  function closeModal(){
    settingsDialog.setAttribute('hidden','');
    document.removeEventListener('keydown', trapFocus);
    lastFocus && lastFocus.focus();
  }
  openSettings?.addEventListener('click', openModal);
  closeSettings?.addEventListener('click', closeModal);
  cancelSettings?.addEventListener('click', closeModal);
  saveSettings?.addEventListener('click', () => {
    const v = [...radios()].find(r => r.checked)?.value || 'system';
    localStorage.setItem(storageKey, v);
    applyTheme(v);
    closeModal();
  });

  // Re-apply if OS theme changes and we're on system
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  mql.addEventListener?.('change', () => {
    if((localStorage.getItem(storageKey) || 'system') === 'system') applyTheme('system');
  });

  // Close modal/drawer on Escape; focus search with '/'
  window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      if(drawer && drawer.classList.contains('is-open')) closeDrawer();
      if(settingsDialog && !settingsDialog.hasAttribute('hidden')) closeModal();
      hidePopover(notifPopover, notifBtn);
      hidePopover(profilePopover, profileBtn);
    }
    if(e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA'){
      e.preventDefault();
      document.getElementById('tickerSearch')?.focus();
    }
  });

  // -------------------- Popovers: Notifications + Profile --------------------
  const notifBtn = document.getElementById('notifBtn');
  const notifPopover = document.getElementById('notifPopover');
  const profileBtn = document.getElementById('profileBtn');
  const profilePopover = document.getElementById('profilePopover');

  function showPopover(pop, btn){
    if(!pop || !btn) return;
    pop.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
  }
  function hidePopover(pop, btn){
    if(!pop || !btn) return;
    pop.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
  }
  function togglePopover(pop, btn){
    if(pop.hidden) showPopover(pop, btn); else hidePopover(pop, btn);
  }

  notifBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    hidePopover(profilePopover, profileBtn);
    togglePopover(notifPopover, notifBtn);
  });
  profileBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    hidePopover(notifPopover, notifBtn);
    togglePopover(profilePopover, profileBtn);
  });
  document.addEventListener('click', (e) => {
    if(!notifPopover?.hidden && !notifPopover.contains(e.target) && e.target !== notifBtn){
      hidePopover(notifPopover, notifBtn);
    }
    if(!profilePopover?.hidden && !profilePopover.contains(e.target) && e.target !== profileBtn){
      hidePopover(profilePopover, profileBtn);
    }
  });

  // -------------------- Placeholder company data --------------------
  const DATA = {
    AAPL: {
      name: "Apple Inc.",
      desc: "Consumer electronics and services.",
      score: 82,
      factors: [
        { label: "Product diversification", text: "Strong ecosystem defends margins.", sev: "good" },
        { label: "Supply chain concentration", text: "Exposure to key suppliers remains.", sev: "medium" },
        { label: "Regulatory scrutiny", text: "App store policies under review.", sev: "medium" },
        { label: "Currency/FX", text: "Headwinds moderated vs prior year.", sev: "good" },
        { label: "Hardware cycle risk", text: "Upgrade cadence can slow revenue.", sev: "medium" },
        { label: "Services growth", text: "Recurring revenue offsets cycles.", sev: "good" },
        { label: "Geographic concentration", text: "China exposure is a watch item.", sev: "bad" }
      ]
    },
    MSFT: {
      name: "Microsoft Corporation",
      desc: "Software, cloud, and AI services.",
      score: 88,
      factors: [
        { label: "Cloud growth", text: "Azure expansion remains robust.", sev: "good" },
        { label: "AI integration", text: "Copilot adoption early but rising.", sev: "good" },
        { label: "Competition", text: "Cloud & productivity markets are crowded.", sev: "medium" },
        { label: "Regulatory/Antitrust", text: "Ongoing reviews across regions.", sev: "medium" },
        { label: "Enterprise retention", text: "High switching costs favor renewals.", sev: "good" },
        { label: "Security incidents", text: "Industry-wide risks persist.", sev: "medium" },
        { label: "FX exposure", text: "Manageable against diversified base.", sev: "good" }
      ]
    },
    NVDA: {
      name: "NVIDIA Corporation",
      desc: "Semiconductors for accelerated computing and AI.",
      score: 91,
      factors: [
        { label: "Demand concentration", text: "High reliance on hyperscalers.", sev: "medium" },
        { label: "Supply capacity", text: "Foundry constraints improving.", sev: "good" },
        { label: "Competitive landscape", text: "New entrants and custom silicon.", sev: "medium" },
        { label: "Product leadership", text: "Strong moat in software ecosystem.", sev: "good" },
        { label: "Export controls", text: "Restrictions can affect shipments.", sev: "bad" },
        { label: "Inventory risk", text: "Tied to rapid product cycles.", sev: "medium" },
        { label: "Ecosystem dependency", text: "CUDA/software aids stickiness.", sev: "good" }
      ]
    },
    XOM: {
      name: "Exxon Mobil Corporation",
      desc: "Integrated energy company.",
      score: 67,
      factors: [
        { label: "Commodity price volatility", text: "Earnings sensitive to crude prices.", sev: "medium" },
        { label: "Energy transition", text: "Policy shifts pose long-term risks.", sev: "bad" },
        { label: "Operational scale", text: "Diversification across upstream/downstream.", sev: "good" },
        { label: "Capex discipline", text: "Project execution remains key.", sev: "medium" },
        { label: "Regulatory/environmental", text: "Litigation and compliance risk.", sev: "bad" },
        { label: "Balance sheet", text: "Improved leverage vs prior cycle.", sev: "good" },
        { label: "Geopolitical exposure", text: "Sanctions and regional risks.", sev: "medium" }
      ]
    },
    SAMPLE: {
      name: "Sample Company",
      desc: "Demonstration scorecard for layout preview.",
      score: 50,
      factors: [
        { label: "Market dynamics", text: "Mixed trends across segments.", sev: "medium" },
        { label: "Customer concentration", text: "Top clients >30% of revenue.", sev: "bad" },
        { label: "Cash runway", text: "12–18 months projected.", sev: "good" },
        { label: "Leadership turnover", text: "Recent changes introduce uncertainty.", sev: "medium" },
        { label: "Debt covenants", text: "No near-term breaches expected.", sev: "good" },
        { label: "Supply dependencies", text: "Single-source components.", sev: "bad" },
        { label: "Product maturity", text: "Early-stage adoption.", sev: "medium" }
      ]
    }
  };

  // -------------------- Content binding --------------------
  const nameEl  = document.getElementById('companyName');
  const descEl  = document.getElementById('companyDesc');
  const scoreEl = document.getElementById('companyScore');
  const listEl  = document.getElementById('factorList');
  const tabbar  = document.querySelector('.tabbar');

  function renderCompany(key){
    const d = DATA[key] || DATA.SAMPLE;
    nameEl.textContent  = d.name;
    descEl.textContent  = d.desc;
    scoreEl.textContent = `${d.score}/100`;
    listEl.innerHTML = '';
    d.factors.forEach(f => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="dot ${f.sev}"></span><strong>${f.label}:</strong> <span>${f.text}</span>`;
      listEl.appendChild(li);
    });
    localStorage.setItem(lastKey, key);
  }

  // Make/activate a tab
  function setActiveTab(tabBtn){
    document.querySelectorAll('.tabbar .tab').forEach(t => {
      t.classList.remove('is-active');
      t.setAttribute('aria-selected','false');
      t.closest('.tabitem')?.classList.remove('is-active');
    });
    tabBtn.classList.add('is-active');
    tabBtn.setAttribute('aria-selected','true');
    tabBtn.closest('.tabitem')?.classList.add('is-active');
    renderCompany(tabBtn.getAttribute('data-key'));
  }
  function createTab(key, label, activate=false){
    const existing = document.querySelector(`.tabbar .tab[data-key="${key}"]`);
    if(existing){ if(activate) setActiveTab(existing); return existing; }
    const item = document.createElement('div');
    item.className = 'tabitem';
    item.innerHTML = `
      <button role="tab" aria-selected="false" class="tab" data-key="${key}" id="tab-${key}">${label}</button>
      <button class="tab-close" aria-label="Close ${label}" data-key="${key}" title="Close">\u00D7</button>
    `;
    tabbar.appendChild(item);
    const btn = item.querySelector('.tab');
    if(activate) setActiveTab(btn);
    return btn;
  }
  function closeTab(key){
    const item = document.querySelector(`.tabitem .tab[data-key="${key}"]`)?.closest('.tabitem');
    if(!item) return;
    const isActive = item.querySelector('.tab').classList.contains('is-active');
    const nextItem = item.nextElementSibling || item.previousElementSibling;
    item.remove();
    // Ensure at least one tab
    if(!document.querySelector('.tabbar .tab')){
      createTab('SAMPLE', 'Sample Scorecard', true);
      return;
    }
    if(isActive){
      const target = nextItem?.querySelector('.tab') || document.querySelector('.tabbar .tab');
      target && setActiveTab(target);
    }
  }

  // Click handling within tabbar (tabs + close)
  tabbar.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('tab')){
      setActiveTab(el);
    } else if(el.classList.contains('tab-close')){
      closeTab(el.getAttribute('data-key'));
    }
  });
  // Keyboard: Delete/Backspace closes the focused tab
  tabbar.addEventListener('keydown', (e) => {
    const el = e.target;
    if(el.classList.contains('tab') && (e.key === 'Delete' || e.key === 'Backspace')){
      e.preventDefault();
      closeTab(el.getAttribute('data-key'));
    }
  });

  // -------------------- Tree links (load company) --------------------
  document.querySelectorAll('.tree a[data-key]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const key = a.getAttribute('data-key');
      const label = a.textContent.trim() || `${key} — Scorecard`;
      createTab(key, label, true);
      if(window.matchMedia('(max-width: 991px)').matches) closeDrawer();
    });
  });

  // -------------------- New Folder button --------------------
  const newFolderBtn  = document.getElementById('newFolderBtn');
  const portfolioList = document.getElementById('portfolioList');
  let folderCount = 1;

  function makeFolder(name){
    const li = document.createElement('li');
    li.innerHTML = `
      <details open>
        <summary>${name}</summary>
        <ul>
          <li><a href="#" data-key="SAMPLE">${name} — Sample File</a></li>
        </ul>
      </details>
    `;
    portfolioList.appendChild(li);
    li.querySelectorAll('a[data-key]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const key = a.getAttribute('data-key');
        const label = a.textContent.trim() || `${key} — Scorecard`;
        createTab(key, label, true);
        if(window.matchMedia('(max-width: 991px)').matches) closeDrawer();
      });
    });
  }
  newFolderBtn?.addEventListener('click', () => { makeFolder(`New Folder ${folderCount++}`); });

  // -------------------- Initial load (restore last-open) --------------------
  const lastCompany = localStorage.getItem(lastKey);
  if(lastCompany){
    const existing = document.querySelector(`.tabbar .tab[data-key="${lastCompany}"]`);
    existing ? setActiveTab(existing) : createTab(lastCompany, `${lastCompany} — Scorecard`, true);
  }else{
    const first = document.querySelector('.tabbar .tab[data-key="AAPL"]') || document.querySelector('.tabbar .tab');
    first && setActiveTab(first);
  }
})();
