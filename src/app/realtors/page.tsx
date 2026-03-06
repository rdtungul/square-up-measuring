import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "For Realtors | Square Up Measuring",
  description:
    "Built for realtors who need accurate floor plans and professional photos fast. Join 400+ realtors across the Carolinas who trust Square Up Measuring.",
};

const WHY = [
  {
    icon: "⚡",
    title: "Next-Day Delivery",
    desc: "Book today, receive your floor plan and photos by 9AM the next business day.",
  },
  {
    icon: "📐",
    title: "ANSI-Compliant",
    desc: "Every floor plan follows ANSI Z765 — the standard your MLS and buyers expect.",
  },
  {
    icon: "📞",
    title: "Realtor-Focused",
    desc: "We understand your timeline. Easy booking, fast communication, no runaround.",
  },
  {
    icon: "🏅",
    title: "Trusted by 400+",
    desc: "Hundreds of realtors across Charlotte and the Carolinas rely on us every week.",
  },
];

export default function RealtorsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold-400 text-sm font-bold uppercase tracking-widest mb-4">
            Built for Realtors
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Close More Listings.
            <br />
            <span className="text-gold-400">We Handle the Rest.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Join 400+ realtors across the Carolinas who rely on Square Up Measuring for
            accurate floor plans and professional listing photos — delivered next day.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold-400 hover:bg-gold-300 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Start Booking Today
          </Link>
        </div>
      </section>

      {/* Why section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-navy-900 text-center mb-12">
            Why Realtors Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {WHY.map((item) => (
              <div key={item.title} className="flex gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-12">How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Book Online", desc: "Fill out our quick booking form with your listing address and preferred date." },
              { step: "02", title: "We Visit", desc: "Our certified measurer or photographer comes to the property at your scheduled time." },
              { step: "03", title: "Get Delivered", desc: "Your floor plan and photos hit your inbox by 9AM the next business day." },
            ].map((s) => (
              <div key={s.step}>
                <div className="text-4xl font-black text-gold-400 mb-2">{s.step}</div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
