// pages/about.js
import styles from '../styles/pages/about.module.css'; // about us css
import Head from "next/head";

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About Us — Veilscope</title>
                {/* Favicons & meta tags */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/icons/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/icons/apple-touch-icon.png" />
                <link rel="manifest" href="/assets/img/icons/site.webmanifest" />
                <meta name="theme-color" content="#F3F4F6" />
                <meta name="msapplication-TileColor" content="#F3F4F6" />

                {/* Fonts + global CSS */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                
            </Head>

            <div className={styles.page}>
                <a className={styles['skip-link']} href="#main">Skip to main content</a>

                <input id="nav-toggle" className={styles['nav-toggle']} type="checkbox" aria-hidden="true" />

                <header className={styles['site-header']} role="banner">
                    <div className={styles['nav-wrap']}>
                        <a className={styles.brand} href="/" aria-label="Veilscope Home">
                            <img className={styles['brand-logo']} src="/assets/img/logos/veilscope-logo-dark.svg" alt="Veilscope" />
                        </a>

                        <nav className={styles['primary-nav']} aria-label="Primary">
                            <ul className={styles['nav-list']}>
                                <li><a href="/learn-more">Learn More</a></li>
                                <li><a href="/about" aria-current="page">About Us</a></li>
                                <li><a href="/updates">Project Updates</a></li>
                            </ul>
                        </nav>

                        <div className={styles['nav-actions']}>
                            <a className={`${styles.btn} ${styles['btn-login']}`} href="https://app.veilscope.com/login">Log In</a>
                            <a className={`${styles.btn} ${styles['btn-get-started']}`} href="https://app.veilscope.com/signup">Get Started</a>
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
                        <a className={styles['drawer-link']} href="/about" aria-current="page">About Us</a>
                        <a className={styles['drawer-link']} href="/updates">Project Updates</a>
                    </nav>
                    <div className={styles['drawer-actions']}>
                        <a className={`${styles.btn} ${styles['btn-get-started']}`} href="https://app.veilscope.com/signup">Get Started</a>
                        <a className={`${styles.btn} ${styles['btn-login']}`} href="https://app.veilscope.com/login">Log In</a>
                    </div>
                </aside>

                <main id="main">
                    <section className={styles['about-hero']} aria-labelledby="about-title">
                        <div className={styles.container}>
                            <h1 id="about-title">Turning SEC filings into simple risk scorecards</h1>
                            <p className={styles.subhead}>
                                We fetch 10-K/10-Q data from the SEC EDGAR API, extract key signals,
                                and generate a plain-English risk summary—so individual investors decide faster.
                            </p>
                        </div>
                    </section>

                    <section className={styles['about-why']} aria-labelledby="why-title">
                        <div className={styles.container}>
                            <div className={styles['why-grid']}>
                                <div className={styles['why-col']}>
                                    <h2 id="why-title">Why Veilscope</h2>
                                    <p>
                                        SEC filings are long, technical, and tough to parse. Our AI-powered system
                                        retrieves disclosures via EDGAR, extracts the right data, and assembles a
                                        company risk “scorecard” you can actually use.
                                    </p>
                                    <ul className={styles['check-list']} role="list">
                                        <li>Built on SEC EDGAR data</li>
                                        <li>Plain-English risk summaries</li>
                                        <li>Transparent sources & methodology</li>
                                    </ul>
                                </div>

                                <div className={styles['why-col']}>
                                    <div className={styles.card}>
                                        <h3 className={styles['card-title']}>How it works (3 steps)</h3>
                                        <ol className={styles.steps} aria-label="Processing steps">
                                            <li><strong>Retrieve</strong> filings via EDGAR</li>
                                            <li><strong>Extract</strong> key financial signals</li>
                                            <li><strong>Generate</strong> an AI risk scorecard</li>
                                        </ol>
                                        <div className={`${styles.meta} ${styles.note}`}>
                                            This high-school senior capstone project aims to make complex disclosures more approachable
                                            for new investors.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={styles.team} aria-labelledby="team-title">
                        <div className={styles.container}>
                            <h2 id="team-title">Team</h2>

                            <div className={styles['team-group']} aria-labelledby="founders-title">
                                <h3 id="founders-title" className={styles['group-title']}>Founding Team</h3>
                                <div className={styles['team-grid']}>
                                    <article className={styles['team-card']}>
                                        <div className={styles['team-media']} aria-hidden="true">
                                            <img
                                                src="https://placehold.co/800x1000?text=Jacob%20Casey"
                                                width="800" height="1000" loading="lazy"
                                                alt="Jacob Casey, Co-founder & Head of AI/Back-End" />
                                        </div>
                                        <div className={styles['team-body']}>
                                            <h4 className={styles.name}>Jacob Casey</h4>
                                            <div className={styles.role}>Co-founder &amp; Head of AI/Back-End</div>
                                            <p className={styles.bio}>
                                                Builds our EDGAR/XBRL pipeline and risk model that powers each scorecard.
                                            </p>
                                            <ul className={styles.tags} role="list">
                                                <li>Retrieval</li>
                                                <li>Back-End</li>
                                                <li>LLMs</li>
                                            </ul>
                                        </div>
                                    </article>

                                    <article className={styles['team-card']}>
                                        <div className={styles['team-media']} aria-hidden="true">
                                            <img
                                                src="https://placehold.co/800x1000?text=Brody%20Broughton"
                                                width="800" height="1000" loading="lazy"
                                                alt="Brody Broughton, Co-founder & Product Designer / Front-End Lead" />
                                        </div>
                                        <div className={styles['team-body']}>
                                            <h4 className={styles.name}>Brody Broughton</h4>
                                            <div className={styles.role}>Co-founder & Product Designer / Front-End Lead</div>
                                            <p className={styles.bio}>
                                                Designs the end-to-end experience and leads the web build; later moves into back-end.
                                            </p>
                                            <ul className={styles.tags} role="list">
                                                <li>Design</li>
                                                <li>Front-End</li>
                                                <li>UX</li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            <div className={styles['team-group']} aria-labelledby="sponsor-title">
                                <h3 id="sponsor-title" className={styles['group-title']}>Sponsor</h3>
                                <div className={`${styles['team-grid']} ${styles['sponsor-grid']}`}>
                                    <article className={styles['team-card']}>
                                        <div className={styles['team-media']} aria-hidden="true">
                                            <img
                                                src="https://placehold.co/800x1000?text=John%20Leonard"
                                                width="800" height="1000" loading="lazy"
                                                alt="John Leonard, Project Sponsor & Advisor" />
                                        </div>
                                        <div className={styles['team-body']}>
                                            <h4 className={styles.name}>John Leonard</h4>
                                            <div className={styles.role}>Project Sponsor &amp; Advisor</div>
                                            <p className={styles.bio}>
                                                Guides scope and milestones; keeps us aligned with stakeholder needs.
                                            </p>
                                            <ul className={styles.tags} role="list">
                                                <li>Advisory</li>
                                                <li>Scope</li>
                                                <li>Milestones</li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
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

                            <div className={styles.newsletter}>
                                <label className={styles['newsletter-label']} htmlFor="newsletter-email">Project Updates</label>
                                <div className={styles['newsletter-row']}>
                                    <button className={`${styles.btn} ${styles['btn-get-started']}`} type="button">See updates</button>
                                </div>
                                <p className={styles['newsletter-help']}>We’ll offer email updates soon.</p>
                            </div>
                        </section>

                        <nav className={styles['footer-col']} aria-label="Explore">
                            <h3 className={styles['footer-title']}>Explore</h3>
                            <ul className={styles['footer-links']}>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/learn-more#faq">About the Project</a></li>
                                <li><a href="/updates">Project Updates</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </nav>

                        <nav className={styles['footer-col']} aria-label="Connect">
                            <h3 className={styles['footer-title']}>Connect</h3>
                            <ul className={styles['footer-links']}>
                                <li><a href="/updates">Newsletter</a></li>
                                <li><a href="/contact">Contact</a></li>
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

                <script src="/assets/js/app.js"></script>
            </div>
        </>
    );
}
