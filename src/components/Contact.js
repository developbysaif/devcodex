"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6 text-blue-600" />,
    label: "WhatsApp",
    value: "+92 323 8418438",
    href: "https://wa.me/923238418438"
  },
  {
    icon: <Mail className="w-6 h-6 text-purple-600" />,
    label: "Email",
    value: "devcodex.agency@gmail.com",
    href: "mailto:devcodex.agency@gmail.com"
  },
  {
    icon: <MapPin className="w-6 h-6 text-pink-600" />,
    label: "Offices",
    value: "Karachi · Islamabad · Dubai",
    href: null
  },
  {
    icon: <Clock className="w-6 h-6 text-cyan-600" />,
    label: "Business Hours",
    value: "Mon–Fri: 9:00 AM – 6:00 PM",
    href: null
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      error: null,
      success: false,
    });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          loading: false,
          error: null,
          success: true,
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus({
        loading: false,
        error: error.message,
        success: false,
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-[#f8fafc]"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-pink-100/40 blur-[80px]" />
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[50%] bg-blue-400/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-purple-400/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Contact Us
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss your ideas and create
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div className="space-y-10">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-all">
                  {info.icon}
                </div>

                <div>
                  <h4 className="font-bold text-lg text-slate-900">
                    {info.label}
                  </h4>
                  {info.href ? (
                    <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">{info.value}</a>
                  ) : (
                    <p className="text-slate-500">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white/50 backdrop-blur-xl p-10 rounded-[40px] border border-white shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white/70 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white/70 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone & Service */}
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white/70 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  required
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white/70 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="Website Development">
                    Website Development
                  </option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="SEO & Marketing">
                    SEO & Digital Marketing
                  </option>
                </select>
              </div>

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white/70 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />

              {/* Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-5 rounded-2xl font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 transition-all shadow-xl disabled:opacity-50"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {status.success && (
                <p className="text-green-600 text-center font-medium">
                  Message sent successfully!
                </p>
              )}

              {status.error && (
                <p className="text-red-600 text-center font-medium">
                  {status.error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;