"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const SERVICES = [
  {
    icon: "📐",
    title: "ANSI Floor Plans",
    description:
      "Professionally measured and ANSI-certified floor plans that meet MLS standards. Delivered in digital format, ready to attach to any listing.",
    href: "/measurements",
    features: ["ANSI Z765 compliant", "Accurate to 1%", "Digital delivery", "MLS-ready"],
  },
  {
    icon: "📸",
    title: "MLS Photography",
    description:
      "High-quality interior and exterior photography that makes listings stand out. Wide-angle, HDR-enhanced images optimized for MLS platforms.",
    href: "/photography",
    features: ["HDR photography", "Wide-angle lenses", "Exterior & interior", "MLS-optimized"],
  },
  {
    icon: "🚁",
    title: "Drone Add-On",
    description:
      "Aerial photography and video to showcase properties, lots, and neighborhood context. FAA-licensed drone operators.",
    href: "/photography",
    features: ["FAA licensed", "Aerial photos & video", "Lot showcasing", "Neighborhood views"],
  },
  {
    icon: "🏠",
    title: "Homeowner Packages",
    description:
      "Planning a renovation or selling your home? Get precise measurements and professional photos to make confident decisions.",
    href: "/homeowners",
    features: ["Pre-listing prep", "Renovation planning", "Insurance claims", "Estate planning"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-500 text-sm font-bold uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy-900 leading-tight">
            Everything Your Listing Needs
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            One company, all the measurements and media your listing needs — delivered next day.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group bg-white border border-slate-200 hover:border-gold-400 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-1.5 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="text-sm font-semibold text-gold-500 hover:text-gold-400 flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn more
                <span>&rarr;</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
