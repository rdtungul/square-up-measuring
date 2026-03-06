"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "Square Up Measuring is my go-to for every listing. The floor plans are spot-on and I always get them the next day. My clients love the professionalism.",
    name: "Sarah Mitchell",
    title: "Realtor, Keller Williams Fort Mill",
    initials: "SM",
  },
  {
    quote:
      "I've used them for 50+ listings across the Carolinas. Accurate, fast, and the photography makes my listings pop on Zillow and the MLS.",
    name: "James Harrington",
    title: "Broker, RE/MAX Carolina",
    initials: "JH",
  },
  {
    quote:
      "As a homeowner getting ready to sell, I had no idea how important accurate square footage was. They made the whole process easy and the photos were beautiful.",
    name: "Linda Chen",
    title: "Homeowner, Rock Hill SC",
    initials: "LC",
  },
  {
    quote:
      "The drone shots sold my listing before the open house. Veteran-owned business that delivers exactly what they promise. Highly recommend.",
    name: "Marcus Thompson",
    title: "Realtor, EXP Realty",
    initials: "MT",
  },
  {
    quote:
      "Switched to Square Up two years ago and never looked back. Every single floor plan has been ANSI compliant and my buyers trust the numbers.",
    name: "Danielle Rivera",
    title: "Realtor, Coldwell Banker",
    initials: "DR",
  },
  {
    quote:
      "Quick turnaround and they're always responsive. This is what a local, quality-focused business looks like.",
    name: "Tom Walsh",
    title: "Broker-Owner, Walsh Realty",
    initials: "TW",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 text-sm font-bold uppercase tracking-widest mb-3">
            Trusted by 400+ Realtors
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy-900">
            What Realtors Are Saying
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-gold-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-700 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-900 text-gold-400 font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
