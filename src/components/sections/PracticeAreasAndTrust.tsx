"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Scale, ShieldCheck, Sparkles, Gavel, Globe } from "lucide-react";
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
      {/* Subtle Gradient Overlays */}
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
      gsap.from(".bento-card", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="expertise" ref={containerRef} className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-navy/10 bg-navy/5 mb-8">
              <Scale className="w-3.5 h-3.5 text-navy/60" />
              <span className="text-navy/60 text-[10px] font-bold tracking-[0.3em] uppercase">Jurisdictional Mastery</span>
            </div>
            <h2 className="text-navy text-[clamp(40px,6vw,80px)] font-heading font-black leading-[0.95] tracking-tighter">
              Bespoke Legal <br />
              <span className="text-gold italic">Architectures.</span>
            </h2>
          </div>
          <p className="text-navy/50 font-body text-lg max-w-sm leading-relaxed border-l-2 border-gold/20 pl-8">
            Strategic counsel tailored for complex litigation and high-stakes transitions.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[350px] md:auto-rows-[400px]">
          {/* Main Card: Personal Injury */}
          <div className="bento-card md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] shadow-[0_30px_100px_rgba(10,17,40,0.1)]">
            <div className="absolute inset-0 bg-navy z-0" />
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent z-10" />
            
            <div className="relative z-20 h-full p-12 flex flex-col justify-end">
              <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-gold/20 group-hover:-translate-y-2 transition-transform duration-500">
                <Gavel className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-5xl md:text-6xl font-heading font-black mb-6 tracking-tighter">
                Personal <br /> Injury
              </h3>
              <p className="text-white/50 text-xl max-w-xl mb-12 leading-relaxed font-body">
                We advocate for victims of catastrophic negligence, ensuring the path to justice is absolute and uncompromising.
              </p>
              <Link
                href="#contact"
                className="group/btn flex items-center gap-4 text-gold font-bold uppercase tracking-widest text-sm"
              >
                Inquire Case <Sparkles className="w-4 h-4 transition-transform group-hover/btn:rotate-12 group-hover/btn:scale-125" />
              </Link>
            </div>
          </div>

          {/* Secondary Card: Criminal Defense */}
          <div className="bento-card md:col-span-4 relative group overflow-hidden rounded-[2.5rem] bg-navy/5 border border-navy/5 p-10 flex flex-col justify-between hover:bg-navy transition-all duration-500 shadow-sm hover:shadow-2xl">
            <div className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
              <ShieldCheck className="w-7 h-7 text-navy group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-navy group-hover:text-white text-3xl font-heading font-black mb-4 tracking-tighter transition-colors">
                Criminal <br /> Defense
              </h3>
              <p className="text-navy/40 group-hover:text-white/40 text-base leading-relaxed transition-colors">
                Protecting your legacy with aggressive, elite defense strategies.
              </p>
            </div>
          </div>

          {/* Glass Card: Corporate Law */}
          <div className="bento-card md:col-span-4 relative overflow-hidden rounded-[2.5rem] bg-gold p-10 flex flex-col justify-center group hover:brightness-110 transition-all duration-500 shadow-xl shadow-gold/10">
            <h3 className="text-white text-3xl font-heading font-black mb-4 tracking-tighter">
              Corporate <br /> Strategy
            </h3>
            <p className="text-white/70 text-base leading-relaxed">
              Navigating global regulatory landscapes and high-tier litigation.
            </p>
            <div className="absolute top-[-20%] right-[-20%] w-48 h-48 bg-white/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Bottom Row - Perfectly Balanced */}
          <div className="bento-card md:col-span-4 rounded-[2.5rem] border border-navy/5 p-10 flex flex-col justify-between hover:shadow-xl transition-all">
             <div className="text-gold font-black text-xs uppercase tracking-widest mb-4">Practice 04</div>
             <h4 className="text-navy text-2xl font-heading font-black tracking-tight">Family Law</h4>
             <p className="text-navy/50 text-sm mt-4">Guardianship and elite asset management during family transitions.</p>
          </div>

          <div className="bento-card md:col-span-4 rounded-[2.5rem] bg-navy p-10 flex flex-col justify-between group">
             <div className="text-gold/50 font-black text-xs uppercase tracking-widest mb-4">Practice 05</div>
             <h4 className="text-white text-2xl font-heading font-black tracking-tight group-hover:text-gold transition-colors">Immigration</h4>
             <div className="w-full h-px bg-white/10 my-6" />
             <p className="text-white/40 text-sm italic">&quot;Precision at the border of freedom.&quot;</p>
          </div>

          <div className="bento-card md:col-span-4 rounded-[2.5rem] bg-gold/5 border border-gold/20 p-10 flex flex-col justify-between group overflow-hidden transition-all duration-500 hover:bg-gold/10">
             <div className="text-gold font-black text-xs uppercase tracking-widest mb-4">Practice 06</div>
             <h4 className="text-navy text-2xl font-heading font-black tracking-tight">Global Assets</h4>
             <p className="text-navy/60 text-sm mt-4">Protecting international interests with surgical precision.</p>
             <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Globe className="w-32 h-32" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
