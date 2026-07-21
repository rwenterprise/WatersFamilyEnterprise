// app/layout.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en" className="bg-[#0A0A0A] text-white antialiased">
      <body className="min-h-screen flex flex-col justify-between font-sans">
        
        {/* TOP HEADER - STAYS SAME ON EVERY PAGE */}
        <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-lg font-bold tracking-widest text-[#D4AF37] uppercase">
            The Waters Family Enterprise
          </Link>

          {/* 3-LINE TAB BUTTON */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:text-[#D4AF37] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </div>
          </button>
        </header>

        {/* SLIDE-OVER DRAWER MENU */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-8 md:p-16">
            <div className="flex justify-between items-center">
              <span className="text-sm tracking-widest text-[#D4AF37] uppercase">Menu</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl text-white hover:text-[#D4AF37]"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col space-y-6 text-2xl md:text-4xl font-light tracking-wide">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37]">01. Home</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37]">02. The Family</Link>
              <Link href="/companies" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37]">03. Our Companies</Link>
              <Link href="/community" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37]">04. Community / Giving</Link>
              <Link href="/news" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37]">05. News & Updates</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#D4AF37]">06. Contact</Link>
            </nav>

            <div className="border-t border-white/10 pt-6 flex flex-wrap gap-6 text-xs text-gray-400 uppercase tracking-widest">
              <a href="https://waters-estates.vercel.app" target="_blank" className="hover:text-white">Waters Estates →</a>
              <a href="#" className="hover:text-white">Waters Development →</a>
              <a href="#" className="hover:text-white">Blade Runners →</a>
            </div>
          </div>
        )}

        {/* MAIN PAGE CONTENT */}
        <main className="flex-grow">{children}</main>

        {/* UNIVERSAL FOOTER */}
        <footer className="border-t border-white/10 bg-[#0F1115] py-12 px-6 text-center md:text-left">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-[#D4AF37] tracking-widest font-semibold uppercase">The Waters Family Enterprise</h3>
              <p className="text-xs text-gray-400 mt-1">Building Businesses. Developing Communities. Creating Lasting Value.</p>
            </div>
            <div className="text-xs text-gray-500">
              © {new Date().getFullYear()} Waters Family Enterprise LLC. All rights reserved.
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
