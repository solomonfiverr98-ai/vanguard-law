"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Initial reveal
      tl.from(".hero-bg-accent", {
        opacity: 0,
        scale: 0.8,
        duration: 2,
        ease: "expo.out",
      });

      // Text Masking Reveal
      tl.from(".mask-reveal", {
        y: "110%",
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.out",
      }, "-=1.5");

      tl.from(".fade-up", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
      }, "-=1");

      // Portrait Parallax & Scale
      gsap.from(portraitRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.95,
        duration: 2,
        ease: "power3.out",
        delay: 0.5,
      });

      // Floating animation for portrait
      gsap.to(portraitRef.current, {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[90dvh] w-full bg-navy overflow-hidden flex items-center pt-24 pb-12"
    >
      {/* Dynamic Background Accents */}
      <div className="hero-bg-accent absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-gold/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="hero-bg-accent absolute bottom-[-20%] left-[-10%] w-[50%] h-[70%] bg-navy/40 blur-[120px] rounded-full pointer-events-none border border-gold/5" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Left: Text Content (Asymmetrical) */}
        <div className="w-full lg:w-[60%] order-2 lg:order-1">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 mb-8 fade-up">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase">
              Premier Legal Excellence
            </span>
          </div>

          <h1 className="text-white font-heading font-black leading-[0.85] tracking-tighter mb-10">
            <div className="overflow-hidden">
              <span className="mask-reveal inline-block text-[clamp(64px,11vw,120px)] select-none">
                PRECISION
              </span>
            </div>
            <div className="overflow-hidden mt-[-0.1em]">
              <span className="mask-reveal inline-block text-[clamp(64px,11vw,120px)] italic text-gold select-none">
                {"// POWER"}
              </span>
            </div>
          </h1>

          <p className="text-white/60 font-body text-lg md:text-xl max-w-2xl mb-12 leading-[1.7] fade-up">
            Vanguard Law provides elite strategic defense for global leaders, high-net-worth individuals, and industry innovators who demand uncompromising results. From high-stakes litigation to complex corporate advisory, we don&apos;t just practice law—we define the standard of excellence across international jurisdictions.
          </p>

          <div className="flex flex-wrap gap-6 fade-up">
            <Link
              href="#contact"
              className="group relative bg-gold text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-gold/30"
            >
              Start Free Consultation
            </Link>
            <Link
              href="#expertise"
              className="group flex items-center gap-4 px-8 py-5 rounded-full border border-white/10 text-white/80 text-sm font-bold uppercase tracking-widest hover:border-gold hover:text-white transition-all backdrop-blur-sm"
            >
              Explore Expertise
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          {/* Luxury Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-white/5 fade-up">
             <div>
                <div className="text-3xl font-heading font-black text-white">$250M+</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Recovered</div>
             </div>
             <div>
                <div className="text-3xl font-heading font-black text-white">99%</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Success Rate</div>
             </div>
             <div>
                <div className="text-3xl font-heading font-black text-white">24/7</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Availability</div>
             </div>
             <div>
                <div className="text-3xl font-heading font-black text-gold">2026 Nominee</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Best Law Firm</div>
             </div>
          </div>
        </div>

        {/* Right: Attorney Portrait Cutout */}
        <div className="w-full lg:w-[40%] order-1 lg:order-2 flex justify-center lg:justify-end">
          <div ref={portraitRef} className="relative w-full max-w-[500px] aspect-[4/5]">
            {/* Portrait Placeholder Background */}
            <div className="absolute inset-x-0 bottom-0 top-[20%] bg-gradient-to-t from-gold/20 via-transparent to-transparent rounded-[40px] opacity-50 blur-[40px]" />
            
            <Image 
              src="/attorney_portrait_hero_clean.png"
              alt="Vanguard Attorneys" 
              fill
              priority
              className="object-cover relative z-0 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -scale-x-100"
            />
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-12 hidden lg:flex items-center gap-6">
         <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr] animate-bounce-subtle">Scroll</span>
         <div className="w-px h-24 bg-gradient-to-t from-transparent via-gold/50 to-gold" />
      </div>
    </section>
  );
};


export default Hero;
