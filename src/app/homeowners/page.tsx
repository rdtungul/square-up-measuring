import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "For Homeowners | Square Up Measuring",
  description:
    "Selling your home or planning a renovation? Get professional floor plans and photography from Square Up Measuring in Fort Mill, SC.",
};

const USE_CASES = [
  {
    icon: "🏡",
    title: "Selling Your Home",
    desc: "Accurate square footage and professional photos help you price confidently and attract serious buyers from day one.",
  },
  {
    icon: "🔨",
    title: "Renovation Planning",
    desc: "Share precise floor plans with contractors, architects, and designers to plan your project without guesswork.",
  },
  {
    icon: "📋",
    title: "Insurance Claims",
    desc: "Document your home's layout and finished square footage for insurance purposes or after a loss event.",
  },
  {
    icon: "📜",
    title: "Estate Planning",
    desc: "Accurate measurements support home valuations and legal documentation during estate settlements.",
  },
];

export default function HomeownersPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold-400 text-sm font-bold uppercase tracking-widest mb-4">
            For Homeowners
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Know Your Home.
            <br />
            <span className="text-gold-400">Know Your Numbers.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Whether you&apos;re selling, renovating, or planning for the future — accurate
            measurements and professional photos give you the confidence to move forward.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold-400 hover:bg-gold-300 text-navy-900 font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-navy-900 text-center mb-12">
            When Homeowners Call Us
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {USE_CASES.map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-navy-900 mb-4">Simple and Stress-Free</h2>
          <p className="text-slate-500 mb-12">
            We make the process easy. No tech know-how required.
          </p>
          <div className="space-y-6 text-left">
            {[
              { n: "1", t: "Call or book online", d: "Tell us your address and what you need. We&apos;ll confirm your appointment quickly." },
              { n: "2", t: "We come to you", d: "Our professional arrives on time, measures your home accurately, and takes photos if requested." },
              { n: "3", t: "Receive your deliverables", d: "Get your floor plan PDF and/or photos by the next business day, ready to use." },
            ].map((s) => (
              <div key={s.n} className="flex gap-4 bg-white rounded-2xl p-5 border border-slate-200">
                <div className="w-9 h-9 bg-gold-400 rounded-full flex items-center justify-center text-navy-900 font-black text-sm flex-shrink-0">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-0.5">{s.t}</h3>
                  <p className="text-slate-500 text-sm" dangerouslySetInnerHTML={{ __html: s.d }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
