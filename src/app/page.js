import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import TechStack from "@/components/TechStack";
import Trust from "@/components/Trust";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Trust />
      <div className="container mx-auto px-6 py-12 text-center max-w-4xl">
        <p className="text-xl text-gray-400 leading-relaxed italic">
          At DevCodeX, we combine technology, creativity, and strategy to deliver digital solutions that help businesses achieve measurable growth. Whether you&#39;re a startup, small business, educational institute, healthcare provider, or enterprise organization, our expert team is committed to building solutions that drive results.
        </p>
      </div>
      <About />
      <Services />
      <FeaturedSolutions />
      <TechStack />
      <Portfolio />
      <Team />
      <Timeline />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
