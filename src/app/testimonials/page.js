import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <PageHero 
        title="Testimonials" 
        subtitle="What our clients say about their experience working with DevCodeX."
        backgroundImage="/team-about.png"
      />
      <Testimonials />
      
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { quote: "Our website exceeded expectations and significantly improved our online presence.", author: "E-commerce Client" },
            { quote: "DevCodeX delivered a professional e-commerce solution that helped increase our sales.", author: "Business Owner" },
            { quote: "Their team was responsive, knowledgeable, and committed to our project's success.", author: "Startup Founder" }
          ].map((t, i) => (
            <div key={i} className="glass-nav p-10 rounded-[40px] border border-white/5 italic text-gray-300">
               <p className="text-xl mb-6">"{t.quote}"</p>
               <div className="flex items-center gap-4 not-italic">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                  <span className="font-bold text-white tracking-widest uppercase text-xs">-{t.author}</span>
               </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
