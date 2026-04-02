"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Scale, Award } from "lucide-react";

export const AboutVanguard = () => {
  return (
    <section id="about" className="bg-surface py-24 md:py-32 scroll-mt-24 md:scroll-mt-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: About Text */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-navy/10 bg-navy/5">
              <Scale className="w-3.5 h-3.5 text-navy border-navy" />
              <span className="text-navy text-[10px] font-bold tracking-[0.3em] uppercase">About Vanguard</span>
            </div>
            
            <h2 className="text-navy text-[clamp(36px,8vw,70px)] font-heading font-black leading-[1] tracking-tighter">
              Redefining the <br /> <span className="text-gold italic">Legal Standard.</span>
            </h2>
            
            <p className="text-navy/60 font-body text-lg leading-relaxed max-w-xl">
              Vanguard Law was founded on a singular premise: that exceptional clients require uncompromising representation. We are not a volume practice. We are an elite architectural firm for your legal defense, engineering pathways to victory that others deem impossible.
            </p>
            
            <div className="space-y-6 pt-6 border-t border-border">
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1 cursor-pointer hover:bg-gold/20 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-gold" />
                 </div>
                 <div>
                    <h4 className="text-navy font-bold font-body">Absolute Discretion</h4>
                    <p className="text-navy/50 text-sm font-body mt-1">Safeguarding the privacy and reputations of high-net-worth portfolios worldwide.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-1 cursor-pointer hover:bg-gold/20 transition-colors">
                    <Award className="w-5 h-5 text-gold" />
                 </div>
                 <div>
                    <h4 className="text-navy font-bold font-body">Elite Litigation Team</h4>
                    <p className="text-navy/50 text-sm font-body mt-1">Our partners are hand-selected from the top 1% of legal talent globally.</p>
                 </div>
              </div>
            </div>
            
          </div>
          
          {/* Right: Abstract Imagery / Firm Image */}
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-gold/5 blur-2xl rounded-full" />
             <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto lg:mr-0 rounded-[3rem] overflow-hidden shadow-2xl">
               <Image 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
                 alt="Vanguard Office"
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
               <div className="absolute bottom-10 left-10 text-white">
                 <div className="text-4xl font-heading font-black tracking-tighter">Est. 2005</div>
                 <div className="text-[10px] text-gold uppercase tracking-[0.3em] font-bold mt-2">Decades of Dominance</div>
               </div>
             </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};
