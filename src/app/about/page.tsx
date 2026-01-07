import Link from 'next/link';

export default function AboutPage() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-wrap about-hero-grid">
          <div>
            <p className="eyebrow">About Veilscope</p>
            <h1 className="h1">Built for clarity, transparency, and learning</h1>
            <p className="lead">
              Veilscope turns dense SEC filings into plain-English educational insights and risk scorecards—with direct
              links back to the source.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://app.veilscope.com/signup">
                Create a free account
              </a>
              <Link className="btn btn-ghost" href="/learn-more#how-title">
                Read the methodology
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <h2 className="h2">Our mission</h2>
            <p>
              Make public financial filings easier to understand—so everyday investors can learn faster and verify
              everything themselves.
            </p>
            <ul className="checklist">
              <li>Educational only (not investment advice)</li>
              <li>U.S. public companies (10-K / 10-Q)</li>
              <li>Filing-backed summaries with citations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="about-why">
        <div className="about-wrap about-grid">
          <div>
            <h2 className="h2">Why we&apos;re building this</h2>
            <p>
              SEC filings are valuable, but they&apos;re time-consuming to read. Veilscope helps you understand what a
              company is saying, what changed, and what risks they disclose—without losing the original context.
            </p>
          </div>

          <div className="about-card">
            <h3 className="h3">What makes Veilscope different</h3>
            <ul className="bullets">
              <li>
                <strong>Explainability:</strong> links to the original EDGAR sections.
              </li>
              <li>
                <strong>Consistency:</strong> standardized factor categories across companies.
              </li>
              <li>
                <strong>Educational focus:</strong> no buy/sell calls, no performance promises.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <div className="about-wrap">
          <h2 className="h2">Team</h2>
          <p className="muted">A small team building a research tool for learning and transparency.</p>

          <div className="team-grid">
            <article className="team-card">
              <img
                src="https://placehold.co/600x600"
                alt="Team member placeholder"
                width={600}
                height={600}
                loading="lazy"
              />
              <h3 className="h3">Brody</h3>
              <p>Founder / Builder</p>
            </article>

            <article className="team-card">
              <img
                src="https://placehold.co/600x600"
                alt="Team member placeholder"
                width={600}
                height={600}
                loading="lazy"
              />
              <h3 className="h3">Jacob</h3>
              <p>Builder / Research</p>
            </article>
          </div>
        </div>
      </section>

      {/* SPONSOR */}
      <section className="about-sponsor">
        <div className="about-wrap">
          <h2 className="h2">Sponsors</h2>
          <div className="sponsor-card">
            <p className="muted">
              Sponsor section will be added here. If you&apos;re supporting this project, thank you.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
