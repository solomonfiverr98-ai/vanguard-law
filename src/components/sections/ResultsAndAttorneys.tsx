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
      gsap.from(".result-card", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      // Massive background text reveal
      gsap.from(".bg-reveal", {
        scale: 1.1,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="results" ref={containerRef} className="bg-surface py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Ghost Text - More Subtle */}
      <div className="absolute top-0 left-0 text-navy/[0.02] text-[25vw] font-black pointer-events-none select-none uppercase tracking-tighter leading-none -translate-x-1/4 -translate-y-1/4">
        Victory
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-navy/10 bg-navy/5 mb-8">
              <TrendingUp className="w-3.5 h-3.5 text-navy/60" />
              <span className="text-navy/60 text-[10px] font-bold tracking-[0.3em] uppercase transition-all hover:tracking-[0.4em] cursor-default">Uncompromising Victories</span>
            </div>
            <h2 className="text-navy text-[clamp(40px,7vw,100px)] font-heading font-black tracking-tighter leading-[0.85]">
              The Currency of <br />
              <span className="text-gold italic underline decoration-gold/20 underline-offset-8">Excellence.</span>
            </h2>
        </div>

        <div className="relative min-h-[600px] flex items-center">
            {/* The Big Number - Architectural Anchor */}
            <div className="absolute inset-0 flex items-center justify-center z-0 opacity-[0.03] select-none pointer-events-none bg-reveal">
                <span className="text-[35vw] font-heading font-black tracking-tighter text-navy leading-none">250M</span>
            </div>

            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {/* Left Column: Context & Branding */}
                <div className="lg:col-span-5 space-y-10">
                    <div className="space-y-6">
                        <div className="result-card">
                            <div className="text-gold font-bold text-xs uppercase tracking-[0.4em] mb-4">Global Impact</div>
                            <h3 className="text-navy font-heading text-[clamp(60px,10vw,120px)] font-black tracking-tighter leading-none">
                                $250M+ <br/>
                                <span className="text-2xl md:text-3xl text-navy/40 font-heading block mt-4">Recovered for injury clients.</span>
                            </h3>
                        </div>
                    </div>
                    <p className="result-card text-navy/50 text-xl leading-relaxed max-w-md font-body">
                        Vanguard Law specializes in high-stakes personal injury litigation. Our 
                        unwavering pursuit of maximum restoration has defined our legacy of victory.
                    </p>
                    
                    <div className="result-card flex items-center gap-4 text-navy/30 text-[10px] font-black uppercase tracking-[0.3em]">
                        <span className="w-12 h-[1px] bg-navy/10"></span>
                        <span>Established Excellence</span>
                    </div>
                </div>

                {/* Right Column: Layered Proof Points */}
                <div className="lg:col-span-7 relative h-[500px] lg:h-[600px] mt-12 lg:mt-0">
                    {/* Floating Policy Card */}
                    <div className="result-card absolute top-4 right-0 w-full max-w-md glass-morphism p-10 md:p-14 rounded-[3rem] shadow-[0_50px_100px_rgba(10,17,40,0.12)] border-l-8 border-gold z-20 group hover:-translate-y-4 transition-all duration-700">
                        <div className="flex items-center justify-between mb-10 text-gold">
                            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20">
                                <Scale className="w-8 h-8" />
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-1">Case ID</div>
                                <div className="text-xs font-bold text-navy">#VG-2026-14M</div>
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <div className="text-6xl md:text-7xl font-heading font-black text-navy tracking-tighter">$14.2M</div>
                            <div className="text-lg font-bold text-gold uppercase tracking-[0.2em]">Policy Settlement</div>
                        </div>
                        
                        <div className="mt-12 pt-8 border-t border-navy/5 flex justify-between items-center text-[10px] font-black text-navy/30 uppercase tracking-tighter">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span>Certified Result // 03.2026</span>
                            </div>
                            <span className="hover:text-gold transition-colors cursor-help">Verify Docket</span>
                        </div>
                    </div>

                    {/* Supporting Stat Badge */}
                    <div className="result-card absolute bottom-4 left-0 lg:-left-20 bg-navy p-12 md:p-16 rounded-[3rem] text-white shadow-[0_40px_80px_rgba(10,17,40,0.4)] z-30 flex flex-col md:flex-row items-center gap-10 hover:scale-[1.02] transition-transform duration-700">
                        <div className="text-center md:text-left md:border-r md:border-white/10 md:pr-12">
                            <div className="text-7xl font-heading font-black text-white tracking-tighter">2,500<span className="text-gold">+</span></div>
                            <div className="text-[10px] font-bold text-gold uppercase tracking-[0.4em] mt-2">Cases Won</div>
                        </div>
                        <div className="max-w-[180px] text-sm text-white/50 leading-relaxed font-medium text-center md:text-left italic">
                            &ldquo;A decade of absolute advocacy and strategic dominance.&rdquo;
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-navy/5 pointer-events-none"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export const Attorneys = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".attorney-card", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

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
    <section id="attorneys" ref={containerRef} className="bg-white pb-20 md:pb-32 overflow-hidden relative">
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
