import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import { TrustBar, PracticeAreas } from "@/components/sections/PracticeAreasAndTrust";
import { AboutVanguard } from "@/components/sections/AboutVanguard";
import { ResultsStats, Attorneys } from "@/components/sections/ResultsAndAttorneys";
import { Testimonials, FreeConsultation } from "@/components/sections/TestimonialsAndForm";
import { FAQ, Footer } from "@/components/sections/FAQAndFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-gold/30 selection:text-navy">
      {/* 2026-04-01: Results Refactoring Applied */}
      <Navbar />
      <Hero />
      <TrustBar />
      <AboutVanguard />
      <PracticeAreas />
      <ResultsStats />
      <Attorneys />
      <Testimonials />
      <FreeConsultation />
      <FAQ />
      <Footer />
    </main>
  );
}
