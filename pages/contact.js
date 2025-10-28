// pages/contact.js
import styles from '../styles/pages/contact.module.css'; // contact page css
import Head from "next/head";
import Script from "next/script";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact — Veilscope</title>
      </Head>

      <a className={styles["skip-link"]} href="#main">Skip to main content</a>
      <input id="nav-toggle" className={styles["nav-toggle"]} type="checkbox" aria-hidden="true" />

      <header className={styles["site-header"]}>
        <div className={styles["nav-wrap"]}>
          <a className={styles.brand} href="/"><img className={styles["brand-logo"]} src="/assets/img/logos/veilscope-logo-dark.svg" alt="Veilscope" /></a>
          <nav className={styles["primary-nav"]}>
            <ul className={styles["nav-list"]}>
              <li><a href="/learn-more.html">Learn More</a></li>
              <li><a href="/about.html">About Us</a></li>
              <li><a href="/updates.html">Project Updates</a></li>
            </ul>
          </nav>
          <div className={styles["nav-actions"]}>
            <a className={`${styles.btn} ${styles["btn-login"]}`} href="https://app.veilscope.com/login">Log In</a>
            <a className={`${styles.btn} ${styles["btn-get-started"]}`} href="https://app.veilscope.com/signup">Get Started</a>
          </div>
          <label className={styles.hamburger} htmlFor="nav-toggle" aria-controls="mobile-menu" aria-expanded="false">
            <span className={styles.bar}></span><span className={styles.bar}></span><span className={styles.bar}></span>
          </label>
        </div>
      </header>

      <aside id="mobile-menu" className={styles["mobile-drawer"]} aria-label="Mobile navigation">
        <nav className={styles["drawer-nav"]}>
          <a className={styles["drawer-link"]} href="/learn-more.html">Learn More</a>
          <a className={styles["drawer-link"]} href="/about.html">About Us</a>
          <a className={styles["drawer-link"]} href="/updates.html">Project Updates</a>
        </nav>
        <div className={styles["drawer-actions"]}>
          <a className={`${styles.btn} ${styles["btn-get-started"]}`} href="https://app.veilscope.com/signup">Get Started</a>
          <a className={`${styles.btn} ${styles["btn-login"]}`} href="https://app.veilscope.com/login">Log In</a>
        </div>
      </aside>

      <main id="main">
        <section className={styles["page-hero"]}>
          <div className={styles.container}>
            <h1>Contact Us</h1>
            <p>Questions, partnerships, or press — we’d love to hear from you.</p>
          </div>
        </section>

        <section className={styles["content-section"]}>
          <div className={`${styles.container} ${styles["two-col"]}`}>
            <form id="contact-form" className={styles["form-card"]} action="/api/contact" method="post" noValidate>
              <div className={styles["form-row"]}>
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div className={styles["form-row"]}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className={styles["form-row"]}>
                <label htmlFor="topic">Topic</label>
                <select id="topic" name="topic" required defaultValue="">
                  <option value="">Choose a topic…</option>
                  <option>General</option>
                  <option>Partnership</option>
                  <option>Press</option>
                  <option>Support</option>
                </select>
              </div>
              <div className={styles["form-row"]}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" required></textarea>
              </div>
              <button className={`${styles.btn} ${styles["btn-get-started"]}`} type="submit">Send message</button>
              <p id="contact-msg" className={styles["form-msg"]} aria-live="polite"></p>
            </form>

            <div className={styles["contact-side"]}>
              <div className={styles["card-placeholder"]}>Map / Office / Social</div>
              <ul className={styles["contact-list"]}>
                <li><strong>Email:</strong> hello@veilscope.com</li>
                <li><strong>Press:</strong> press@veilscope.com</li>
                <li><strong>Careers:</strong> careers@veilscope.com</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <div className={styles["footer-leadin"]} aria-hidden="true"></div>

      <footer className={styles["site-footer"]} role="contentinfo">
        <div className={styles["footer-wrap"]}>
          <section className={styles["footer-brand"]}>
            <a className={`${styles.brand} ${styles["brand--footer"]}`} href="/" aria-label="Veilscope Home">
              <img className={styles["brand-logo"]} src="/assets/img/logos/veilscope-logo-light.svg" alt="Veilscope" />
            </a>
            <p className={styles["footer-tagline"]}>AI insights from public financial filings.</p>

            <form className={styles.newsletter} action="#" method="post" noValidate>
              <label className={styles["newsletter-label"]} htmlFor="newsletter-email">Project Updates</label>
              <div className={styles["newsletter-row"]}>
                <input id="newsletter-email" name="email" type="email" placeholder="you@example.com" required />
                <button className={`${styles.btn} ${styles["btn-get-started"]}`} type="submit">Subscribe</button>
              </div>
              <p className={styles["newsletter-help"]}>By signing up, you agree to receive emails. Read our <a href="#">Privacy Policy</a>.</p>
              <p className={styles["newsletter-msg"]} aria-live="polite"></p>
            </form>
          </section>

          <nav className={styles["footer-col"]} aria-label="Explore">
            <h3 className={styles["footer-title"]}>Explore</h3>
            <ul className={styles["footer-links"]}>
              <li><a href="/about.html">About Us</a></li>
              <li><a href="/learn-more.html">About the Project</a></li>
              <li><a href="/updates.html">Project Updates</a></li>
              <li><a href="/contact.html">Contact Us</a></li>
              <li><a href="/learn-more.html#faq">Help & FAQ</a></li>
            </ul>
          </nav>

          <nav className={styles["footer-col"]} aria-label="Connect">
            <h3 className={styles["footer-title"]}>Connect</h3>
            <ul className={styles["footer-links"]}>
              <li><a href="#">Resources and References</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </nav>

          <nav className={styles["footer-col"]} aria-label="Socials">
            <h3 className={styles["footer-title"]}>Socials</h3>
            <ul className={styles["footer-links"]}>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">TikTok</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </nav>
        </div>

        <div className={styles["footer-bottom"]}>
          <p className={styles.copyright}>© <span id="year"></span> Veilscope. All rights reserved.</p>
          <ul className={styles["legal-links"]}>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>
      </footer>

      <Script src="/assets/js/app.js" strategy="afterInteractive" />
    </>
  );
}
