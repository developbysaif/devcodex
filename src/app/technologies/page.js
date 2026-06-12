import PageHero from "@/components/PageHero";
import TechStack from "@/components/TechStack";

export default function TechnologiesPage() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <PageHero 
        title="Technologies" 
        subtitle="We use the most modern and reliable technologies to build high-performance solutions."
        backgroundImage="/solution-cloud.png"
      />
      <TechStack />
      
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              category: "Frontend",
              techs: ["HTML5", "Advanced CSS3", "SASS", "Tailwind CSS", "Bootstrap", "JavaScript", "React.js", "Next.js"],
              color: "from-blue-500 to-cyan-400"
            },
            {
              category: "Backend & Database",
              techs: ["Node.js", "Express.js", "MongoDB"],
              color: "from-green-500 to-emerald-400"
            },
            {
              category: "Cloud",
              techs: ["AWS Cloud Computing"],
              color: "from-orange-500 to-yellow-400"
            },
            {
              category: "Marketing",
              techs: ["Social Media Marketing", "Search Engine Optimization (SEO)"],
              color: "from-purple-500 to-pink-400"
            },
            {
              category: "Design",
              techs: ["Adobe Illustrator", "Adobe Photoshop", "Canva"],
              color: "from-rose-500 to-red-400"
            }
          ].map(cat => (
            <div key={cat.category} className="glass-nav p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all">
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                {cat.category}
              </h3>
              <ul className="space-y-3">
                {cat.techs.map(tech => (
                  <li key={tech} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
