"use client";
import React from 'react';

const techs = [
    { name: 'HTML2', logo: 'https://skillicons.dev/icons?i=html' },
    { name: 'CSSS', logo: 'https://skillicons.dev/icons?i=css' },
    { name: 'SASS', logo: 'https://skillicons.dev/icons?i=sass' },
    { name: 'Tailwind CSS', logo: 'https://skillicons.dev/icons?i=tailwind' },
    { name: 'Bootstrap', logo: 'https://skillicons.dev/icons?i=bootstrap' },
    { name: 'JavaScript', logo: 'https://skillicons.dev/icons?i=js' },
    { name: 'React.js', logo: 'https://skillicons.dev/icons?i=react' },
    { name: 'Next.js', logo: 'https://skillicons.dev/icons?i=nextjs' },
    { name: 'Node.js', logo: 'https://skillicons.dev/icons?i=nodejs' },
    { name: 'Express.js', logo: 'https://skillicons.dev/icons?i=express' },
    { name: 'MangoDB', logo: 'https://skillicons.dev/icons?i=mongodb' },
    { name: 'AWS', logo: 'https://skillicons.dev/icons?i=aws' }
];

const Trust = () => {
    return (
        <section className="relative w-full overflow-hidden -mt-48 z-20">
            {/* Icons Section - No Background (Transparent) */}
            <div className="py-12 relative">
                <div className="relative overflow-hidden group">
                    <div className="flex animate-marquee whitespace-nowrap gap-4">
                        {[...techs, ...techs].map((tech, index) => (
                            <div
                                key={`${tech.name}-${index}`}
                                className="flex flex-col items-center justify-center p-4 w-[120px] h-[150px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 mx-2"
                            >
                                <div className="flex-1 flex items-center justify-center w-full p-2">
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        className="w-12 h-12 object-contain filter drop-shadow-lg"
                                    />
                                </div>
                                <span className="text-[11px] font-bold text-white/80 mt-2 text-center w-full">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Edge Fades for the dark section */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>
                </div>
            </div>

            <style jsx>{`
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                    display: flex;
                    width: max-content;
                }

                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default Trust;
