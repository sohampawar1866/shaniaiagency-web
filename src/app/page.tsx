import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import FeaturedWork from "@/components/FeaturedWork";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      {/* Nav + Hero share one gradient layer — transparent nav bleeds into gradient */}
      <div className="hero-gradient">
        <Nav />
        <Hero />
      </div>

      {/* Rest of page sections */}
      <main className="flex-grow">
        <Capabilities />
        <FeaturedWork />
        <Industries />
        <Process />
        <Pricing />
        <WhyUs />
        <SocialProof />
        <FAQ />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
