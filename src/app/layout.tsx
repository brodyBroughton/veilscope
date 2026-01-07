import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/pages/about.css';
import '@/styles/pages/learn-more.css';
import '@/styles/pages/updates.css'
import '@/styles/pages/update.css'

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Veilscope',
  description: 'AI insights from public financial filings.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-800">
        {/* Skip link */}
        <a
          className="absolute left-[-9999px] top-0 rounded-lg bg-white px-3 py-2 shadow focus:left-3 focus:top-3 focus:z-[60] focus:outline-none focus:ring-4 focus:ring-blue-500/30"
          href="#main"
        >
          Skip to main content
        </a>

        <Header />

        {/* Padding offsets the fixed header height */}
        <main id="main" className="pt-[76px]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}