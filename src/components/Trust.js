"use client";
import React from 'react';
import Image from 'next/image';

const techs = [
    { name: 'HTML2', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSSS', logo: 'https://cdn.simpleicons.org/css3/1572B6' },
    { name: 'SASS', logo: 'https://cdn.simpleicons.org/sass/CC6699' },
    { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Bootstrap', logo: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
    { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'React.js', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/000000' },
    { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express.js', logo: 'https://cdn.simpleicons.org/express/000000' },
    { name: 'MangoDB', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws/232F3E' }
];

const Trust = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Top dark part with label */}
            <div className="bg-[#020617] pt-12 pb-6">
                <h2 className="text-2xl font-black text-center text-white tracking-[0.2em] uppercase">
                    Trust
                </h2>
            </div>
            
            {/* Bottom light/glass part with icons */}
            <div className="bg-gray-50/50 backdrop-blur-md py-14 border-y border-gray-100 shadow-inner">
                <div className="max-w-[1500px] mx-auto px-6 overflow-x-auto no-scrollbar">
                    <div className="flex items-center justify-center gap-5 min-w-max pb-2">
                        {techs.map((tech) => (
                            <div 
                                key={tech.name} 
                                className="group flex flex-col items-center justify-between p-6 w-[140px] h-[160px] bg-white/60 backdrop-blur-xl border border-gray-200/50 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 ease-out"
                            >
                                <div className="flex-1 flex items-center justify-center w-full">
                                    <img 
                                        src={tech.logo} 
                                        alt={tech.name}
                                        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <span className="text-[10px] font-black text-gray-900 uppercase tracking-tighter text-center mt-4">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default Trust;
