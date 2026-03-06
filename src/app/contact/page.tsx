import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book | Square Up Measuring",
  description:
    "Book a measurement or photography session with Square Up Measuring. Serving realtors and homeowners across the Carolinas.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-gold-400 text-sm font-bold uppercase tracking-widest mb-4">
            Book an Appointment
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Let&apos;s Get <span className="text-gold-400">Started</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Fill out the form below and we&apos;ll confirm your appointment within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            <h2 className="text-2xl font-black text-navy-900 mb-6">Booking Request</h2>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">First Name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
                <input
                  type="tel"
                  placeholder="(803) 555-0100"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Property Address</label>
                <input
                  type="text"
                  placeholder="123 Main St, Fort Mill, SC 29708"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Needed</label>
                <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-gold-400 transition-colors bg-white">
                  <option value="">Select a service...</option>
                  <option value="floor-plan">Floor Plan Only</option>
                  <option value="photography">Photography Only</option>
                  <option value="floor-plan-photo">Floor Plan + Photography</option>
                  <option value="drone">Add Drone Aerials</option>
                  <option value="full">Full Media Package</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">I am a...</label>
                <div className="flex gap-4">
                  {["Realtor", "Homeowner", "Other"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                      <input type="radio" name="type" value={opt.toLowerCase()} className="accent-gold-400" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Additional Notes</label>
                <textarea
                  rows={3}
                  placeholder="Anything else we should know? (preferred dates, access instructions, etc.)"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold-400 hover:bg-gold-300 text-navy-900 font-bold text-base py-4 rounded-xl transition-colors"
              >
                Submit Booking Request
              </button>
              <p className="text-xs text-slate-400 text-center">
                We&apos;ll confirm your appointment within one business day.
              </p>
            </form>
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-black text-navy-900 mb-6">Contact Info</h2>
            <div className="space-y-5">
              {[
                { icon: "📍", label: "Based In", value: "Fort Mill, SC" },
                { icon: "📞", label: "Phone", value: "(803) 555-0199" },
                { icon: "✉️", label: "Email", value: "info@squareupmeasuring.com" },
                { icon: "🕐", label: "Hours", value: "Mon–Sat, 8AM–6PM" },
                { icon: "⚡", label: "Delivery", value: "Next business day" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{item.label}</div>
                    <div className="text-navy-900 font-semibold text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gold-400/10 border border-gold-400/30 rounded-2xl p-5">
              <p className="text-navy-900 font-bold text-sm mb-1">Veteran-Owned Business</p>
              <p className="text-slate-600 text-xs leading-relaxed">
                Square Up Measuring is proudly veteran-owned and operated. We bring the
                same precision and discipline to every measurement that served us well in uniform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
