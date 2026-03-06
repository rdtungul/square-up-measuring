import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "ANSI Floor Plans & Measurements | Square Up Measuring",
  description:
    "ANSI-certified floor plans and home measurements for MLS listings, renovations, and more. Serving realtors and homeowners across the Carolinas.",
};

const PACKAGES = [
  {
    name: "Basic Floor Plan",
    price: "Starting at $99",
    description: "Single-level home measurement and ANSI-compliant floor plan diagram.",
    includes: ["Up to 2,000 sq ft", "1 floor", "PDF & digital delivery", "Next-day turnaround"],
  },
  {
    name: "Standard Floor Plan",
    price: "Starting at $149",
    description: "Multi-level measurement with detailed room labels and dimensions.",
    includes: ["Up to 4,000 sq ft", "Up to 3 floors", "PDF & digital delivery", "MLS-ready format"],
    popular: true,
  },
  {
    name: "Custom / Large Home",
    price: "Custom Quote",
    description: "Large estates, commercial properties, or complex layouts.",
    includes: ["Any size", "Any number of floors", "Detailed annotations", "Priority delivery"],
  },
];

export default function MeasurementsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold-400 text-sm font-bold uppercase tracking-widest mb-4">
            Our Measurements Service
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
            ANSI-Certified <span className="text-gold-400">Floor Plans</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Accurate measurements that meet ANSI Z765 standards — the industry benchmark
            for calculating finished square footage on MLS listings.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold-400 hover:bg-gold-300 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Book a Measurement
          </Link>
        </div>
      </section>

      {/* Why ANSI matters */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-navy-900 mb-4">
                Why ANSI Certification Matters
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The ANSI Z765 standard is the official methodology for calculating above-grade
                finished square footage. Using a non-compliant method can lead to inaccurate
                MLS listings, buyer disputes, and legal liability for realtors.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Every floor plan we deliver follows ANSI Z765 guidelines — so you list with
                confidence and your buyers get accurate numbers.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "MLS listing compliance",
                "Reduces buyer/seller disputes",
                "Legally defensible square footage",
                "Appraisal-grade accuracy",
                "Trusted by lenders and appraisers",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-gold-400/20 text-gold-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    &#10003;
                  </span>
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-navy-900 text-center mb-12">Measurement Packages</h2>
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
                    Most Popular
                  </span>
                )}
                <h3 className={`text-lg font-bold mb-1 ${pkg.popular ? "text-white" : "text-navy-900"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-2xl font-black mb-3 ${pkg.popular ? "text-gold-400" : "text-navy-900"}`}>
                  {pkg.price}
                </p>
                <p className={`text-sm mb-5 ${pkg.popular ? "text-slate-300" : "text-slate-500"}`}>
                  {pkg.description}
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
