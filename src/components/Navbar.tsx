"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Measurements", href: "/measurements" },
  { label: "Photography", href: "/photography" },
  { label: "Coverage Area", href: "/coverage-area" },
  { label: "Homeowners", href: "/homeowners" },
  { label: "Realtors", href: "/realtors" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-900 shadow-lg shadow-black/20" : "bg-navy-900/95 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gold-400 rounded flex items-center justify-center font-black text-navy-900 text-sm group-hover:bg-gold-300 transition-colors">
            SU
          </div>
          <span className="text-white font-bold text-sm leading-tight hidden sm:block">
            Square Up<br />
            <span className="text-gold-400 font-normal text-xs tracking-wide">MEASURING</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-gold-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-900 font-bold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Book Now
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-1"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-900 border-t border-navy-800 px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-navy-800 ${
                pathname === link.href ? "text-gold-400" : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 w-full block text-center bg-gold-400 hover:bg-gold-300 text-navy-900 font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
