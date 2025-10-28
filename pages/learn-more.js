// pages/learn-more.js
import styles from '../styles/pages/learn-more.module.css'; // learn more css
import Head from "next/head";

export default function LearnMorePage() {
    return (
        <>
            <Head>
                <title>Learn More — Veilscope</title>

                {/* Favicons & meta tags */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/icons/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/icons/apple-touch-icon.png" />
                <link rel="manifest" href="/assets/img/icons/site.webmanifest" />
                <meta name="theme-color" content="#F3F4F6" />
                <meta name="msapplication-TileColor" content="#F3F4F6" />

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            </Head>

            <body>
                <a className={styles['skip-link']} href="#main">Skip to main content</a>
                <input id="nav-toggle" className={styles['nav-toggle']} type="checkbox" aria-hidden="true" />

                <header className={styles['site-header']} role="banner">
                    <div className={styles['nav-wrap']}>
                        <a className={styles.brand} href="/" aria-label="Veilscope Home">
                            <img className={styles['brand-logo']} src="/assets/img/logos/veilscope-logo-dark.svg" alt="Veilscope" />
                        </a>

                        <nav className={styles['primary-nav']} aria-label="Primary">
                            <ul className={styles['nav-list']}>
                                <li><a href="/learn-more" aria-current="page">Learn More</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/updates">Project Updates</a></li>
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
                        <a className={styles['drawer-link']} href="/learn-more" aria-current="page">Learn More</a>
                        <a className={styles['drawer-link']} href="/about">About Us</a>
                        <a className={styles['drawer-link']} href="/updates">Project Updates</a>
                    </nav>
                    <div className={styles['drawer-actions']}>
                        <a className={`${styles.btn} ${styles['btn-get-started']}`} href="https://app.veilscope.com/signup">Create a free account</a>
                        <a className={`${styles.btn} ${styles['btn-login']}`} href="https://app.veilscope.com/login">Log In</a>
                    </div>
                </aside>

                <main id="main">
                    <section className={styles['lm-hero']} aria-labelledby="lm-title">
                        <div className={styles.container}>
                            <h1 id="lm-title">Understand company risk from SEC filings — fast</h1>
                            <p className={styles.subhead}>
                                We turn dense 10-K/10-Q reports into plain-English risk scorecards so individual investors can make more informed decisions.
                            </p>
                            <div className={styles['hero-ctas']}>
                                <a className={`${styles.btn} ${styles['btn-get-started']}`} href="https://app.veilscope.com/signup">Create a free account</a>
                                <a className={`${styles.btn} ${styles['btn-secondary']}`} href="#how-title">See how it works</a>
                            </div>
                        </div>
                    </section>

                    <section className={`${styles.section} ${styles.ps}`} aria-labelledby="ps-title">
                        <div className={styles.container}>
                            <div className={`${styles.grid} ${styles.two}`}>
                                <div>
                                    <h2 id="ps-title">The problem</h2>
                                    <p>
                                        SEC filings (10-K and 10-Q) are long, technical, and time-consuming. Non-experts struggle to translate them into actionable insights.
                                    </p>
                                </div>
                                <div>
                                    <h2>The solution</h2>
                                    <p>
                                        Veilscope retrieves filings via the SEC EDGAR APIs, extracts key financial data, and uses an AI model to generate a concise risk “scorecard.”
                                        You see the signals that matter—without wading through hundreds of pages.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={`${styles.section} ${styles.how}`} aria-labelledby="how-title">
                        <div className={styles.container}>
                            <h2 id="how-title">How it works</h2>
                            <ol className={styles.flow} aria-label="Process steps">
                                <li className={styles.node}>
                                    <div className={styles['node-body']}>
                                        <h3>1) Retrieve</h3>
                                        <p>Pull 10-K/10-Q data programmatically from the SEC EDGAR APIs.</p>
                                    </div>
                                </li>
                                <li className={styles.node}>
                                    <div className={styles['node-body']}>
                                        <h3>2) Extract</h3>
                                        <p>Capture key sections (Risk Factors, MD&A) and core financials.</p>
                                    </div>
                                </li>
                                <li className={styles.node}>
                                    <div className={styles['node-body']}>
                                        <h3>3) Generate</h3>
                                        <p>Create a plain-English scorecard that summarizes overall risk.</p>
                                    </div>
                                </li>
                            </ol>
                            <div className={`${styles.note} ${styles.trust}`}>
                                Built on public filings from the SEC’s EDGAR system. We prioritize clear language and transparent sources.
                            </div>
                        </div>
                    </section>

                    <section className={`${styles.section} ${styles['cta-band']}`} aria-labelledby="cta-title">
                        <div className={styles.container}>
                            <div className={styles['cta-card']}>
                                <h2 id="cta-title">See your first risk scorecard</h2>
                                <p>Set up a free account and explore risk signals pulled directly from SEC filings.</p>
                                <a className={`${styles.btn} ${styles['btn-get-started']}`} href="https://app.veilscope.com/signup">Create a free account</a>
                            </div>
                        </div>
                    </section>

                    <section className={`${styles.section} ${styles.method}`} aria-labelledby="method-title">
                        <div className={styles.container}>
                            <h2 id="method-title">What goes into the scorecard</h2>
                            <div className={`${styles.grid} ${styles.three}`}>
                                <div className={styles.card}>
                                    <h3>Inputs</h3>
                                    <ul className={styles.list} role="list">
                                        <li>Risk Factors &amp; MD&A</li>
                                        <li>Financial statements &amp; key ratios</li>
                                        <li>Company metadata</li>
                                    </ul>
                                </div>
                                <div className={styles.card}>
                                    <h3>Signals</h3>
                                    <ul className={styles.list} role="list">
                                        <li>Qualitative cues from narratives</li>
                                        <li>Quantitative checks (ratios &amp; trends)</li>
                                        <li>Consistency across reports</li>
                                    </ul>
                                </div>
                                <div className={styles.card}>
                                    <h3>Output</h3>
                                    <ul className={styles.list} role="list">
                                        <li>Risk summary in plain English</li>
                                        <li>Highlights &amp; flags</li>
                                        <li>Links back to source sections</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={`${styles.section} ${styles.research}`} aria-labelledby="research-title">
                        <div className={styles.container}>
                            <h2 id="research-title">What we build on</h2>
                            <ul className={styles.bullets} role="list">
                                <li>EDGAR provides free, programmatic access to filings.</li>
                                <li>AI is widely used in finance; our focus is accessibility for individual investors.</li>
                                <li>We combine text analysis with simple quantitative checks for balance.</li>
                            </ul>
                        </div>
                    </section>

                    <section className={`${styles.section} ${styles.challenges}`} aria-labelledby="ch-title">
                        <div className={styles.container}>
                            <h2 id="ch-title">Challenges &amp; how we address them</h2>
                            <details className={styles.disc}>
                                <summary><span>Complexity of SEC filings</span></summary>
                                <div className={styles['disc-panel']}>
                                    <p>Filings are lengthy and inconsistent. We begin with key sections and expand as we validate utility.</p>
                                </div>
                            </details>
                            <details className={styles.disc}>
                                <summary><span>Model accuracy &amp; interpretation</span></summary>
                                <div className={styles['disc-panel']}>
                                    <p>We balance qualitative AI with quantitative checks and manually validate on sample companies.</p>
                                </div>
                            </details>
                            <details className={styles.disc}>
                                <summary><span>Limited team experience</span></summary>
                                <div className={styles['disc-panel']}>
                                    <p>We invest in a research phase to study filings and practice small API queries; we’ll seek advisor feedback at milestones.</p>
                                </div>
                            </details>
                        </div>
                    </section>

                    <section className={`${styles.section} ${styles.future}`} aria-labelledby="future-title">
                        <div className={styles.container}>
                            <div className={`${styles.card} ${styles['card-future']}`}>
                                <h2 id="future-title">Future addition: fraud detection</h2>
                                <p>
                                    Analyze anomalies in financials and suspicious language in Risk Factors to flag potential irregularities—moving from risk scoring toward early fraud signals.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className={`${styles.section} ${styles.faq}`} aria-labelledby="faq-title">
                        <div className={styles.container}>
                            <h2 id="faq-title">FAQ</h2>
                            <details className={styles.disc}>
                                <summary><span>Where does your data come from?</span></summary>
                                <div className={styles['disc-panel']}>
                                    <p>From the SEC’s EDGAR system via public APIs. We link back to source sections when possible.</p>
                                </div>
                            </details>
                            <details className={styles.disc}>
                                <summary><span>How often is information updated?</span></summary>
                                <div className={styles['disc-panel']}>
                                    <p>We refresh based on new or amended filings available through EDGAR.</p>
                                </div>
                            </details>
                            <details className={styles.disc}>
                                <summary><span>Is this investment advice?</span></summary>
                                <div className={styles['disc-panel']}>
                                    <p>No. We provide educational risk summaries derived from public filings. Investment decisions are your responsibility.</p>
                                </div>
                            </details>
                            <details className={styles.disc}>
                                <summary><span>Can I see how the score was generated?</span></summary>
                                <div className={styles['disc-panel']}>
                                    <p>We aim to show inputs and highlight snippets used in the summary wherever possible.</p>
                                </div>
                            </details>
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
                                <li><a href="#">Newsletter</a></li>
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
