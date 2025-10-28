// pages/webapp.js
import styles from '../styles/pages/webapp.module.css'; // web app css
import Head from "next/head";

export default function WebAppPage() {
    return (
        <>
            <Head>
                <title>Veilscope — App Preview</title>
                <meta name="color-scheme" content="light dark" />
                <link rel="stylesheet" href="/assets/css/app.css" />
                <link rel="stylesheet" href="/assets/css/pages/webapp.css" />
            </Head>

            <body className={styles.webapp}>
                <header className={styles['app-topbar']} role="banner">
                    <div className={styles['topbar-left']}>
                        <button className={`${styles['icon-btn']} ${styles['menu-btn']}`} id="menuBtn" aria-label="Open navigation" aria-controls="appDrawer" aria-expanded="false">
                            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                        </button>

                        <a className={styles['app-brand']} href="/">
                            <img className={`${styles.logo} ${styles['logo-dark']}`} src="/assets/img/logos/veilscope-logo-dark.svg" alt="Veilscope" />
                            <img className={`${styles.logo} ${styles['logo-light']}`} src="/assets/img/logos/veilscope-logo-light.svg" alt="Veilscope" />
                        </a>
                    </div>

                    <div className={styles.tabbar} role="tablist" aria-label="Open items">
                        <div className={`${styles.tabitem} ${styles['is-active']}`}>
                            <button role="tab" aria-selected="true" className={styles.tab} data-key="AAPL" id="tab-AAPL">AAPL 10-K</button>
                            <button className={styles['tab-close']} aria-label="Close AAPL 10-K" data-key="AAPL" title="Close">×</button>
                        </div>
                        <div className={styles.tabitem}>
                            <button role="tab" aria-selected="false" className={styles.tab} data-key="MSFT" id="tab-MSFT">MSFT 10-Q</button>
                            <button className={styles['tab-close']} aria-label="Close MSFT 10-Q" data-key="MSFT" title="Close">×</button>
                        </div>
                        <div className={styles.tabitem}>
                            <button role="tab" aria-selected="false" className={styles.tab} data-key="SAMPLE" id="tab-SAMPLE">Sample Scorecard</button>
                            <button className={styles['tab-close']} aria-label="Close Sample Scorecard" data-key="SAMPLE" title="Close">×</button>
                        </div>
                    </div>

                    <div className={styles['topbar-actions']}>
                        <span className={styles.action}>
                            <button className={styles['icon-btn']} id="openSettings" aria-haspopup="dialog" aria-controls="settingsMenu" aria-label="Open settings">
                                <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33…"/>
                                </svg>
                            </button>
                            <div className={styles['menu-popover']} id="settingsMenu" role="dialog" aria-modal="false" aria-label="Settings" hidden>
                                {/* settings UI */}
                            </div>
                        </span>
                        {/* Notifications & Profile UI omitted for brevity */}
                    </div>
                </header>

                <div className={styles.scrim} id="scrim" hidden></div>
                <aside id="appDrawer" className={styles['app-drawer']} role="complementary" aria-label="Explorer" aria-hidden="true" tabIndex="-1">
                    <div className={styles['drawer-head']}>
                        <div className={styles.search}>
                            <input id="tickerSearch" type="search" inputMode="search" placeholder="Search Ticker…" aria-label="Search ticker" />
                            <button className={styles['icon-btn']} aria-label="Search">
                                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 21l-4.3-4.3M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0-16Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                            </button>
                        </div>
                        <div className={styles['drawer-actions']}>
                            <button className={styles['mini-btn']} id="newFolderBtn" aria-label="New Folder">New Folder</button>
                            <button className={styles['mini-btn']} aria-label="New Analysis">New Analysis</button>
                        </div>
                    </div>

                    <nav className={styles.tree} aria-label="Saved items">
                        {/* Drawer content */}
                    </nav>
                </aside>

                <div className={styles.workbench}>
                    <main className={styles['pane-main']} id="content" tabIndex="-1">
                        <h1 className={styles.company} id="companyName">Company Name</h1>
                        <p className={styles.desc} id="companyDesc">Description</p>
                        <div className={styles.score}>Score: <strong id="companyScore">0/100</strong></div>
                        <section aria-labelledby="factors-title" className={styles.factors}>
                            <h2 id="factors-title" className={styles['sr-only']}>Risk Factors</h2>
                            <ul className={styles['factor-list']} id="factorList" role="list"></ul>
                        </section>
                    </main>
                    <aside className={styles['pane-side']} aria-label="Charts">
                        <h2 className={styles['charts-title']}>Charts</h2>
                        <div className={`${styles.skeleton} ${styles.chart}`}></div>
                        <div className={`${styles.skeleton} ${styles.chart}`}></div>
                    </aside>
                </div>

                <footer className={styles.statusbar} role="contentinfo">
                    <div className={styles['status-item']}>EDGAR: <span className={`${styles['status-dot']} ${styles.ok}`}></span> reachable</div>
                    <div className={styles['status-item']}>Rate limit: —</div>
                    <div className={styles['status-item']}>Last sync: —</div>
                </footer>

                <script src="/assets/js/webapp.js" defer></script>
            </body>
        </>
    );
}
