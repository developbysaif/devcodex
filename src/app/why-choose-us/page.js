import PageHero from "@/components/PageHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ShieldCheck, Zap, Users, GraduationCap, TrendingUp, Headphones } from 'lucide-react';

export default function WhyChooseUsPage() {
  const deepReasons = [
    { title: "Experienced Team", desc: "Skilled professionals with expertise across multiple modern technologies.", icon: <Users className="w-6 h-6" /> },
    { title: "Client-Centric Approach", desc: "Solutions customized to your unique business requirements.", icon: <GraduationCap className="w-6 h-6" /> },
    { title: "Modern Technologies", desc: "Using the latest frameworks, tools, and cloud platforms.", icon: <Zap className="w-6 h-6" /> },
    { title: "End-to-End Services", desc: "From design and development to marketing and maintenance.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Scalable Solutions", desc: "Built to grow with your business and handle increasing demand.", icon: <TrendingUp className="w-6 h-6" /> },
    { title: "Dedicated Support", desc: "Reliable support before, during, and after project completion.", icon: <Headphones className="w-6 h-6" /> },
  ];

  return (
    <main className="min-h-screen bg-[#020617]">
      <PageHero 
        title="Why Choose Us" 
        subtitle="Learn why businesses trust DevCodeX as their technology partner for sustainable growth."
        backgroundImage="/solution-ecommerce.png"
      />
      <WhyChooseUs />
      
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deepReasons.map(reason => (
            <div key={reason.title} className="glass-nav p-10 rounded-[35px] border border-white/5 hover:border-white/10 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-all">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-24 bg-[#020617] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-4xl font-bold mb-8">Ready to grow your business?</h2>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
             Join dozens of successful companies that have transformed their digital presence with DevCodeX.
           </p>
           <a href="/contact" className="btn-gradient px-10 py-4 rounded-2xl text-white font-bold text-lg inline-block shadow-2xl">
             Schedule A Consultation
           </a>
        </div>
      </section>
    </main>
  );
}
