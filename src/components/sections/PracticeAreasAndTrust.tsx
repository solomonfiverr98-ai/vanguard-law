"use client";

import React from "react";
import { Scale, ShieldCheck, Sparkles, Gavel } from "lucide-react";

export const TrustBar = () => {
  const badges = [
    "⚖ American Bar Association",
    "⚖ Super Lawyers Rated",
    "⚖ Martindale-Hubbell AV Rated",
    "⚖ AVVO 10.0 Rating",
    "⚖ National Trial Lawyers Top 100",
  ];

  return (
    <section className="bg-navy py-8 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between gap-12">
          {badges.map((badge, i) => (
            <React.Fragment key={i}>
              <span className="text-gold font-semibold text-xs uppercase tracking-[0.2em] whitespace-nowrap">
                {badge}
              </span>
              {i < badges.length - 1 && (
                <div className="w-px h-6 bg-gold/20" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Marquee */}
        <div className="md:hidden flex animate-marquee whitespace-nowrap gap-12">
          {[...badges, ...badges].map((badge, i) => (
            <span key={i} className="text-gold font-semibold text-xs uppercase tracking-[0.2em]">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-20">
          <span className="section-label">Practice Areas</span>
          <h2 className="text-navy text-4xl md:text-6xl font-bold max-w-2xl leading-[1.1]">
            Comprehensive legal representation you can trust.
          </h2>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[320px]">
          {/* Card 1: Large (Personal Injury) */}
          <div className="md:col-span-8 md:row-span-2 bg-navy rounded-[2rem] p-10 md:p-12 text-white flex flex-col justify-end relative group overflow-hidden shadow-2xl">
            <div className="absolute top-12 right-12 opacity-10 group-hover:scale-110 transition-transform duration-500">
               <Scale className="w-48 h-48" />
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mb-8 border border-gold/30">
                <Gavel className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-4xl md:text-5xl font-bold mb-6">Personal Injury</h3>
              <p className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed font-body">
                When someone else&apos;s negligence changes your life, we fight relentlessly 
                to secure the compensation you deserve. No fees unless we win.
              </p>
              <button className="text-gold font-bold flex items-center gap-2 hover:translate-x-2 transition-transform font-body">
                Free Case Review <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Criminal Defense */}
          <div className="md:col-span-4 bg-surface rounded-[2rem] p-10 border border-border flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">Criminal Defense</h3>
              <p className="text-mutedText text-sm leading-relaxed font-body">
                Aggressive defense strategies protecting your freedom and future.
              </p>
            </div>
            <button className="text-gold font-bold text-sm mt-6 text-left group-hover:translate-x-1 transition-transform font-body">
              Learn More →
            </button>
          </div>

          {/* Card 3: Corporate Law */}
          <div className="md:col-span-4 bg-white rounded-[2rem] p-10 border-l-4 border-gold shadow-sm flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-bold text-navy mb-4">Corporate Law</h3>
            <p className="text-mutedText text-sm leading-relaxed font-body">
              Strategic legal counsel for businesses at every stage of growth and dispute.
            </p>
          </div>

          {/* Card 4: Family Law */}
          <div className="md:col-span-4 bg-surface2 rounded-[2rem] p-10 flex flex-col justify-between group hover:bg-gold hover:text-white transition-colors duration-300">
            <h3 className="font-heading text-2xl font-bold text-navy group-hover:text-white mb-4">Family Law</h3>
            <p className="text-mutedText text-sm group-hover:text-white/70 font-body">
              Compassionate guidance through life&apos;s most challenging family moments.
            </p>
          </div>

          {/* Card 5: Immigration Law */}
          <div className="md:col-span-4 bg-white rounded-[2rem] p-10 border border-border flex flex-col justify-end group hover:border-gold transition-all duration-300">
            <div>
              <h3 className="font-heading text-2xl font-bold text-navy mb-4">Immigration Law</h3>
              <p className="text-mutedText text-sm font-body">
                Navigating complex immigration processes with expertise, care, and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
