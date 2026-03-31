"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-bg", {
        scale: 1.1,
        duration: 2.5,
        ease: "power2.out",
      });

      tl.from(".headline-word", {
        y: 100,
        opacity: 0,
        rotateX: -20,
        stagger: 0.15,
        duration: 1.2,
      }, "-=2");

      tl.from(subtextRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
      }, "-=0.8");

      tl.from(buttonsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6");

      tl.from(".stat-item", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
      }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "$50M+", label: "Recovered for Clients" },
    { value: "2,500+", label: "Cases Won" },
    { value: "95%", label: "Success Rate" },
    { value: "20+", label: "Years Combined Experience" },
  ];

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full bg-navy overflow-hidden flex flex-col justify-end">
      {/* Background Image with Overlay */}
      <div 
        className="hero-bg absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/88 to-navy/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-20 md:pb-24">
        <div className="max-w-4xl">
          <span className="flex items-center gap-2 text-gold font-bold text-[11px] tracking-[0.3em] uppercase mb-6 gsap-reveal">
            <Scale className="w-4 h-4" /> Trusted Legal Representation
          </span>

          <h1 ref={headlineRef} className="text-[#FFFFFF] font-heading font-bold leading-[0.9] overflow-hidden mb-8">
            <span className="inline-block headline-word text-[clamp(56px,8.5vw,96px)]">Fighting For</span>{" "}
            <br className="hidden md:block" />
            <span className="inline-block headline-word text-[clamp(56px,8.5vw,96px)]">What Matters</span>{" "}
            <br className="hidden md:block" />
            <span className="inline-block headline-word text-[clamp(56px,8.5vw,96px)] italic text-gold">Most.</span>
          </h1>

          <p ref={subtextRef} className="text-white/70 font-body text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
            Experienced attorneys dedicated to protecting your rights and securing 
            the results you deserve. We stand by you every step of the way.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-5 mb-16">
            <Link
              href="#contact"
              className="bg-gold hover:brightness-110 text-white rounded-full px-10 py-5 text-lg font-bold transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl shadow-gold/20"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#results"
              className="border border-white/40 hover:border-gold text-white rounded-full px-10 py-5 text-lg font-bold transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              View Our Results
            </Link>
          </div>

          {/* Stats Bar */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item relative">
                <div className="text-gold font-heading text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-white/40 font-body text-[10px] md:text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-px h-8 bg-gold/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Scale = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/>
  </svg>
);

export default Hero;
