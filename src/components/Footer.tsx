import Link from "next/link";

const LINKS = {
  Services: [
    { label: "Measurements", href: "/measurements" },
    { label: "Photography", href: "/photography" },
    { label: "Coverage Area", href: "/coverage-area" },
  ],
  "Who We Serve": [
    { label: "Realtors", href: "/realtors" },
    { label: "Homeowners", href: "/homeowners" },
  ],
  Company: [
    { label: "Contact", href: "/contact" },
    { label: "Book Now", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold-400 rounded flex items-center justify-center font-black text-navy-900 text-sm">
                SU
              </div>
              <span className="text-white font-bold text-sm">
                Square Up Measuring
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Accurate, reliable real estate measurements and photography serving realtors
              and homeowners across the Carolinas. Veteran-owned &amp; operated.
            </p>
            <p className="text-xs text-slate-500">Fort Mill, SC</p>
          </div>

          {/* Nav columns */}
          {Object.entries(LINKS).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-gold-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Square Up Measuring LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-gold-400/10 text-gold-400 border border-gold-400/20 px-3 py-1 rounded-full">
              Veteran-Owned Business
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
