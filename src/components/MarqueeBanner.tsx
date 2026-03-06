const ITEMS = [
  "ANSI-Certified Floor Plans",
  "Next-Day Delivery",
  "MLS Photography",
  "Drone Add-Ons",
  "400+ Realtors Trust Us",
  "Veteran-Owned",
  "Fort Mill, SC",
  "Carolinas Coverage",
  "Accurate Measurements",
  "Reliable Service",
];

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex gap-8 whitespace-nowrap ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-sm font-semibold uppercase tracking-widest">
            <span className="text-gold-400">{item}</span>
            <span className="text-navy-700 text-lg">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeBanner() {
  return (
    <section className="bg-navy-900 py-4 overflow-hidden border-y border-navy-800">
      <MarqueeTrack />
    </section>
  );
}
