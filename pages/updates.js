// pages/updates.js
import styles from '../styles/pages/updates.module.css'; // project updates css
import Head from "next/head";

export default function UpdatesPage() {
    return (
        <>
            <Head>
                <title>Project Updates — Veilscope</title>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/icons/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/icons/apple-touch-icon.png" />
                <link rel="manifest" href="/assets/img/icons/site.webmanifest" />
                <meta name="theme-color" content="#F3F4F6" />
                <meta name="msapplication-TileColor" content="#F3F4F6" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <body>
                <a className={styles['skip-link']} href="#main">Skip to main content</a>
                <input id="nav-toggle" className={styles['nav-toggle']} type="checkbox" aria-hidden="true" />

                <header className={styles['site-header']}>
                    <div className={styles['nav-wrap']}>
                        <a className={styles.brand} href="/" aria-label="Veilscope Home">
                            <img className={styles['brand-logo']} src="/assets/img/logos/veilscope-logo-dark.svg" alt="Veilscope" />
                        </a>
                        <nav className={styles['primary-nav']} aria-label="Primary">
                            <ul className={styles['nav-list']}>
                                <li><a href="/learn-more">Learn More</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/updates" aria-current="page">Project Updates</a></li>
                            </ul>
                        </nav>
                        <div className={styles['nav-actions']}>
                            <a className={`${styles.btn} ${styles['btn-login']}`} href="https://app.veilscope.com/login">Log In</a>
                            <a className={`${styles.btn} ${styles['btn-get-started']}`} href="https://app.veilscope.com/signup">Create a free account</a>
                        </div>
                        <label className={styles.hamburger} htmlFor="nav-toggle" role="button"
                                     aria-label="Open menu" aria-controls="mobile-menu" aria-expanded="false">
                            <span className={styles.bar} aria-hidden="true"></span>
                            <span className={styles.bar} aria-hidden="true"></span>
                            <span className={styles.bar} aria-hidden="true"></span>
                        </label>
                    </div>
                </header>

                <aside id="mobile-menu" className={styles['mobile-drawer']} aria-label="Mobile navigation">
                    <nav className={styles['drawer-nav']}>
                        <a className={styles['drawer-link']} href="/learn-more">Learn More</a>
                        <a className={styles['drawer-link']} href="/about">About Us</a>
                        <a className={styles['drawer-link']} href="/updates" aria-current="page">Project Updates</a>
                    </nav>
                    <div className={styles['drawer-actions']}>
                        <a className={`${styles.btn} ${styles['btn-get-started']}`} href="https://app.veilscope.com/signup">Create a free account</a>
                        <a className={`${styles.btn} ${styles['btn-login']}`} href="https://app.veilscope.com/login">Log In</a>
                    </div>
                </aside>

                <main id="main">
                    <section className={styles['updates-hero']} aria-labelledby="updates-title">
                        <div className={styles['updates-wrap']}>
                            <h1 id="updates-title">Project Updates</h1>
                            <p>Release notes, model improvements, and product changes from the Veilscope team.</p>
                        </div>
                    </section>

                    <div className={styles['updates-toolbar']} role="region" aria-label="Updates filters">
                        <div className={styles.search}>
                            <label className={styles['sr-only']} htmlFor="updates-search">Search updates</label>
                            <input id="updates-search" type="search" placeholder="Search updates…" autoComplete="off" />
                        </div>
                        <div className={styles.chips} role="group" aria-label="Filter by tag">
                            <button className={styles.chip} data-tag="All" aria-pressed="true">All</button>
                            <button className={styles.chip} data-tag="Weekly Report" aria-pressed="false">Weekly Reports</button>
                            <button className={styles.chip} data-tag="Brody" aria-pressed="false">Brody</button>
                            <button className={styles.chip} data-tag="Jacob" aria-pressed="false">Jacob</button>
                        </div>
                        <div className={styles.sort}>
                            <label htmlFor="sort-select">Sort</label>
                            <select id="sort-select" name="sort">
                                <option value="featured" selected>Featured</option>
                                <option value="date_desc">Newest first</option>
                                <option value="date_asc">Oldest first</option>
                            </select>
                        </div>
                    </div>

                    <section className={styles['updates-section']} aria-labelledby="updates-grid-title">
                        <div className={styles['updates-wrap']}>
                            <h2 id="updates-grid-title" className={styles['sr-only']}>Latest updates</h2>
                            <div className={styles['updates-grid']}>
                                {/* update cards will be injected via JS */}
                            </div>
                        </div>
                    </section>
                </main>

                <div className={styles['footer-leadin']} aria-hidden="true"></div>
                <footer className={styles['site-footer']} role="contentinfo">
                    <div className={styles['footer-wrap']}>
                        <section className={styles['footer-brand']}>
                            <a className={`${styles.brand} ${styles['brand--footer']}`} href="/" aria-label="Veilscope Home">
                                <img className={styles['brand-logo']} src="/assets/img/logos/veilscope-logo-light.svg" alt="Veilscope" />
                            </a>
                            <p className={styles['footer-tagline']}>AI insights from public financial filings.</p>

                            <form className={styles.newsletter} action="#" method="post" noValidate>
                                <label className={styles['newsletter-label']} htmlFor="newsletter-email">Project Updates</label>
                                <div className={styles['newsletter-row']}>
                                    <input id="newsletter-email" name="email" type="email" placeholder="you@example.com" required />
                                    <button className={`${styles.btn} ${styles['btn-get-started']}`} type="submit">Subscribe</button>
                                </div>
                                <p className={styles['newsletter-help']}>By signing up, you agree to receive emails. Read our <a href="#">Privacy Policy</a>.</p>
                                <p className={styles['newsletter-msg']} aria-live="polite"></p>
                            </form>
                        </section>

                        <nav className={styles['footer-col']} aria-label="Explore">
                            <h3 className={styles['footer-title']}>Explore</h3>
                            <ul className={styles['footer-links']}>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/learn-more">About the Project</a></li>
                                <li><a href="/updates">Project Updates</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                <li><a href="/learn-more#faq">Help &amp; FAQ</a></li>
                            </ul>
                        </nav>

                        <nav className={styles['footer-col']} aria-label="Connect">
                            <h3 className={styles['footer-title']}>Connect</h3>
                            <ul className={styles['footer-links']}>
                                <li><a href="#">Resources and References</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </nav>

                        <nav className={styles['footer-col']} aria-label="Socials">
                            <h3 className={styles['footer-title']}>Socials</h3>
                            <ul className={styles['footer-links']}>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">TikTok</a></li>
                                <li><a href="#">Facebook</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className={styles['footer-bottom']}>
                        <p className={styles.copyright}>© <span id="year"></span> Veilscope. All rights reserved.</p>
                        <ul className={styles['legal-links']}>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Status</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </footer>

                <script src="/assets/js/app.js" defer></script>
            </body>
        </>
    );
}
