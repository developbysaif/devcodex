import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Team from "@/components/Team";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageHero 
        title="About" 
        subtitle="Empowering businesses with innovative technology that increases efficiency, strengthens brand presence, and drives growth."
        backgroundImage="/team-about.png"
      />
      <About hideTitle={true} />
      <Team />
      <section className="py-24 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Philosophy</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                With a team of experienced developers, designers, marketers, and cloud specialists, we deliver customized solutions tailored to each client&#39;s unique business goals. We believe every business deserves a strong digital foundation, and our expertise helps turn ideas into successful digital products.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                From concept to deployment and ongoing support, DevCodeX serves as a trusted technology partner for businesses looking to innovate and grow.
              </p>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              {/* Image placeholder for future image generation or real assets */}
              <div className="absolute inset-0 flex items-center justify-center font-black italic text-4xl opacity-10 uppercase tracking-[20px]">
                Innovation
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
