// pages/index.js
import styles from '../styles/pages/home.module.css'; // landing page scoped css
import Head from "next/head";
import Script from "next/script";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Veilscope — AI insights from SEC filings</title>
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

      <div className={styles.home}>
        <a className="skip-link" href="#main">Skip to main content</a>

        <input id="nav-toggle" className="nav-toggle" type="checkbox" aria-hidden="true" />

        <header className="site-header" role="banner">
          <div className="nav-wrap">
            <a className="brand" href="/" aria-label="Veilscope Home">
              <img className="brand-logo" src="/assets/img/logos/veilscope-logo-dark.svg" alt="Veilscope" />
            </a>
            <nav className="primary-nav" aria-label="Primary">
              <ul className="nav-list">
                <li><a className="nav-link--quiet" href="/learn-more">Learn More</a></li>
                <li><a className="nav-link--quiet" href="/about">About Us</a></li>
                <li><a className="nav-link--quiet" href="/updates">Project Updates</a></li>
              </ul>
            </nav>
            <div className="nav-actions">
              <a className="btn btn-login" href="https://app.veilscope.com/login" data-event="cta_login_header">Log In</a>
              <a className="btn btn-get-started" href="https://app.veilscope.com/signup" data-event="cta_header_signup">Create a free account</a>
            </div>
            <label className="hamburger" htmlFor="nav-toggle" role="button" aria-label="Open menu"
                   aria-controls="mobile-menu" aria-expanded="false">
              <span className="bar" aria-hidden="true"></span>
              <span className="bar" aria-hidden="true"></span>
              <span className="bar" aria-hidden="true"></span>
            </label>
          </div>
        </header>

        <aside id="mobile-menu" className="mobile-drawer" aria-label="Mobile navigation">
          <nav className="drawer-nav">
            <a className="drawer-link" href="/learn-more">Learn More</a>
            <a className="drawer-link" href="/about">About Us</a>
            <a className="drawer-link" href="/updates">Project Updates</a>
          </nav>
          <div className="drawer-actions">
            <a className="btn btn-get-started" href="https://app.veilscope.com/signup" data-event="cta_mobile_signup">Create a free account</a>
            <a className="btn btn-login" href="https://app.veilscope.com/login">Log In</a>
          </div>
        </aside>

        <main id="main">
          <section className={styles.hero} aria-label="Intro hero">
            <div className={styles['hero-inner']}>
              <div className={styles['hero-copy']}>
                <p className={styles.eyebrow}>Built for retail investors</p>
                <h1 className={styles['hero-title']}>
                  AI insights from SEC filings — clear, explainable, and fast
                </h1>
                <p className={styles['hero-subtitle']}>
                  Veilscope parses public 10-K/10-Q data to surface transparent company scorecards and signals.
                  <strong>Educational only — not investment advice.</strong>
                </p>
                <div className={styles['hero-ctas']}>
                  <a className="btn btn-get-started" href="https://app.veilscope.com/signup" data-event="cta_hero_signup">
                    Create a free account
                  </a>
                  <a className="btn btn-secondary" href="/learn-more#how-title" data-event="cta_sample_scorecard">
                    See how it works
                  </a>
                </div>

                <ul className={styles['trust-bar']} aria-label="Trust and provenance">
                  <li className={styles.chip}><span className={styles.dot} aria-hidden="true"></span><a href="https://www.sec.gov/edgar/searchedgar/companysearch" target="_blank" rel="noopener">Data source: SEC EDGAR</a></li>
                  <li className={styles.chip}>Explainable AI</li>
                  <li className={styles.chip}>No recommendations — educational use</li>
                </ul>
              </div>

              <figure className={styles['hero-visual']}>
                <picture>
                  <source type="image/avif" srcSet="/assets/img/hero-scorecard.avif" />
                  <source type="image/webp" srcSet="/assets/img/hero-scorecard.webp" />
                  <img
                    src="/assets/img/hero-scorecard.png"
                    alt="Preview of the Veilscope scorecard UI"
                    width="1600" height="1000"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </picture>
                <figcaption className={styles['sr-only']}>Illustrative preview of a company scorecard.</figcaption>
              </figure>
            </div>
            <a className={styles['scroll-cue']} href="#how-it-works" aria-label="Scroll to How it works section">
              <span className={styles['cue-text']}>See how it works</span>
              <span className={styles['cue-arrow']} aria-hidden="true">↓</span>
            </a>
          </section>

          <section id="how-it-works" className={styles['section-how']} aria-labelledby="how-title">
            <div className={styles['how-wrap']}>
              <header className={styles['how-head']}>
                <p className={styles['how-eyebrow']}>How it works</p>
                <h2 id="how-title" className={styles['how-title']}>From SEC filings to plain-English insights</h2>
                <p className={styles['how-lede']}>
                  We turn dense public filings into transparent scorecards you can scan in seconds.
                  Want the details? See our <a className={styles['how-link']} href="/learn-more#how-title">methodology overview</a>.
                </p>
              </header>
              <ol className={styles['how-steps']} role="list">
                <li className={styles['how-step']}>
                  <h3>Retrieve</h3>
                  <p>We fetch public 10-K/10-Q disclosures via EDGAR.</p>
                </li>
                <li className={styles['how-step']}>
                  <h3>Extract</h3>
                  <p>Signals are parsed and organized into consistent factors.</p>
                </li>
                <li className={styles['how-step']}>
                  <h3>Explain</h3>
                  <p>We generate a scorecard with plain-English rationale and links to sources.</p>
                </li>
              </ol>
            </div>
          </section>

          <section id="features" className={styles['section-features']} aria-labelledby="features-title">
            <div className={styles['features-wrap']}>
              <header className={styles['features-head']}>
                <h2 id="features-title" className={styles['features-title']}>What you’ll get</h2>
              </header>
              <div className={styles['features-grid']}>
                <article className={styles.feature}>
                  <h3 className={styles['feature-title']}>Company scorecards</h3>
                  <p className={styles['feature-text']}>An at-a-glance score with factor-by-factor rationale.</p>
                  <a className={styles['text-link']} href="/learn-more#how-title">See a sample scorecard</a>
                </article>
                <article className={styles.feature}>
                  <h3 className={styles['feature-title']}>Filing summaries</h3>
                  <p className={styles['feature-text']}>10-K/10-Q distilled into highlights you can act on faster.</p>
                  <a className={styles['text-link']} href="/learn-more#how-title">View parsed 10-K demo</a>
                </article>
                <article className={styles.feature}>
                  <h3 className={styles['feature-title']}>Explainability</h3>
                  <p className={styles['feature-text']}>Understand what shifted and why — with links back to sources.</p>
                </article>
                <article className={styles.feature}>
                  <h3 className={styles['feature-title']}>Watchlists & alerts</h3>
                  <p className={styles['feature-text']}>Track companies and get notified when material changes land.</p>
                </article>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.faq}`} aria-labelledby="faq-title">
            <div className={styles['faq-wrap']}>
              <h2 id="faq-title">FAQ</h2>
              <details className={styles.disc}>
                <summary><span>Is this investment advice?</span></summary>
                <div className={styles['disc-panel']}>
                  <p>No. Veilscope is for information and education. Investing involves risk and you are responsible for your decisions.</p>
                </div>
              </details>
              <details className={styles.disc}>
                <summary><span>Where do you get your data?</span></summary>
                <div className={styles['disc-panel']}>
                  <p>From the U.S. SEC’s EDGAR system. We focus on public company filings (10-K/10-Q, etc.).</p>
                </div>
              </details>
              <details className={styles.disc}>
                <summary><span>How do the scores work?</span></summary>
                  <div className={styles['disc-panel']}>
                    <p>We extract signals from filings and map them to consistent factors. See the overview on the Learn More page.</p>
                  </div>
              </details>
            </div>
          </section>

          <section className={styles['section-cta']} aria-labelledby="cta-title">
            <div className={styles['cta-wrap']}>
              <div className={styles['cta-copy']}>
                <h2 id="cta-title" className={styles['cta-title']}>Start in minutes</h2>
                <p className={styles['cta-lede']}>Create a free account to explore a sample scorecard.</p>
                <div className={styles['cta-actions']}>
                  <a className="btn btn-get-started" href="https://app.veilscope.com/signup" data-event="cta_footer_signup">Create a free account</a>
                </div>
                <p className={styles['cta-disclaimer']}>Educational only — not investment advice. Data from SEC EDGAR.</p>
              </div>
            </div>
          </section>
        </main>

        <div className="footer-leadin" aria-hidden="true"></div>
        <footer className="site-footer" role="contentinfo">
          <div className="footer-wrap">
            <section className="footer-brand">
              <a className="brand brand--footer" href="/" aria-label="Veilscope Home">
                <img className="brand-logo" src="/assets/img/logos/veilscope-logo-light.svg" alt="Veilscope" />
              </a>
              <p className="footer-tagline">AI insights from public financial filings.</p>

              <div className="newsletter">
                <label className="newsletter-label" htmlFor="updates-link">Project Updates</label>
                <div className="newsletter-row">
                  <a id="updates-link" className="btn btn-get-started" href="/updates">See updates</a>
                </div>
                <p className="newsletter-help">We’ll offer email updates soon.</p>
              </div>
            </section>

            <nav className="footer-col" aria-label="Explore">
              <h3 className="footer-title">Explore</h3>
              <ul className="footer-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/learn-more#faq">About the Project</a></li>
                <li><a href="/updates">Project Updates</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </nav>

            <nav className="footer-col" aria-label="Connect">
              <h3 className="footer-title">Connect</h3>
              <ul className="footer-links">
                <li><a href="/updates">Newsletter</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </nav>

            <nav className="footer-col" aria-label="Socials">
              <h3 className="footer-title">Socials</h3>
              <ul className="footer-links">
                <li><a href="#">Instagram</a></li>
                <li><a href="#">TikTok</a></li>
                <li><a href="#">Facebook</a></li>
              </ul>
            </nav>
          </div>

          <div className="footer-bottom">
            <p className="copyright">© {new Date().getFullYear()} Veilscope. All rights reserved.</p>
            <ul className="legal-links">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
        </footer>

        <Script src="/assets/js/app.js" strategy="afterInteractive" />
      </div>
    </>
  );
}
