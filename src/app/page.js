import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import TechStack from "@/components/TechStack";
import Trust from "@/components/Trust";
import Portfolio from "@/components/Portfolio";
import Timeline from "@/components/Timeline";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <FeaturedSolutions />
      <TechStack />
      <Trust />
      <Portfolio />
      <Timeline />
      <WhyChooseUs />
      <CTASection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
