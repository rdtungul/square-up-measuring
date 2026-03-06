import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import Services from "@/components/Services";
import FloorPlanShowcase from "@/components/FloorPlanShowcase";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBanner />
      <Services />
      <FloorPlanShowcase />
      <Testimonials />
      <CTABanner />
    </>
  );
}
