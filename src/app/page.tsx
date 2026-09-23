import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import WhyWebnex from "@/components/sections/WhyWebnex";
import HowItWorks from "@/components/sections/HowItWorks";
import Portfolio from "@/components/sections/Portfolio";
import BusinessValue from "@/components/sections/BusinessValue";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-navy-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyWebnex />
        <HowItWorks />
        <Portfolio />
        <BusinessValue />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
