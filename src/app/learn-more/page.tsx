import Link from 'next/link';

export default function LearnMorePage() {
  return (
    <main id="main">
      {/* HERO */}
      <section className="learn-hero">
        <div className="learn-wrap learn-hero-grid">
          <div>
            <p className="eyebrow">Learn more</p>
            <h1 className="h1">How Veilscope works (and what it is not)</h1>
            <p className="lead">
              Veilscope summarizes public SEC filings into educational insights, organizes key risk factors, and links
              every point back to the original source.
            </p>

            <div className="disclaimer" role="note">
              <p>
                <strong>Educational only.</strong> Not investment advice. Veilscope does not provide recommendations,
                predictions, or performance guarantees.
              </p>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href="https://app.veilscope.com/signup">
                Create a free account
              </a>
              <Link className="btn btn-ghost" href="/updates">
                Project updates
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <h2 className="h2">Core idea</h2>
            <p>
              Keep you close to the source: every summary is anchored to EDGAR so you can verify context yourself.
            </p>
            <ul className="checklist">
              <li>Pull filings from SEC EDGAR</li>
              <li>Extract risks + key disclosures</li>
              <li>Generate scorecards + summaries</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="learn-overview" id="how-title">
        <div className="learn-wrap">
          <p className="eyebrow">How it works</p>
          <h2 className="h2">From SEC filings to plain-English insights</h2>

          <div className="card-grid">
            <article className="learn-card">
              <h3 className="h3">Step 1</h3>
              <p>We pull public 10-K and 10-Q filings directly from the SEC’s EDGAR database.</p>
            </article>

            <article className="learn-card">
              <h3 className="h3">Step 2</h3>
              <p>We parse key disclosures and risk factors into consistent categories.</p>
            </article>

            <article className="learn-card">
              <h3 className="h3">Step 3</h3>
              <p>You receive an educational risk scorecard with direct links back to the original filing.</p>
            </article>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="learn-transparency">
        <div className="learn-wrap">
          <p className="eyebrow">Nothing is hidden</p>
          <h2 className="h2">See the filing and the summary together</h2>
          <p className="lead">
            Every insight stays tied to the original SEC filing so you can double-check the source yourself.
          </p>

          <div className="demo-grid">
            <div className="demo-box">
              <h3 className="h3">Example excerpt from a public SEC filing (demo)</h3>
              <p>
                A snippet pulled directly from a recent 10-K—risk factors, management discussion, or key disclosures
                written by the company.
              </p>
            </div>

            <div className="demo-box">
              <h3 className="h3">Veilscope summary (demo)</h3>
              <p>Plain-English context that explains what changed and why it matters.</p>
              <p className="muted">
                <strong>Links back to the exact EDGAR section.</strong>
              </p>
              <a className="btn btn-ghost" href="https://www.sec.gov/edgar/search/" target="_blank" rel="noreferrer">
                Open SEC EDGAR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="learn-methodology">
        <div className="learn-wrap">
          <p className="eyebrow">Methodology overview</p>
          <h2 className="h2">What we extract and how we present it</h2>

          <div className="method-grid">
            <div className="method-col">
              <h3 className="h3">We focus on</h3>
              <ul className="bullets">
                <li>Risk factors (company-reported disclosures)</li>
                <li>Major business changes and trends</li>
                <li>Key financial context (educational)</li>
              </ul>
            </div>

            <div className="method-col">
              <h3 className="h3">We always include</h3>
              <ul className="bullets">
                <li>Direct filing links (EDGAR)</li>
                <li>Consistent factor categories</li>
                <li>Clear scope + limitations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="learn-scope">
        <div className="learn-wrap">
          <p className="eyebrow">What Veilscope is / isn’t</p>
          <h2 className="h2">Clear on scope and limitations</h2>

          <div className="scope-grid">
            <div className="scope-box">
              <h3 className="h3">Veilscope is</h3>
              <ul className="bullets">
                <li>An educational research tool that summarizes SEC filings</li>
                <li>A way to review company risks and disclosures faster</li>
                <li>A system that links directly to the original filing for verification</li>
              </ul>
            </div>

            <div className="scope-box">
              <h3 className="h3">Veilscope isn’t</h3>
              <ul className="bullets">
                <li>A financial advisor or robo-advisor</li>
                <li>A source of stock recommendations or performance promises</li>
                <li>A tool that tells you what to buy or sell</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="learn-faq" id="faq">
        <div className="learn-wrap">
          <h2 className="h2">FAQ</h2>

          <details className="faq-item">
            <summary>Is this investment advice?</summary>
            <div className="faq-body">
              <p>
                No. Veilscope is an educational tool for U.S. stocks. Investing involves risk and you are responsible
                for your decisions.
              </p>
            </div>
          </details>

          <details className="faq-item">
            <summary>Where do you get your data?</summary>
            <div className="faq-body">
              <p>From the U.S. SEC’s EDGAR system. We focus on public company filings (10-K/10-Q, etc.).</p>
            </div>
          </details>

          <details className="faq-item">
            <summary>How do the scorecards work?</summary>
            <div className="faq-body">
              <p>
                We extract key disclosures and risks from filings, organize them into consistent factors, and link each
                point back to EDGAR. It’s designed for learning, not recommendations.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="learn-cta">
        <div className="learn-wrap">
          <div className="cta-card">
            <h2 className="h2">Start in minutes</h2>
            <p>Create a free account to explore a sample risk scorecard built from SEC filings.</p>
            <a className="btn btn-primary" href="https://app.veilscope.com/signup">
              Create a free account
            </a>
            <p className="muted">
              <strong>Educational only.</strong> Not investment advice. U.S. stocks only. Data from SEC EDGAR.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
