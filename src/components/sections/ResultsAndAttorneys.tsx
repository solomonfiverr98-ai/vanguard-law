"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TrendingUp, Users, Clock, ShieldCheck, Scale, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ResultsStats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      tl.from(".result-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.5,
        ease: "power4.out",
      });

      // Count up animation for $250M+
      const countObj = { val: 0 };
      gsap.to(countObj, {
        scrollTrigger: {
          trigger: mainCountRef.current,
          start: "top 85%",
        },
        val: 250,
        duration: 3,
        ease: "expo.out",
        onUpdate: () => {
          if (mainCountRef.current) {
            mainCountRef.current.innerText = `$${Math.floor(countObj.val)}M+`;
          }
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="results" ref={containerRef} className="bg-surface py-32 md:py-48 relative overflow-hidden">
      {/* Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-navy/[0.03] text-[20vw] font-black pointer-events-none select-none uppercase tracking-tighter">
        Results
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-navy/10 bg-navy/5 mb-8">
              <TrendingUp className="w-3.5 h-3.5 text-navy/60" />
              <span className="text-navy/60 text-[10px] font-bold tracking-[0.3em] uppercase">Uncompromising Victories</span>
            </div>
            <h2 className="text-navy text-[clamp(40px,6vw,90px)] font-heading font-black tracking-tighter leading-[0.9]">
              The Currency of <br />
              <span className="text-gold italic underline decoration-gold/20 underline-offset-8">Excellence.</span>
            </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Card: Massive Result */}
          <div className="result-card lg:w-[65%] glass-morphism rounded-[2.5rem] p-16 relative overflow-hidden group shadow-[0_40px_100px_rgba(10,17,40,0.08)]">
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-gold/5 blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
               <div ref={mainCountRef} className="text-navy font-heading text-[clamp(80px,15vw,180px)] font-black tracking-tighter leading-none mb-4">
                 $0M+
               </div>
               <h3 className="text-2xl md:text-3xl font-heading font-black text-navy/80 uppercase tracking-tight mb-8">Recovered for injury clients</h3>
               <p className="text-navy/50 text-lg md:text-xl max-w-xl leading-relaxed font-body">
                 Vanguard Law specializes in high-stakes personal injury litigation. Our 
                 unwavering pursuit of maximum restoration has defined our legacy of victory.
               </p>
               
               <div className="mt-12 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center">
                    <Scale className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-navy text-sm font-bold uppercase tracking-widest">Case Victory: 03.2026 // $14.2M Policy Settlement</span>
               </div>
            </div>
          </div>

          {/* Secondary Stats Group */}
          <div className="lg:w-[35%] flex flex-col gap-8">
            <div className="result-card bg-navy rounded-[2.5rem] p-10 text-white shadow-2xl flex flex-col justify-between group">
               <div className="flex justify-between items-start">
                  <div className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center transition-transform group-hover:-translate-y-2">
                    <Users className="w-7 h-7 text-navy" />
                  </div>
                  <div className="text-gold font-black text-xs uppercase tracking-[0.3em]">Cases Won</div>
               </div>
               <div className="mt-12">
                  <div className="text-5xl font-heading font-black text-white">2,500+</div>
                  <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
               </div>
            </div>

            <div className="result-card bg-white border border-navy/5 rounded-[2.5rem] p-10 flex flex-col justify-between group shadow-sm hover:shadow-2xl transition-all duration-700">
               <div className="flex justify-between items-start">
                  <div className="w-14 h-14 bg-navy shadow-xl rounded-2xl flex items-center justify-center transition-transform group-hover:-translate-y-2">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-navy/40 font-black text-xs uppercase tracking-[0.3em]">Success Rate</div>
               </div>
               <div className="mt-12">
                  <div className="text-5xl font-heading font-black text-navy">99.4%</div>
                  <div className="w-12 h-1 bg-gold mt-4 rounded-full" />
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
    <section id="attorneys" ref={containerRef} className="bg-white py-32 md:py-48 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attorneys.map((atty, i) => (
            <div 
              key={i} 
              className="attorney-card group relative h-[650px] overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-700 hover:-translate-y-4 shadow-navy/5"
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
