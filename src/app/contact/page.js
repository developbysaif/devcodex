import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <PageHero 
        title="Contact" 
        subtitle="Let's build something amazing together. Reach out for a free consultation or just to say hi."
        backgroundImage="/hero-viz.png"
      />
      <Contact />
    </main>
  );
}
