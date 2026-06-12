import PageHero from "@/components/PageHero";
import Image from "next/image";
import { Monitor, ShoppingCart, Layout, Smartphone, Cloud, Palette, Rocket, CheckCircle2 } from 'lucide-react';

const detailedServices = [
  {
    id: "website",
    title: "Website Development",
    header: "Professional Websites That Convert Visitors Into Customers",
    description: "We develop responsive, fast, secure, and SEO-friendly websites tailored to your business objectives.",
    icon: <Monitor className="w-8 h-8" />,
    image: "/web-dev.png",
    features: ["Responsive Design", "Mobile-Friendly Layout", "SEO Optimization", "Contact Forms", "Speed Optimization", "CMS Integration", "Blog Functionality", "Security Enhancements", "Google Analytics Integration", "Ongoing Maintenance"],
    color: "blue"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    header: "Complete Online Store Solutions",
    description: "Launch a fully functional online store with secure payment gateways and advanced integrations.",
    icon: <ShoppingCart className="w-8 h-8" />,
    image: "/solution-ecommerce.png",
    features: ["Product Management", "Shopping Cart System", "Payment Gateway Integration", "Inventory Management", "Order Tracking", "Customer Accounts", "Coupon & Discount Systems", "WhatsApp Integration", "Shipping Integration", "Email Marketing Integration", "Analytics & Reporting"],
    color: "purple"
  },
  {
    id: "webapp",
    title: "Web Applications",
    header: "Custom Business Solutions",
    description: "We create scalable web applications designed to automate processes and improve business efficiency.",
    icon: <Layout className="w-8 h-8" />,
    image: "/solution-business.png",
    features: ["ERP Systems", "School Management Systems", "Hospital Management Systems", "CRM Systems", "Inventory Management Systems", "HR Management Systems", "Learning Management Systems", "Booking Platforms", "SaaS Products"],
    color: "cyan"
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    header: "Android & iOS App Solutions",
    description: "Build powerful mobile applications that deliver exceptional user experiences across devices.",
    icon: <Smartphone className="w-8 h-8" />,
    image: "/mobile-app.png",
    features: ["Android Applications", "iOS Applications", "Hybrid Applications", "Business Applications", "Educational Apps", "E-Commerce Apps", "Custom Mobile Solutions"],
    color: "pink"
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    header: "Modern Infrastructure For Growing Businesses",
    description: "We design, deploy, and manage cloud environments that are secure, scalable, and cost-effective.",
    icon: <Cloud className="w-8 h-8" />,
    image: "/solution-cloud.png",
    features: ["Cloud Architecture", "Cloud Migration", "AWS Deployment", "Server Management", "Backup Solutions", "Security Implementation", "Performance Optimization", "Monitoring & Maintenance"],
    color: "indigo"
  },
  {
    id: "design",
    title: "Graphic Designing",
    header: "Creating Visual Identities That Inspire",
    description: "Our creative team designs professional branding materials that leave lasting impressions.",
    icon: <Palette className="w-8 h-8" />,
    image: "/graphic.png",
    features: ["Logo Design", "Brand Identity", "Social Media Posts", "Marketing Materials", "Brochures", "Flyers", "Banners", "Packaging Design", "UI/UX Design"],
    color: "rose"
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    header: "Driving Traffic, Leads & Sales",
    description: "We help businesses reach their target audience and maximize online growth.",
    icon: <Rocket className="w-8 h-8" />,
    image: "/hero-viz.png",
    features: ["Social Media Marketing", "Search Engine Optimization (SEO)", "Google Ads", "Facebook Ads", "Instagram Marketing", "LinkedIn Marketing", "Content Marketing", "Lead Generation", "Conversion Optimization"],
    color: "orange"
  }
];

export default function ServicesPage() {
  const getColorClasses = (color) => {
    const maps = {
      blue: { text: "text-blue-500", bg: "bg-blue-500/10", from: "from-blue-600/20" },
      purple: { text: "text-purple-500", bg: "bg-purple-500/10", from: "from-purple-600/20" },
      cyan: { text: "text-cyan-500", bg: "bg-cyan-500/10", from: "from-cyan-600/20" },
      pink: { text: "text-pink-500", bg: "bg-pink-500/10", from: "from-pink-600/20" },
      indigo: { text: "text-indigo-500", bg: "bg-indigo-500/10", from: "from-indigo-600/20" },
      rose: { text: "text-rose-500", bg: "bg-rose-500/10", from: "from-rose-600/20" },
      orange: { text: "text-orange-500", bg: "bg-orange-500/10", from: "from-orange-600/20" },
    };
    return maps[color] || maps.blue;
  };

  return (
    <main className="min-h-screen bg-[#020617] pb-24">
      <PageHero 
        title="Services" 
        subtitle="From concept to deployment, we provide end-to-end digital services to help your business scale."
        backgroundImage="/solution-cloud.png"
      />
      
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {detailedServices.map((service, index) => {
          const colors = getColorClasses(service.color);
          return (
            <section id={service.id} key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start scroll-mt-32 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center ${colors.text}`}>
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">{service.title}</h2>
                  <h3 className="text-xl text-gray-300 font-medium mb-6 uppercase tracking-wider">{service.header}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${colors.text} shrink-0`} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {service.title === "E-Commerce Solutions" && (
                  <div className="pt-8 border-t border-white/5 space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-purple-500">Supported Integrations</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Stripe", "PayPal", "JazzCash", "EasyPaisa", "WhatsApp Business", "Facebook Shop", "Instagram Shop", "Google Merchant Center", "Shipping APIs", "CRM Systems"].map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-gray-400 border border-white/10 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className={`relative aspect-video lg:aspect-[4/5] rounded-[40px] overflow-hidden bg-[#0a0f1e] border border-white/5 group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                 <Image 
                   src={service.image} 
                   alt={service.title} 
                   fill 
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                   className="object-cover group-hover:scale-105 transition-transform duration-700"
                 />
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}

