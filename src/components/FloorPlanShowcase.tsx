"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FloorPlanShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-gold-500 text-sm font-bold uppercase tracking-widest mb-3">
              Sample Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-navy-900 leading-tight mb-5">
              Precision You Can
              <br />
              <span className="text-gold-400">See on Paper.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Every floor plan we deliver is ANSI Z765 certified — accurate to within 1%,
              clearly labeled, and formatted exactly the way MLS platforms expect.
              No guesswork. No disputes.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Room-by-room dimensions labeled clearly",
                "Above-grade finished sq. ft. calculated per ANSI Z765",
                "Delivered as PDF and digital file — MLS ready",
                "Next-day turnaround, every time",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="w-5 h-5 bg-gold-400/20 text-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/measurements"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-gold-400 font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
            >
              View Measurement Packages
              <span>&rarr;</span>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-100 shadow-2xl shadow-slate-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.squarespace-cdn.com/content/v1/5ee68194561fcb33d73d2f4b/96a6be59-770e-41d3-817e-7f99a3de8026/1-1011+North+14th+St+floorplan.jpg"
                alt="ANSI-certified floor plan sample by Square Up Measuring"
                className="w-full h-auto object-contain"
                loading="eager"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 -left-4 bg-navy-900 text-white rounded-xl px-4 py-3 shadow-lg">
              <div className="text-gold-400 font-black text-lg leading-none">ANSI</div>
              <div className="text-slate-400 text-xs mt-0.5">Certified</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
