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
      <Nav />
      <main className="flex-grow">
        <Hero />
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
