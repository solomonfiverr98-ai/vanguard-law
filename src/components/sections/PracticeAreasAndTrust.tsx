"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { 
  Scale, 
  Gavel, 
  Globe, 
  ArrowRight, 
  Briefcase, 
  ShieldAlert
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TrustBar = () => {
  const badges = [
    "American Bar Association",
    "Super Lawyers Rated",
    "Martindale-Hubbell AV Rated",
    "AVVO 10.0 Rating",
    "National Trial Lawyers Top 100",
  ];

  return (
    <section className="bg-navy py-12 border-y border-white/5 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
          {[...badges, ...badges].map((badge, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-8 h-px bg-gold/30 group-hover:w-12 transition-all duration-500" />
              <span className="text-gold/40 group-hover:text-gold transition-colors duration-500 font-heading text-sm md:text-base font-bold uppercase tracking-[0.3em]">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PracticeAreas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation removed as per request to make cards show up immediately
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="expertise" ref={containerRef} className="bg-white py-24 md:py-32 scroll-mt-24 md:scroll-mt-32 overflow-hidden relative z-20">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-full h-full border border-navy rotate-12" />
        <div className="absolute top-[20%] left-[-20%] w-full h-full border border-navy -rotate-12" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-navy text-[40vw] font-black uppercase opacity-10">Vanguard</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-8">
              <Scale className="w-3.5 h-3.5 text-gold" />
              <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Jurisdictional Mastery</span>
            </div>
            <h2 className="text-navy text-[clamp(48px,8vw,110px)] font-heading font-black leading-[0.85] tracking-tighter">
              Bespoke Legal <br />
              <span className="text-gold italic">Architectures.</span>
            </h2>
          </div>
          <p className="text-navy/60 font-body text-xl max-w-sm leading-relaxed border-l-4 border-gold pl-10 py-2">
            Strategic counsel tailored for complex litigation and high-stakes transitions.
          </p>
        </div>

        <div className="bento-grid grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto md:auto-rows-[450px]">
          {/* Main Card: Personal Injury */}
          <div className="bento-card md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-[0_40px_120px_rgba(10,17,40,0.15)] bg-navy border border-navy/5 min-h-[400px] md:min-h-0">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549416878-b9ca35c2d47b?w=1200')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent z-10" />
            
            <div className="relative z-20 h-full p-8 md:p-16 flex flex-col justify-end">
              <div className="w-16 h-16 bg-gold rounded-[1.5rem] md:rounded-2xl flex items-center justify-center mb-8 md:mb-10 shadow-2xl shadow-gold/30 group-hover:-translate-y-3 transition-transform duration-700">
                <Gavel className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-4xl md:text-7xl font-heading font-black mb-6 md:mb-8 tracking-tighter uppercase">
                Personal <br /> Injury
              </h3>
              <p className="text-white/60 text-base md:text-xl max-w-2xl mb-8 md:mb-10 leading-relaxed font-body">
                We advocate for victims of catastrophic negligence, ensuring the path to justice is absolute and uncompromising.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12">
                {["Wrongful Death", "Catastrophic Liability", "Neurological Trauma"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 md:px-5 md:py-2 rounded-full border border-white/10 bg-white/5 text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest">{tag}</span>
                ))}
              </div>
              <Link
                href="#contact"
                className="group/btn inline-flex items-center gap-6 text-gold font-bold uppercase tracking-[0.4em] text-sm hover:gap-8 transition-all"
              >
                Inquire Case <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
              </Link>
            </div>
          </div>

          {/* Card: Criminal Defense */}
          <div className="bento-card md:col-span-4 relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-navy border border-navy/5 p-8 md:p-12 flex flex-col justify-between hover:shadow-2xl transition-all duration-700 min-h-[350px] md:min-h-0">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity grayscale" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800')" }}
            />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:bg-gold transition-colors duration-500 mb-10">
                <ShieldAlert className="w-8 h-8 text-gold group-hover:text-white transition-colors" />
              </div>
              <div className="mt-auto">
                <h3 className="text-white text-3xl font-heading font-black mb-6 tracking-tighter uppercase">
                  Criminal <br /> Defense
                </h3>
                <p className="text-white/40 text-base leading-relaxed mb-10 font-body">
                  Protecting your legacy with aggressive, elite defense strategies.
                </p>
                <div className="space-y-3 mb-10 border-l border-gold/20 pl-6">
                  {["Federal Defense", "White Collar", "Asset Protection"].map(s => (
                    <div key={s} className="flex items-center gap-3 text-gold/60 text-[10px] font-bold uppercase tracking-widest">
                      {s}
                    </div>
                  ))}
                </div>
                <Link href="#contact" className="group/btn flex items-center gap-4 text-gold text-[10px] font-bold uppercase tracking-widest transition-all hover:gap-6">
                  Inquire Case <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card: Corporate Strategy */}
          <div className="bento-card md:col-span-4 relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-gold p-8 md:p-12 flex flex-col justify-between transition-all duration-700 hover:brightness-110 min-h-[350px] md:min-h-0">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800')" }}
            />
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-10">
                <Briefcase className="w-8 h-8 text-gold" />
              </div>
               <h3 className="text-white text-3xl font-heading font-black mb-6 tracking-tighter uppercase">
                 Corporate <br /> Strategy
               </h3>
               <p className="text-white/90 text-base leading-relaxed mb-10 font-body">
                 Navigating global regulatory landscapes and high-tier litigation.
               </p>
               <div className="grid grid-cols-2 gap-2 mb-10">
                  {["M&A Advisory", "Venture Capital", "Compliance", "IP Protection"].map(s => (
                    <div key={s} className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-[9px] font-bold uppercase tracking-widest text-center whitespace-nowrap">{s}</div>
                  ))}
               </div>
               <Link href="#contact" className="mt-auto group/btn flex items-center gap-4 text-white text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:gap-6">
                  Inquire Case <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
               </Link>
            </div>
          </div>

          {/* Card: Family Law - Navy Contrast */}
          <div className="bento-card md:col-span-4 relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-navy shadow-[0_40px_80px_rgba(10,17,40,0.3)] p-8 md:p-12 flex flex-col justify-between hover:shadow-2xl transition-all duration-700 border border-white/5 min-h-[350px] md:min-h-0">
             <div className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-10">
                  <div className="w-12 h-px bg-gold/50" />
                  <div className="text-[9px] font-black text-gold uppercase tracking-[0.4em]">Private Client</div>
                </div>
                <h3 className="text-white text-3xl font-heading font-black tracking-tight group-hover:text-gold transition-colors mb-6 uppercase">Family Law</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-10 font-body">
                  Guardianship and elite asset management during complex family transitions and high-net-worth divorce.
                </p>
                <div className="space-y-4 mb-auto">
                   <div className="flex flex-wrap gap-2">
                      {["High-Net Divorce", "Asset Shielding", "Legacy Planning"].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 text-white/50 text-[9px] font-bold uppercase tracking-widest rounded-full border border-white/10">{tag}</span>
                      ))}
                   </div>
                </div>
                <Link href="#contact" className="mt-12 group/btn flex items-center gap-4 text-gold text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:gap-6">
                  Inquire Case <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                </Link>
             </div>
          </div>

          {/* Card: Immigration */}
          <div className="bento-card md:col-span-4 relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-navy p-8 md:p-12 flex flex-col justify-between min-h-[350px] md:min-h-0">
             <div 
               className="absolute inset-0 bg-cover bg-center opacity-10 grayscale" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=800')" }}
             />
             <div className="relative z-10 h-full flex flex-col text-left">
               <h3 className="text-white text-3xl font-heading font-black tracking-tight group-hover:text-gold transition-colors mb-6 uppercase">Immigration</h3>
               <div className="w-full h-px bg-white/10 mb-8" />
               <p className="text-white/40 text-sm leading-relaxed mb-6 font-body">
                 Navigating professional visa pathways and high-net-worth residency with diplomatic precision.
               </p>
               <p className="text-gold text-base leading-relaxed mb-auto italic font-heading font-bold">
                 &quot;Precision at the border of freedom.&quot;
               </p>
               <div className="mt-12 flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="space-y-1">
                    <div className="text-white text-[9px] font-bold uppercase tracking-widest">Investor Visa Patterns</div>
                    <div className="text-white/40 text-[8px] font-medium uppercase tracking-widest leading-none">EB-5 / Golden Visa Expertise</div>
                  </div>
                  <Link href="#contact" className="group/btn w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:rotate-[-45deg]" />
                  </Link>
               </div>
             </div>
          </div>

          {/* Card: Global Assets - Enhanced Contrast */}
          <div className="bento-card md:col-span-4 relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-navy p-8 md:p-12 flex flex-col justify-between hover:shadow-[0_40px_100px_rgba(212,175,55,0.2)] transition-all duration-700 border border-white/10 min-h-[350px] md:min-h-0">
             <div 
               className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-25 transition-all duration-1000 grayscale hover:grayscale-0 scale-110 group-hover:scale-100" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800')" }}
             />
             <div className="relative z-10">
                <div className="inline-flex py-1 px-3 rounded bg-gold text-white text-[8px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-gold/20">Offshore Mastery</div>
                <h3 className="text-gold text-3xl font-heading font-black tracking-tight mb-6 uppercase">Global Assets</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 font-body">
                  Protecting international interests and offshore structures with surgical precision.
                </p>
                <div className="space-y-2">
                   {["Offshore Trusts", "Asset Recovery", "Multi-Jurisdiction"].map(s => (
                     <div key={s} className="flex items-center gap-2 text-white/40 group-hover:text-gold/60 text-[9px] font-bold uppercase tracking-widest transition-colors">
                       <div className="w-3 h-px bg-gold/30" /> {s}
                     </div>
                   ))}
                </div>
             </div>
             <div className="relative z-10 mt-auto flex items-end justify-between">
                <Link href="#contact" className="group/btn flex items-center gap-4 text-gold text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:gap-6">
                  Inquire Case <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                </Link>
                <Globe className="w-16 h-16 text-gold/5 group-hover:text-gold/20 transition-all duration-700 group-hover:rotate-12" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
