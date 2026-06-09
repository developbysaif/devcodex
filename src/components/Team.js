"use client";
import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';

const Facebook = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Linkedin = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const Instagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Github = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);
const Twitter = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const teamMembers = [
  {
    name: 'M. Rayyan',
    role: 'Co-Founder & CEO',
    image: '/team-about.png',
    skills: 'Expert in full-stack development, project management, and digital strategy.',
    socials: [<Facebook key="fb" />, <Linkedin key="li" />, <Instagram key="ig" />]
  },
  {
    name: 'Syed Qamar Abbas',
    role: 'Lead Developer',
    image: '/team-about.png',
    skills: 'Specializing in scalable architecture, cloud computing, and backend optimization.',
    socials: [<Github key="gh" />, <Linkedin key="li" />, <Twitter key="tw" />]
  },
  {
    name: 'M. Saif Kaleem',
    role: 'UI/UX Designer',
    image: '/team-about.png',
    skills: 'Creative designer focused on premium aesthetics, user experience, and branding.',
    socials: [<Linkedin key="li" />, <Instagram key="ig" />, <Twitter key="tw" />]
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-24 tracking-tight">Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8">
          {teamMembers.map((member, idx) => (
            <div key={member.name} className="relative pt-16">
              {/* Card Container */}
              <div className="glass-nav p-8 pt-20 rounded-[40px] text-center border border-white/10 hover:border-white/20 transition-all duration-500 group">
                {/* Circular Profile Image (Overlapping top) */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-2xl z-10 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-[#020617]">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={128} 
                      height={128} 
                      sizes="128px"
                      className={`object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 ${
                        idx === 0 ? 'object-left' : idx === 1 ? 'object-center' : 'object-right'
                      }`}
                    />
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{member.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mb-8">
                  {member.socials.map((icon, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 cursor-pointer text-gray-400 hover:text-white">
                      {React.cloneElement(icon, { size: 18 })}
                    </div>
                  ))}
                </div>

                {/* Skills Section */}
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-3">Skills</h4>
                  <p className="text-gray-400 text-sm italic leading-relaxed">
                    {member.skills}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
