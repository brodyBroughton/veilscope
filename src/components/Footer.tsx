import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Footer lead-in gradient */}
      <div
        className="h-[clamp(80px,12vw,140px)] w-full"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, rgba(59,130,246,0) 0%, rgba(59,130,246,.10) 60%, rgba(236,72,153,.14) 100%)',
        }}
      />

      <footer className="bg-gray-800 text-gray-200" role="contentinfo">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-[clamp(36px,6vw,56px)] min-[601px]:grid-cols-2 min-[1001px]:grid-cols-[1.1fr_1fr_1fr_1fr]">
          <section>
            <Link href="/" aria-label="Veilscope Home" className="inline-flex items-center">
              <img
                src="/assets/img/logos/veilscope-logo-light.svg"
                alt="Veilscope Logo"
                className="h-[34px] w-auto"
              />
            </Link>
            <p className="mt-2">AI insights from public financial filings.</p>
            <p className="mt-1 text-xs text-slate-300">Educational only. Not investment advice. U.S. stocks only.</p>

            <div className="mt-4">
              <p className="font-extrabold text-white">Project Updates</p>
              <p className="mt-2 text-xs text-slate-300">
                Occasional updates on product progress, new features, and research notes.
              </p>
              <div className="mt-3">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-pink-500 px-4 py-3 font-bold leading-none text-white shadow-[0_6px_24px_rgba(236,72,153,0.35)] transition active:translate-y-[1px] hover:shadow-[0_8px_28px_rgba(236,72,153,0.45)] focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                  href="/updates"
                >
                  View updates
                </Link>
              </div>
            </div>
          </section>

          <nav aria-label="Explore">
            <h3 className="mb-3 text-sm font-extrabold uppercase tracking-[0.08em] text-slate-300">Explore</h3>
            <ul className="grid gap-2">
              <li><Link className="hover:underline" href="/about">About Us</Link></li>
              <li><Link className="hover:underline" href="/learn-more">About the Project</Link></li>
              <li><Link className="hover:underline" href="/updates">Project Updates</Link></li>
              <li><a className="hover:underline" href="https://contact.veilscope.com">Contact Us</a></li>
              <li><Link className="hover:underline" href="/learn-more#faq">Help &amp; FAQ</Link></li>
            </ul>
          </nav>

          <nav aria-label="Connect">
            <h3 className="mb-3 text-sm font-extrabold uppercase tracking-[0.08em] text-slate-300">Connect</h3>
            <ul className="grid gap-2">
              <li><a className="hover:underline" href="#">Resources and References</a></li>
              <li><a className="hover:underline" href="#">Privacy Policy</a></li>
              <li><a className="hover:underline" href="#">Terms of Service</a></li>
            </ul>
          </nav>

          <nav aria-label="Socials">
            <h3 className="mb-3 text-sm font-extrabold uppercase tracking-[0.08em] text-slate-300">Socials</h3>
            <ul className="grid gap-2">
              <li><a className="hover:underline" href="#">Newsletter</a></li>
              <li><a className="hover:underline" href="#">Instagram</a></li>
              <li><a className="hover:underline" href="#">TikTok</a></li>
              <li><a className="hover:underline" href="#">Facebook</a></li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/10 px-6 py-4">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 min-[701px]:flex-row min-[701px]:items-center min-[701px]:justify-between">
            <p>© {year} Veilscope. All rights reserved.</p>
            <ul className="flex flex-wrap gap-4">
              <li><a className="hover:underline" href="#">Privacy</a></li>
              <li><a className="hover:underline" href="#">Terms</a></li>
              <li><a className="hover:underline" href="#">Status</a></li>
              <li><a className="hover:underline" href="https://contact.veilscope.com">Contact</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}