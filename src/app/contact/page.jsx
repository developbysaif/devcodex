"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { AIAssistant } from "@/components/shared/AIAssistant";
import { Mail, Phone, MapPin, Globe, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    company: "",
    email: "",
    service: "Web Development",
    budget: "Select Budget Range",
    details: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "+923000000000"; // Replace with actual number
    const message = `*New Consultation Request*%0A%0A*Name:* ${formData.name}%0A*Company:* ${formData.company}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Budget:* ${formData.budget}%0A*Details:* ${formData.details}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight">Let's build <br />the <span className="gradient-text">extraordinary</span></h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Whether you have a specific project in mind or just want to explore the 
                possibilities of AI, our team is ready to guide you.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Email Us</div>
                    <div className="text-muted-foreground">hello@devcodex.io</div>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Global Presence</div>
                    <div className="text-muted-foreground">SF • London • Dubai</div>
                  </div>
                </div>
              </div>

              <div className="glass p-8 rounded-2xl border-white/5 mb-8">
                <h3 className="font-bold text-xl mb-4">Fast-track to success?</h3>
                <p className="text-muted-foreground mb-6">Skip the form and book a 15-min discovery call directly with an architect.</p>
                <Button className="w-full bg-white text-black hover:bg-white/90 h-12">
                  View Calendly <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              <div className="relative rounded-3xl overflow-hidden glass border-white/5 aspect-video shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
                  alt="Consultation Space" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 blur-[60px] rounded-full -mr-16 -mt-16" />
                <h2 className="text-3xl font-bold font-heading mb-8">Get Free Consultation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                       <input 
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         required
                         className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-brand-blue transition-colors" 
                         placeholder="Elon Musk" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Company</label>
                       <input 
                         name="company"
                         value={formData.company}
                         onChange={handleChange}
                         className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-brand-blue transition-colors" 
                         placeholder="SpaceX" 
                       />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Work Email</label>
                       <input 
                         name="email"
                         type="email"
                         value={formData.email}
                         onChange={handleChange}
                         required
                         className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-brand-blue transition-colors" 
                         placeholder="elon@tesla.com" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Service Needed</label>
                       <select 
                         name="service"
                         value={formData.service}
                         onChange={handleChange}
                         className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 outline-none focus:border-brand-blue transition-colors text-muted-foreground appearance-none"
                       >
                         <option>Web Development</option>
                         <option>SEO Services</option>
                         <option>AI Automation</option>
                         <option>Digital Marketing</option>
                       </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Project Budget</label>
                     <select 
                       name="budget"
                       value={formData.budget}
                       onChange={handleChange}
                       className="w-full bg-[#111827] border border-white/10 rounded-xl p-4 outline-none focus:border-brand-blue transition-colors text-muted-foreground appearance-none"
                     >
                        <option>Select Budget Range</option>
                        <option>$5k - $15k</option>
                        <option>$15k - $50k</option>
                        <option>$50k+</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Project Details</label>
                     <textarea 
                       name="details"
                       value={formData.details}
                       onChange={handleChange}
                       className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-brand-blue h-32" 
                       placeholder="Tell us what you're building..." 
                     />
                  </div>
                  <Button type="submit" className="w-full h-16 text-lg font-bold bg-brand-blue hover:scale-105 transition-transform shadow-xl shadow-brand-blue/20">
                    Get Free Consultation
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>


      <Footer />
      <AIAssistant />
    </main>
  );
}
