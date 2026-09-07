import HeroSection from "@/components/features/HeroSection";
import IntroSection from "@/components/features/IntroSection";
import ProblemSection from "@/components/features/ProblemSection";
import SolutionSection from "@/components/features/SolutionSection";
import HowItWorksSection from "@/components/features/HowItWorksSection";
import LiveDemoSection from "@/components/features/LiveDemoSection";
import ForPatientsSection from "@/components/features/ForPatientsSection";
import ForHospitalsSection from "@/components/features/ForHospitalsSection";
import PatientJourneyVision from "@/components/features/PatientJourneyVision";
import ProductSection from "@/components/features/ProductSection";
import AboutSection from "@/components/features/AboutSection";
import RoadmapSection from "@/components/features/RoadmapSection";
import PricingSection from "@/components/features/PricingSection";
import PartnershipsSection from "@/components/features/PartnershipsSection";
import ContactSection from "@/components/features/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <LiveDemoSection />
      <ForPatientsSection />
      <ForHospitalsSection />
      <PatientJourneyVision />
      <ProductSection />
      <AboutSection />
      <RoadmapSection />
      <PricingSection />
      <PartnershipsSection />
      <ContactSection />
    </main>
  );
}
