import PageHero from "@/components/PageHero";
import FAQ from "@/components/FAQ";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <PageHero 
        title="FAQ" 
        subtitle="Frequently Asked Questions about our services, process, and support."
        backgroundImage="/solution-business.png"
      />
      <FAQ />
      
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
         <h3 className="text-2xl font-bold mb-6">Still have questions?</h3>
         <p className="text-gray-400 mb-8 max-w-xl mx-auto">
           If you couldn&#39;t find the answer you were looking for, please feel free to contact us. We&#39;re here to help!
         </p>
         <a href="/contact" className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-all inline-block font-bold">
           Get In Touch
         </a>
      </section>
    </main>
  );
}
