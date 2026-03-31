"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { TrendingUp, Users, Clock, ShieldCheck, Scale } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ResultsStats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
      });

      // Count up animation for $50M+
      const countObj = { val: 0 };
      gsap.to(countObj, {
        scrollTrigger: {
          trigger: countRef.current,
          start: "top 85%",
        },
        val: 50,
        duration: 2.5,
        ease: "power2.out",
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.innerText = `$${Math.floor(countObj.val)}M+`;
          }
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="results" ref={containerRef} className="bg-surface py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="section-label">Our Track Record</span>
          <h2 className="text-navy text-4xl md:text-6xl font-bold max-w-2xl leading-[1.1]">
            Results that speak for themselves.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Large Card (60%) */}
          <div className="stat-card md:w-[60%] bg-navy rounded-[2.5rem] p-12 text-white relative overflow-hidden shadow-2xl flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div ref={countRef} className="text-gold font-heading text-[clamp(64px,12vw,120px)] font-bold mb-4 leading-none">
              $50M+
            </div>
            <h3 className="text-xl md:text-2xl font-body font-bold mb-6 text-white/90">Recovered for injury clients</h3>
            <p className="text-white/50 text-base md:text-lg max-w-md leading-relaxed font-body">
              Our personal injury team has relentlessly secured over $50 million in settlements 
              and verdicts for our clients. No fees unless we win your case.
            </p>
          </div>

          {/* Small Cards Column (40%) */}
          <div className="md:w-[40%] flex flex-col gap-6">
            <div className="stat-card bg-white rounded-[2rem] p-8 border border-border shadow-sm flex items-center gap-6 group hover:border-gold transition-colors duration-300">
               <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                  <Users className="w-8 h-8" />
               </div>
               <div>
                  <div className="text-navy font-heading text-4xl font-bold mb-1">2,500+</div>
                  <div className="text-mutedText text-sm uppercase tracking-wider font-body">Cases Resolved</div>
               </div>
            </div>

            <div className="stat-card bg-white rounded-[2rem] p-8 border border-border shadow-sm flex items-center gap-6 group hover:border-gold transition-colors duration-300">
               <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                  <TrendingUp className="w-8 h-8" />
               </div>
               <div>
                  <div className="text-navy font-heading text-4xl font-bold mb-1">95%</div>
                  <div className="text-mutedText text-sm uppercase tracking-wider font-body">Client Success Rate</div>
               </div>
            </div>

            <div className="stat-card bg-white rounded-[2rem] p-8 border border-border shadow-sm flex items-center gap-6 group hover:border-gold transition-colors duration-300">
               <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                  <Clock className="w-8 h-8" />
               </div>
               <div>
                  <div className="text-navy font-heading text-4xl font-bold mb-1">20+</div>
                  <div className="text-mutedText text-sm uppercase tracking-wider font-body">Years Experience</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Attorneys = () => {
  const attorneys = [
    {
      name: "James Blackwell, Esq.",
      role: "Senior Partner",
      specialty: "Personal Injury & Criminal Defense",
      experience: "18 years experience",
      bar: "Admitted in the American Bar Association",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600",
    },
    {
      name: "Sarah Chen, Esq.",
      role: "Partner",
      specialty: "Corporate & Immigration Law",
      experience: "12 years experience",
      bar: "Admitted in the American Bar Association",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
    },
    {
      name: "Marcus Williams, Esq.",
      role: "Associate Attorney",
      specialty: "Family Law & Personal Injury",
      experience: "8 years experience",
      bar: "Admitted in the American Bar Association",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    },
  ];

  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="section-label">Our Team</span>
            <h2 className="text-navy text-4xl md:text-6xl font-bold leading-[1.1]">
              Experienced attorneys.<br />Personal attention.
            </h2>
          </div>
          <p className="text-mutedText text-lg max-w-md font-body">
            Our firm is built on a foundation of integrity and an unwavering commitment to our clients&apos; success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attorneys.map((atty, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-[2rem] overflow-hidden border border-border hover:shadow-2xl hover:border-gold transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image 
                  src={atty.image} 
                  alt={atty.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-8">
                <div className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-2">{atty.role}</div>
                <h3 className="text-navy font-heading text-2xl font-bold mb-4">{atty.name}</h3>
                
                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-gold/60" />
                    <span className="text-[#4A4A6A] text-sm font-medium font-body">{atty.specialty}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold/60" />
                    <span className="text-[#8A8AA0] text-sm font-body">{atty.experience}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Scale className="w-5 h-5 text-gold/60" />
                    <span className="text-[#8A8AA0] text-[11px] font-body">{atty.bar}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
