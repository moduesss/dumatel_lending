import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Comparison from "@/sections/Comparison";
import Deployment from "@/sections/Deployment";
import FAQ from "@/sections/FAQ";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import Security from "@/sections/Security";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Deployment />
        <Comparison />
        <Security />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
