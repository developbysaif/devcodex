import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <PageHero 
        title="Process" 
        subtitle="We follow a systematic approach to ensure every project is delivered with excellence and precision."
        backgroundImage="/hero-viz.png"
      />
      <Timeline />
      
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-4xl font-bold mb-8">How We Work</h2>
                <div className="space-y-8">
                  {[
                    { step: 1, title: "Discovery", desc: "Understanding your business goals, challenges, and requirements." },
                    { step: 2, title: "Planning", desc: "Creating project roadmaps, timelines, and technical architecture." },
                    { step: 3, title: "Design", desc: "Developing engaging user experiences and visual designs." },
                    { step: 4, title: "Development", desc: "Building secure, scalable, and high-performing solutions." },
                    { step: 5, title: "Testing", desc: "Ensuring quality, security, and performance standards." },
                    { step: 6, title: "Launch", desc: "Deploying solutions smoothly and efficiently." },
                    { step: 7, title: "Support", desc: "Providing ongoing maintenance, optimization, and growth support." }
                  ].map(item => (
                    <div key={item.step} className="flex gap-6">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="relative aspect-square bg-slate-100 rounded-[50px] overflow-hidden border border-slate-200">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="w-full h-full border-2 border-dashed border-slate-300 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center">
                      <div className="w-1/2 h-1/2 border-2 border-dashed border-slate-400 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
                   </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-7xl font-black italic text-black/5 uppercase tracking-[30px] -rotate-90">PROCESS</div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
