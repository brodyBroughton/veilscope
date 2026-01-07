import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        aria-label="Intro hero"
        className="relative flex min-h-[clamp(560px,72vh,900px)] items-center"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% -10%, rgba(59,130,246,.25), transparent 60%), radial-gradient(900px 500px at 90% -10%, rgba(236,72,153,.18), transparent 60%), #F3F4F6',
        }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-12 min-[901px]:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-gray-400">
              Educational research for U.S. stocks
            </p>
            <h1 className="mb-4 text-[clamp(36px,5.6vw,56px)] font-extrabold leading-[1.08] tracking-[-0.02em]">
              Veilscope turns dense SEC filings into clear, educational risk scorecards.
            </h1>
            <p className="mb-5 max-w-[60ch] text-[clamp(16px,2.2vw,20px)]">
              We summarize 10-K and 10-Q filings into plain-English insights, highlight key risks and trends, and link
              everything back to the original source.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-pink-500 px-5 py-3 font-bold leading-none text-white shadow-[0_6px_24px_rgba(236,72,153,0.35)] transition active:translate-y-[1px] hover:shadow-[0_8px_28px_rgba(236,72,153,0.45)] focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                href="https://app.veilscope.com/signup"
                data-event="cta_hero_signup"
              >
                Create a free account
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full bg-white/70 px-5 py-3 font-bold leading-none text-gray-800 shadow transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                href="#how-it-works"
                data-event="cta_sample_scorecard"
              >
                See how it works
              </a>
            </div>

            <p className="mt-3 max-w-[52ch] text-sm text-gray-800">Educational only. Not investment advice. U.S. stocks only.</p>
            <p className="mt-2 max-w-[52ch] text-sm font-semibold text-gray-400">
              Built from public SEC filings with direct links to EDGAR.
            </p>
          </div>

          <figure className="justify-self-stretch">
            <picture>
              <source type="image/avif" srcSet="/assets/img/hero-scorecard.avif" />
              <source type="image/webp" srcSet="/assets/img/hero-scorecard.webp" />
              <img
                src="/assets/img/hero-scorecard.png"
                alt="Preview of the Veilscope scorecard UI"
                width={1600}
                height={1000}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="aspect-[16/10] w-full rounded-2xl border border-gray-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              />
            </picture>
            <figcaption className="sr-only">Illustrative preview of a company scorecard.</figcaption>
          </figure>
        </div>

        <a
          className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/60 px-4 py-2 font-bold text-gray-800 shadow backdrop-blur transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/30"
          href="#how-it-works"
          aria-label="Scroll to How it works section"
        >
          <span>See how it works</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      {/* TRANSPARENCY DEMO */}
      <section
        className="border-b border-gray-200 bg-white px-6 py-[clamp(32px,6vw,72px)]"
        aria-labelledby="transparency-title"
      >
        <div className="mx-auto grid max-w-6xl gap-4">
          <header>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.08em] text-gray-400">Nothing is hidden</p>
            <h2
              id="transparency-title"
              className="mb-2 text-[clamp(26px,4.6vw,40px)] font-extrabold leading-[1.12] tracking-[-0.02em]"
            >
              See the filing and the summary together
            </h2>
            <p className="max-w-[62ch]">
              Every insight stays tied to the original SEC filing so you can double-check the source yourself.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 min-[901px]:grid-cols-2">
            <div className="rounded-[14px] border border-gray-200 bg-gray-100 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="mb-2 text-lg font-bold">Example excerpt from a public SEC filing (demo)</h3>
              <p>
                A snippet pulled directly from a recent 10-K—risk factors, management discussion, or key disclosures
                written by the company.
              </p>
            </div>
            <div className="rounded-[14px] border border-gray-200 bg-gray-100 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="mb-2 text-lg font-bold">Veilscope summary (demo)</h3>
              <p>Plain-English context that explains what changed and why it matters for understanding the business.</p>
              <p className="mt-2 font-bold text-gray-400">Links back to the exact EDGAR section.</p>
              <a
                className="mt-3 inline-flex items-center justify-center rounded-full bg-white/70 px-5 py-3 font-bold leading-none text-gray-800 shadow transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                href="https://www.sec.gov/edgar/search/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open SEC EDGAR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-gray-100 px-6 py-[clamp(40px,7vw,84px)]" aria-labelledby="how-title">
        <div className="mx-auto max-w-6xl">
          <header className="mb-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-gray-400">How it works</p>
            <h2
              id="how-title"
              className="mb-2 text-[clamp(28px,4.6vw,44px)] font-extrabold leading-[1.12] tracking-[-0.02em]"
            >
              From SEC filings to plain-English insights
            </h2>
            <p className="max-w-[60ch]">
              We pull U.S. filings directly from SEC EDGAR, keep context intact, and keep you anchored to the source.
              Want more? See the{' '}
              <Link className="font-bold text-blue-500 hover:underline" href="/learn-more#how-title">
                methodology overview
              </Link>
              .
            </p>
          </header>

          <ol className="grid list-none grid-cols-1 gap-4 p-0 min-[901px]:grid-cols-3" role="list">
            <li className="rounded-[14px] border border-gray-200 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="mb-1 text-lg font-bold">Step 1</h3>
              <p>We pull public 10-K and 10-Q filings directly from the SEC’s EDGAR database.</p>
            </li>
            <li className="rounded-[14px] border border-gray-200 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="mb-1 text-lg font-bold">Step 2</h3>
              <p>
                Key financial disclosures and risk factors are parsed and organized into consistent, easy-to-read
                categories.
              </p>
            </li>
            <li className="rounded-[14px] border border-gray-200 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="mb-1 text-lg font-bold">Step 3</h3>
              <p>You receive an educational risk scorecard with direct links back to the original filing.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-gray-100 px-6 py-[clamp(40px,7vw,84px)]" aria-labelledby="who-title">
        <div className="mx-auto grid max-w-6xl gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-gray-400">Who it’s for</p>
          <h2
            id="who-title"
            className="text-[clamp(28px,4.8vw,42px)] font-extrabold leading-[1.12] tracking-[-0.02em]"
          >
            Beginner-friendly, still credible for advanced investors
          </h2>

          <div className="grid grid-cols-1 gap-4 min-[901px]:grid-cols-2">
            <article className="rounded-[14px] border border-gray-200 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="mb-2 text-lg font-bold">Self-directed investors</h3>
              <p className="mb-3">Already own a few stocks and want real research without reading hundreds of pages.</p>
              <ul className="grid list-disc gap-2 pl-5">
                <li>Uses a brokerage app and wants clarity, speed, and source links.</li>
                <li>Comfortable with AI tools but expects transparent methodology.</li>
              </ul>
            </article>

            <article className="rounded-[14px] border border-gray-200 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="mb-2 text-lg font-bold">Advanced and time-strapped</h3>
              <p className="mb-3">
                People who read filings or model companies but need a faster way to spot what changed.
              </p>
              <ul className="grid list-disc gap-2 pl-5">
                <li>Prefers tools that reduce grunt work while keeping raw filings a click away.</li>
                <li>Skeptical of hype; wants verifiable, filing-backed summaries.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-gray-100 px-6 py-[clamp(48px,7vw,88px)]" aria-labelledby="features-title">
        <div className="mx-auto max-w-6xl">
          <header className="mb-6 text-center">
            <h2
              id="features-title"
              className="text-[clamp(28px,5.2vw,46px)] font-extrabold leading-[1.15] tracking-[-0.02em]"
            >
              What you’ll get
            </h2>
          </header>

          <div className="grid grid-cols-1 gap-4 min-[601px]:grid-cols-2 min-[1101px]:grid-cols-4">
            <article className="rounded-[14px] border border-gray-200 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="mb-2 text-lg font-bold">Educational risk scorecards</h3>
              <p className="mb-2">Plain-English summaries of 10-K/10-Q filings with filing-backed context.</p>
              <Link className="font-bold text-blue-500 hover:underline" href="/learn-more#how-title">
                See a sample scorecard
              </Link>
            </article>

            <article className="rounded-[14px] border border-gray-200 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="mb-2 text-lg font-bold">Filing summaries</h3>
              <p className="mb-2">
                10-K/10-Q distilled into highlights you can review quickly while staying close to the source.
              </p>
              <Link className="font-bold text-blue-500 hover:underline" href="/learn-more#how-title">
                View parsed 10-K demo
              </Link>
            </article>

            <article className="rounded-[14px] border border-gray-200 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="mb-2 text-lg font-bold">Explainability</h3>
              <p>Understand what shifted and why—with every point linked back to EDGAR.</p>
            </article>

            <article className="rounded-[14px] border border-gray-200 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="mb-2 text-lg font-bold">Filing-change notifications</h3>
              <p>Get notified when new 10-K/10-Q filings post so you can review the changes yourself.</p>
            </article>
          </div>
        </div>
      </section>

      {/* WHAT VEILSCOPE IS / ISN'T */}
      <section className="border-y border-gray-200 bg-white px-6 py-[clamp(40px,7vw,84px)]" aria-labelledby="what-title">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-gray-400">What Veilscope is / isn’t</p>
          <h2
            id="what-title"
            className="mb-4 text-[clamp(26px,4.6vw,40px)] font-extrabold leading-[1.12] tracking-[-0.02em]"
          >
            Clear on scope and limitations
          </h2>

          <div className="grid grid-cols-1 gap-4 min-[901px]:grid-cols-2">
            <div className="rounded-[14px] border border-gray-200 bg-gray-100 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="mb-2 text-lg font-bold">Veilscope is</h3>
              <ul className="grid gap-2">
                <li className="relative pl-5 before:absolute before:left-0 before:content-['•'] before:text-blue-500">
                  An educational research tool that summarizes SEC filings
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:content-['•'] before:text-blue-500">
                  A way to review company risks and disclosures faster
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:content-['•'] before:text-blue-500">
                  A system that links directly to the original filing so you can verify everything yourself
                </li>
              </ul>
            </div>

            <div className="rounded-[14px] border border-gray-200 bg-gray-100 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <h3 className="mb-2 text-lg font-bold">Veilscope isn’t</h3>
              <ul className="grid gap-2">
                <li className="relative pl-5 before:absolute before:left-0 before:content-['•'] before:text-blue-500">
                  A financial advisor or robo-advisor
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:content-['•'] before:text-blue-500">
                  A source of stock recommendations or performance promises
                </li>
                <li className="relative pl-5 before:absolute before:left-0 before:content-['•'] before:text-blue-500">
                  A tool that tells you what to buy or sell
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-indigo-50 bg-white px-6 py-[clamp(32px,6vw,72px)]" aria-labelledby="faq-title">
        <div className="mx-auto max-w-6xl">
          <h2 id="faq-title" className="mb-4 text-3xl font-extrabold tracking-[-0.02em]">
            FAQ
          </h2>

          <details className="my-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <summary className="cursor-pointer font-bold">Is this investment advice?</summary>
            <div className="mt-3">
              <p>
                No. Veilscope is an educational tool for U.S. stocks. Investing involves risk and you are responsible
                for your decisions.
              </p>
            </div>
          </details>

          <details className="my-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <summary className="cursor-pointer font-bold">Where do you get your data?</summary>
            <div className="mt-3">
              <p>From the U.S. SEC’s EDGAR system. We focus on public company filings (10-K/10-Q, etc.).</p>
            </div>
          </details>

          <details className="my-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <summary className="cursor-pointer font-bold">How do the scorecards work?</summary>
            <div className="mt-3">
              <p>
                We extract key disclosures and risks from filings, organize them into consistent factors, and link each
                point back to EDGAR. It’s designed for learning, not recommendations.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-100 px-6 py-[clamp(40px,7vw,84px)]" aria-labelledby="cta-title">
        <div className="mx-auto max-w-6xl">
          <div className="grid justify-items-start gap-3 rounded-2xl border border-gray-200 bg-white p-[clamp(18px,3vw,28px)] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <h2 id="cta-title" className="text-[clamp(26px,4.8vw,42px)] font-extrabold tracking-[-0.02em]">
              Start in minutes
            </h2>
            <p className="text-[clamp(15px,2vw,19px)]">
              Create a free account to explore a sample risk scorecard built from SEC filings.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-pink-500 px-5 py-3 font-bold leading-none text-white shadow-[0_6px_24px_rgba(236,72,153,0.35)] transition active:translate-y-[1px] hover:shadow-[0_8px_28px_rgba(236,72,153,0.45)] focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                href="https://app.veilscope.com/signup"
                data-event="cta_footer_signup"
              >
                Create a free account
              </a>
            </div>
            <p className="text-sm font-semibold text-gray-400">
              Educational only. Not investment advice. U.S. stocks only. Data from SEC EDGAR.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}