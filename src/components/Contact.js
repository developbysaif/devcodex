"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  { icon: <Phone className="w-6 h-6 text-blue-600" />, label: 'Phone', value: '+1 (400) 356-20813' },
  { icon: <Mail className="w-6 h-6 text-purple-600" />, label: 'Email', value: 'contact@devcodex.com' },
  { icon: <MapPin className="w-6 h-6 text-pink-600" />, label: 'Address', value: '2235 Ghosnam Gtvs1 Street, Auoricota, NF 31125' },
  { icon: <Clock className="w-6 h-6 text-cyan-600" />, label: 'Hours', value: '9:00 am – 6:00 pm' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Service',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus({ loading: false, error: null, success: true });
        setFormData({ name: '', email: '', phone: '', service: 'Service', message: '' });
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (err) {
      setStatus({ loading: false, error: err.message, success: false });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.placeholder.toLowerCase() || e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 opacity-60" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-20 text-slate-900 tracking-tight">Contact Section</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
                {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-6 group">
                        <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                            {info.icon}
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-slate-900">{info.label}</h4>
                            <p className="text-slate-500 font-medium">{info.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white/40 backdrop-blur-xl p-10 rounded-[40px] border border-white/60 shadow-2xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} type="text" placeholder="Full Name" required className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white/80 focus:outline-none focus:border-blue-400 focus:bg-white transition-all shadow-sm" />
                        <input name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" placeholder="Email Address" required className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white/80 focus:outline-none focus:border-blue-400 focus:bg-white transition-all shadow-sm" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} type="text" placeholder="Phone Number" required className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white/80 focus:outline-none focus:border-blue-400 focus:bg-white transition-all shadow-sm" />
                        <select name="service" value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white/80 focus:outline-none focus:border-blue-400 focus:bg-white transition-all shadow-sm text-gray-500">
                            <option value="Service" disabled>Select Service</option>
                            <option value="Website">Website</option>
                            <option value="Mobile App">Mobile App</option>
                            <option value="Branding">Branding</option>
                        </select>
                    </div>
                    <textarea name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="How can we help you?" rows="4" required className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white/80 focus:outline-none focus:border-blue-400 focus:bg-white transition-all shadow-sm resize-none"></textarea>
                    
                    <button type="submit" disabled={status.loading} className="w-full bg-[#0f172a] text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:translate-y-[-2px] disabled:opacity-50">
                        {status.loading ? 'Sending...' : 'Contact'}
                    </button>

                    {status.success && <p className="text-green-600 font-bold text-center mt-4">Message sent successfully!</p>}
                    {status.error && <p className="text-red-500 font-bold text-center mt-4">{status.error}</p>}
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
