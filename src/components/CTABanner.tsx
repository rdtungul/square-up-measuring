"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-navy-900 py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[300px] bg-gold-400/8 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
          Ready for <span className="text-gold-400">Next-Day</span> Delivery?
        </h2>
        <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
          Book your measurement or photography session today. We cover the entire Carolinas
          and guarantee next-business-day delivery.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-gold-400 hover:bg-gold-300 text-navy-900 font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-gold-400/20"
          >
            Book an Appointment
          </Link>
          <Link
            href="/coverage-area"
            className="w-full sm:w-auto border border-slate-600 hover:border-gold-400 text-slate-300 hover:text-gold-400 font-semibold text-base px-8 py-4 rounded-xl transition-colors"
          >
            Check Coverage Area
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
