"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const STATS = [
  { value: "400+", label: "Realtors Trust Us" },
  { value: "24hr", label: "Delivery Guarantee" },
  { value: "ANSI", label: "Certified Plans" },
  { value: "100%", label: "Veteran-Owned" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy-900 flex flex-col justify-center overflow-hidden pt-16">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#F5C842 1px, transparent 1px), linear-gradient(90deg, #F5C842 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-navy-800 border border-gold-400/30 text-gold-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-wider"
        >
          <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
          Veteran-Owned · Fort Mill, SC · Serving the Carolinas
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
        >
          Measurements &amp; Photos
          <br />
          <span className="text-gold-400">Realtors Can Trust.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          ANSI-certified floor plans, MLS photography, and drone add-ons — delivered
          the next day. Accurate, reliable, and built for the Carolinas real estate market.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-gold-400 hover:bg-gold-300 text-navy-900 font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-gold-400/20"
          >
            Book an Appointment
          </Link>
          <Link
            href="/measurements"
            className="w-full sm:w-auto border border-slate-600 hover:border-gold-400 text-slate-300 hover:text-gold-400 font-semibold text-base px-8 py-4 rounded-xl transition-colors"
          >
            View Services
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-navy-800/60 border border-navy-700 rounded-xl px-4 py-5">
              <div className="text-3xl font-black text-gold-400 mb-1">{stat.value}</div>
              <div className="text-slate-400 text-xs font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
