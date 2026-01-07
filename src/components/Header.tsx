'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close drawer on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Prevent background scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    // Close on ESC
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
      <header className="fixed inset-x-0 top-0 z-50 h-[76px] bg-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
        <div className="mx-auto flex h-full max-w-6xl items-center gap-6 px-6">
          <Link href="/" aria-label="Veilscope Home" className="inline-flex items-center">
            <img
              src="/assets/img/logos/veilscope-logo-dark.svg"
              alt="Veilscope Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden min-[901px]:block" aria-label="Primary">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/learn-more"
                  className="rounded-lg px-2 py-2 font-semibold opacity-75 transition hover:bg-black/5 hover:opacity-100 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                >
                  Learn More
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="rounded-lg px-2 py-2 font-semibold opacity-75 transition hover:bg-black/5 hover:opacity-100 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/updates"
                  className="rounded-lg px-2 py-2 font-semibold opacity-75 transition hover:bg-black/5 hover:opacity-100 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                >
                  Project Updates
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop actions */}
          <div className="ml-auto hidden items-center gap-3 min-[901px]:flex">
            <a
              className="inline-flex items-center justify-center rounded-full bg-gray-400 px-5 py-3 font-bold leading-none text-gray-800 shadow-[inset_0_0_0_2px_rgba(0,0,0,0.04)] transition active:translate-y-[1px] hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
              href="https://app.veilscope.com/login"
              data-event="cta_login_header"
            >
              Log In
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full bg-pink-500 px-5 py-3 font-bold leading-none text-white shadow-[0_6px_24px_rgba(236,72,153,0.35)] transition active:translate-y-[1px] hover:shadow-[0_8px_28px_rgba(236,72,153,0.45)] focus:outline-none focus:ring-4 focus:ring-blue-500/30"
              href="https://app.veilscope.com/signup"
              data-event="cta_header_signup"
            >
              Create a free account
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
              type="button"
              className="ml-auto flex flex-col items-center justify-center gap-1.5 rounded-xl p-2 min-[901px]:hidden focus:outline-none focus:ring-4 focus:ring-blue-500/30"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>

              <span
                aria-hidden="true"
                className={[
                  'block h-1 w-9 shrink-0 rounded bg-gray-800 transition-transform duration-200',
                  menuOpen ? 'translate-y-2.5 rotate-45' : '',
                ].join(' ')}
              />
              <span
                aria-hidden="true"
                className={[
                  'block h-1 w-9 shrink-0 rounded bg-gray-800 transition-opacity duration-200',
                  menuOpen ? 'opacity-0' : '',
                ].join(' ')}
              />
              <span
                aria-hidden="true"
                className={[
                  'block h-1 w-9 shrink-0 rounded bg-gray-800 transition-transform duration-200',
                  menuOpen ? '-translate-y-2.5 -rotate-45' : '',
                ].join(' ')}
              />
            </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 bg-black/30 min-[901px]:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile drawer */}
      <aside
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={[
          'fixed left-0 right-0 top-[76px] z-50 flex h-[calc(100vh-76px)] flex-col overflow-auto bg-gray-100 p-6 transition-transform duration-300 min-[901px]:hidden',
          menuOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <nav className="flex flex-col gap-6">
          <Link onClick={closeMenu} className="text-xl font-extrabold" href="/learn-more">
            Learn More
          </Link>
          <Link onClick={closeMenu} className="text-xl font-extrabold" href="/about">
            About Us
          </Link>
          <Link onClick={closeMenu} className="text-xl font-extrabold" href="/updates">
            Project Updates
          </Link>
        </nav>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center justify-center rounded-full bg-pink-500 px-5 py-3 font-bold leading-none text-white shadow-[0_6px_24px_rgba(236,72,153,0.35)] transition active:translate-y-[1px] hover:shadow-[0_8px_28px_rgba(236,72,153,0.45)] focus:outline-none focus:ring-4 focus:ring-blue-500/30"
            href="https://app.veilscope.com/signup"
            data-event="cta_mobile_signup"
            onClick={closeMenu}
          >
            Create a free account
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full bg-gray-400 px-5 py-3 font-bold leading-none text-gray-800 shadow-[inset_0_0_0_2px_rgba(0,0,0,0.04)] transition active:translate-y-[1px] hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
            href="https://app.veilscope.com/login"
            onClick={closeMenu}
          >
            Log In
          </a>
        </div>
      </aside>
    </>
  );
}