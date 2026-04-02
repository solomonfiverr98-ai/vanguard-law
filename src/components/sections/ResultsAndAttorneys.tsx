"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TrendingUp, Users, Clock, ShieldCheck, Scale, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ResultsStats = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle parallax for background text
      gsap.to(".parallax-bg", {
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="results" ref={containerRef} className="bg-navy py-24 md:py-32 relative overflow-hidden mt-[-1px] z-10">
      {/* Architectural Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="parallax-bg absolute top-80 left-0 text-white/[0.01] text-[40vw] font-black pointer-events-none select-none uppercase tracking-tighter leading-none -translate-x-1/4 whitespace-nowrap">
          Victory
        </div>
        <div className="parallax-bg absolute bottom-0 right-0 text-white/[0.01] text-[35vw] font-black pointer-events-none select-none uppercase tracking-tighter leading-none translate-x-1/4 translate-y-1/4 whitespace-nowrap">
          250M
        </div>
        
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col gap-20">
          
          {/* Top Section: The Narrative Centered */}
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="monolith-layer">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-8">
                <TrendingUp className="w-3.5 h-3.5 text-gold" />
                <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Uncompromising Victories</span>
              </div>
              <h2 className="text-white text-[clamp(48px,8vw,100px)] font-heading font-black tracking-tighter leading-[0.9] mb-8">
                The Currency <br />
                Of <span className="text-gold italic decoration-gold/20 underline underline-offset-[16px]">Excellence.</span>
              </h2>
              <p className="text-white/40 text-xl md:text-2xl leading-relaxed mx-auto max-w-2xl font-body font-light">
                Vanguard Law specializes in high-stakes litigation where restoration is not a request, but a requirement. Our legacy is written in the absolute advocacy of our clients.
              </p>
            </div>
            <div className="monolith-layer flex items-center justify-center gap-6">
               <div className="h-px w-20 bg-gold/30" />
               <span className="text-gold/40 text-[10px] font-black uppercase tracking-[0.5em]">Established Excellence</span>
               <div className="h-px w-20 bg-gold/30" />
            </div>
          </div>

          {/* Bottom Section: Three Column Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20 w-full">
             
             {/* Total Restored block */}
             <div className="monolith-layer glass-morphism p-10 lg:p-14 rounded-[3rem] shadow-2xl border border-white flex flex-col justify-center items-center text-center bg-navy/80 backdrop-blur-xl group hover:border-gold hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] transition-all duration-500 min-h-[350px]">
               <h3 className="text-[clamp(60px,7vw,100px)] font-heading font-black tracking-tighter leading-none text-white group-hover:scale-105 transition-transform duration-700">
                  $250M<span className="text-gold">+</span>
               </h3>
               <div className="mt-6 text-xs font-bold text-gold uppercase tracking-[0.4em] leading-relaxed">Restored to <br/> our clients</div>
             </div>

             {/* DOSSIER CARD: $14.2M */}
             <div className="monolith-layer glass-morphism p-10 rounded-[3rem] shadow-2xl border border-white bg-navy/80 backdrop-blur-xl group hover:border-gold hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] transition-all duration-500 flex flex-col justify-between min-h-[350px]">
                <div className="flex items-center justify-between mb-8">
                   <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center border border-gold/20">
                      <Scale className="w-6 h-6 text-gold" />
                   </div>
                   <div className="text-right font-mono">
                      <div className="text-[9px] text-white/30 uppercase font-black tracking-widest">Certified Docket</div>
                      <div className="text-[10px] text-gold mt-1">#VG-2026-ARC</div>
                   </div>
                </div>
                
                <div className="space-y-4 mb-8">
                   <div className="text-[10px] font-bold text-gold uppercase tracking-[0.3em]">Victory Case 03.2026</div>
                   <div className="text-5xl lg:text-6xl font-heading font-black text-white tracking-tighter leading-none">$14.2M</div>
                   <div className="text-sm font-medium text-white/50 leading-relaxed max-w-[200px]">Full Policy Limit Landscape Restoration</div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                      <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">Verified Archive</span>
                   </div>
                   <div className="p-2 rounded-full bg-white/5 hover:bg-gold/20 transition-all group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 text-gold" />
                   </div>
                </div>
             </div>

             {/* SEAL OF AUTHORITY: 2,500+ */}
             <div className="monolith-layer glass-morphism p-10 rounded-[3rem] shadow-2xl border border-white flex flex-col justify-center text-center bg-navy/80 group hover:border-gold hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] transition-all duration-500 relative overflow-hidden backdrop-blur-xl min-h-[350px] items-center">
                <div className="absolute inset-4 border border-gold/10 rounded-[2.5rem] border-dashed animate-[spin_40s_linear_infinite] pointer-events-none" />
                <div className="relative z-10 transition-transform duration-700 group-hover:scale-110 flex flex-col items-center">
                   <div className="text-5xl lg:text-6xl font-heading font-black text-white tracking-tighter mb-4">2,500<span className="text-gold">+</span></div>
                   <div className="text-[10px] md:text-xs font-bold text-gold uppercase tracking-[0.4em] leading-relaxed">Elite Legal <br/> Victories</div>
                   <div className="mt-8 text-[10px] text-white/30 font-medium max-w-[140px] mx-auto leading-relaxed border-t border-white/5 pt-6">
                      &ldquo;Dominating the architectural litigation landscape.&rdquo;
                   </div>
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export const Attorneys = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const attorneys = [
    {
      name: "James Blackwell, Esq.",
      role: "Senior Partner",
      specialty: "Criminal Defense & Civil Rights",
      experience: "25+ Yrs Mastery",
      image: "/attorney_portrait_1_1774992135179.png",
    },
    {
      name: "Sarah Chen, Esq.",
      role: "Strategic Partner",
      specialty: "High-Stakes Corporate & IP",
      experience: "15+ Yrs Precision",
      image: "/attorney_portrait_2_1774992156703.png",
    },
    {
      name: "Marcus Williams, Esq.",
      role: "Associate Attorney",
      specialty: "Catastrophic Personal Injury",
      experience: "10+ Yrs Aggressive Advocacy",
      image: "/attorney_portrait_3_1774992179889.png",
    },
  ];

  return (
    <section id="attorneys" ref={containerRef} className="bg-white py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-navy/10 bg-navy/5 mb-8">
              <Users className="w-3.5 h-3.5 text-navy/60" />
              <span className="text-navy/60 text-[10px] font-bold tracking-[0.3em] uppercase">The Vanguard Council</span>
            </div>
            <h2 className="text-navy text-[clamp(40px,6vw,90px)] font-heading font-black leading-[0.95] tracking-tighter">
              Boutique Mindset. <br />
              <span className="text-gold italic">Global Might.</span>
            </h2>
          </div>
          <p className="text-navy/40 font-body text-lg max-w-sm leading-relaxed border-l-2 border-gold/20 pl-8">
            An elite assembly of legal architectural minds, dedicated to your uncompromising defense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {attorneys.map((atty, i) => (
            <div 
              key={i} 
              className="attorney-card group relative h-[650px] w-full overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-700 hover:-translate-y-4 shadow-navy/5"
            >
              {/* Portrait Image */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={atty.image} 
                  alt={atty.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                {/* Contrast Gradient for White Labeling */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent z-10" />
              </div>
              
              {/* Content Reveal Overlay */}
              <div className="relative z-20 h-full p-10 flex flex-col justify-end text-white">
                <div className="text-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-4 overflow-hidden">
                   <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500">{atty.role}</div>
                </div>
                
                <h3 className="font-heading text-3xl font-black mb-6 tracking-tighter leading-none">
                  {atty.name}
                </h3>
                
                {/* Expandable Info on Hover */}
                <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-700 ease-out border-t border-white/20 pt-8 mt-4">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                         <ShieldCheck className="w-5 h-5 text-gold" />
                      </div>
                      <div className="text-sm font-medium tracking-tight text-white/80">{atty.specialty}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                         <Clock className="w-5 h-5 text-gold" />
                      </div>
                      <div className="text-sm font-medium tracking-tight text-white/50">{atty.experience}</div>
                    </div>
                  </div>
                  
                  <div className="mt-10 flex items-center gap-3 text-gold text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-white transition-colors duration-300">
                    Full Dossier <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
              
              {/* Bottom Gold Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[8px] bg-gold transition-all duration-700 group-hover:w-full z-30" />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Ghost Text */}
      <div className="absolute bottom-0 right-0 translate-y-1/2 text-navy/[0.02] text-[25vw] font-black pointer-events-none select-none uppercase tracking-tighter">
        Elite
      </div>
    </section>
  );
};
