import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <PageHero 
        title="Portfolio" 
        subtitle="Explore our successful projects across multiple industries. Every project reflects our commitment to quality and innovation."
        backgroundImage="/before-after.png"
      />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto leading-relaxed italic">
          At DevCodeX, we have successfully delivered projects across multiple industries, helping organizations improve efficiency, increase revenue, and strengthen their digital presence.
        </p>
      </div>
      <Portfolio />
      
      <section className="py-24 bg-[#020617] text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Corporate", "Education", "E-Commerce", "HealthCare", "SaaS", "Real Estate", "FinTech", "Retail"].map(industry => (
              <span key={industry} className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
