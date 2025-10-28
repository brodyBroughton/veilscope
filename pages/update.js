// pages/update.js
import styles from '../styles/pages/update.module.css'; // project update card css
import Head from "next/head";

export default function UpdatePage() {
    return (
        <>
            <Head>
                <title>Update — Veilscope</title>
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
                        <a className={styles.brand} href="/"><img className={styles['brand-logo']} src="/assets/img/logos/veilscope-logo-dark.svg" alt="Veilscope" /></a>

                        <nav className={styles['primary-nav']} aria-label="Primary">
                            <ul className={styles['nav-list']}>
                                <li><a href="/learn-more">Learn More</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/updates" aria-current="page">Project Updates</a></li>
                            </ul>
                        </nav>

                        <div className={styles['nav-actions']}>
                            <a className={`${styles.btn} ${styles['btn-login']}`} href="https://app.veilscope.com/login">Log In</a>
                            <a className={`${styles.btn} ${styles['btn-get-started']}`} href="https://app.veilscope.com/signup">Get Started</a>
                        </div>

                        <label className={styles.hamburger} htmlFor="nav-toggle" aria-controls="mobile-menu" aria-expanded="false" role="button">
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
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
                    <section className={styles['update-hero']} aria-labelledby="update-title">
                        <div className={styles['update-wrap']}>
                            <nav aria-label="Breadcrumb" className={styles.crumbs}>
                                <a className={styles['crumb-back']} id="back-link" href="/updates">← Back to Updates</a>
                            </nav>
                            <div className={styles['update-header']}>
                                <h1 id="update-title">Loading…</h1>
                                <div className={styles['update-meta-row']}>
                                    <time id="update-date" dateTime=""></time>
                                    <div id="update-tags" className={styles['update-tags']}></div>
                                    <span id="update-badge" className={`${styles.badge} ${styles['badge-featured']}`} hidden>Featured</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles['update-hero-media']} aria-label="Header media">
                        <figure className={styles['hero-figure']}>
                            <img id="update-image" alt="" />
                            <figcaption id="update-image-alt" className={styles['sr-only']}></figcaption>
                        </figure>
                    </section>

                    <section className={styles['update-body-section']}>
                        <div className={styles['update-wrap']}>
                            <article id="update-article" className={styles.prose}>
                                {/* update.js will render content here */}
                            </article>

                            <hr className={styles['update-divider']} />

                            <nav className={styles['update-pager']} aria-label="More updates">
                                <a id="prev-update" className={styles['pager-link']} href="#" hidden>← Previous</a>
                                <a id="next-update" className={styles['pager-link']} href="#" hidden>Next →</a>
                            </nav>
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
                <script src="/assets/js/update.js" defer></script>
            </body>
        </>
    );
}
