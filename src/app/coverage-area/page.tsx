import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Coverage Area | Square Up Measuring – Carolinas",
  description:
    "Square Up Measuring serves realtors and homeowners throughout North and South Carolina including Charlotte, Fort Mill, Rock Hill, and beyond.",
};

const NC_AREAS = [
  "Charlotte",
  "Concord",
  "Harrisburg",
  "Huntersville",
  "Mooresville",
  "Kannapolis",
  "Matthews",
  "Mint Hill",
  "Indian Trail",
  "Monroe",
  "Waxhaw",
  "Pineville",
];

const SC_AREAS = [
  "Fort Mill",
  "Rock Hill",
  "Tega Cay",
  "Lake Wylie",
  "Clover",
  "York",
  "Lancaster",
  "Chester",
  "Gaston",
  "Catawba",
  "Belmont",
  "Gastonia",
];

export default function CoverageAreaPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold-400 text-sm font-bold uppercase tracking-widest mb-4">
            Where We Serve
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Proudly Serving <span className="text-gold-400">the Carolinas</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Based in Fort Mill, SC, we cover a wide area across both North and South Carolina —
            including the greater Charlotte metro and surrounding counties.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold-400 hover:bg-gold-300 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Check Your Area
          </Link>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* NC */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-gold-400 font-black text-sm">
                  NC
                </div>
                <h2 className="text-2xl font-black text-navy-900">North Carolina</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {NC_AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-slate-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>

            {/* SC */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center text-gold-400 font-black text-sm">
                  SC
                </div>
                <h2 className="text-2xl font-black text-navy-900">South Carolina</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {SC_AREAS.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-slate-700 text-sm">
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gold-400/10 border border-gold-400/30 rounded-2xl p-6 text-center">
            <p className="text-navy-900 font-semibold mb-2">Don&apos;t see your area?</p>
            <p className="text-slate-600 text-sm mb-4">
              We may still be able to serve you. Reach out and we&apos;ll let you know quickly.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-navy-900 hover:bg-navy-800 text-gold-400 font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
