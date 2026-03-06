import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "MLS Photography & Drone Services | Square Up Measuring",
  description:
    "Professional MLS photography and FAA-licensed drone aerial shots for real estate listings in the Carolinas. Next-day delivery.",
};

const PACKAGES = [
  {
    name: "Photo Only",
    price: "Starting at $129",
    includes: [
      "25+ edited photos",
      "HDR enhancement",
      "Interior & exterior",
      "MLS-optimized resolution",
      "Next-day delivery",
    ],
  },
  {
    name: "Photo + Floor Plan",
    price: "Starting at $229",
    popular: true,
    includes: [
      "Everything in Photo Only",
      "ANSI-certified floor plan",
      "One bundled booking",
      "Best value for realtors",
      "Next-day delivery",
    ],
  },
  {
    name: "Full Media Package",
    price: "Starting at $349",
    includes: [
      "Everything in Photo + Floor Plan",
      "Drone aerial photos",
      "Aerial video footage",
      "FAA-licensed pilot",
      "Next-day delivery",
    ],
  },
];

export default function PhotographyPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold-400 text-sm font-bold uppercase tracking-widest mb-4">
            Photography Services
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Photos That <span className="text-gold-400">Sell Homes</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Professional HDR photography, twilight shots, and FAA-licensed drone aerials —
            everything your listing needs to stand out on MLS, Zillow, and Realtor.com.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold-400 hover:bg-gold-300 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Book a Shoot
          </Link>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-navy-900 mb-4">What We Deliver</h2>
          <p className="text-slate-500 mb-12 max-w-xl mx-auto">
            Every photography session comes with professionally edited, MLS-ready images
            delivered directly to your inbox the next business day.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { icon: "🌅", label: "HDR Photography", desc: "Perfectly exposed interior and exterior shots even in mixed lighting conditions." },
              { icon: "🚁", label: "Drone Aerials", desc: "FAA-licensed drone operators capturing the property and surrounding area." },
              { icon: "🖼️", label: "Professional Editing", desc: "Consistent color correction, sky replacement, and object removal when needed." },
              { icon: "📱", label: "MLS-Ready Format", desc: "Delivered in high-resolution JPEG sized for MLS upload requirements." },
              { icon: "⚡", label: "Next-Day Delivery", desc: "Photos delivered by 9AM the next business day after the session." },
              { icon: "☁️", label: "Cloud Gallery", desc: "Easy-to-share online gallery link for clients and co-agents." },
            ].map((item) => (
              <div key={item.label} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-navy-900 text-sm mb-1">{item.label}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-navy-900 text-center mb-12">Photography Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 border ${
                  pkg.popular
                    ? "bg-navy-900 border-gold-400 shadow-xl shadow-navy-900/20"
                    : "bg-white border-slate-200"
                }`}
              >
                {pkg.popular && (
                  <span className="inline-block bg-gold-400 text-navy-900 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                    Best Value
                  </span>
                )}
                <h3 className={`text-lg font-bold mb-1 ${pkg.popular ? "text-white" : "text-navy-900"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-2xl font-black mb-5 ${pkg.popular ? "text-gold-400" : "text-navy-900"}`}>
                  {pkg.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className={`flex items-center gap-2 text-sm ${pkg.popular ? "text-slate-300" : "text-slate-600"}`}>
                      <span className="text-gold-400">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center font-bold text-sm px-4 py-3 rounded-xl transition-colors ${
                    pkg.popular
                      ? "bg-gold-400 hover:bg-gold-300 text-navy-900"
                      : "border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
                  }`}
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
