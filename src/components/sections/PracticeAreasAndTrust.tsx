"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { 
  Scale, 
  Gavel, 
  Globe, 
  Briefcase, 
  ShieldAlert,
  X,
  CheckCircle2,
  Info
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
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const PRACTICE_AREAS = [
    {
      id: "injury",
      title: "Personal Injury",
      icon: Gavel,
      description: "We advocate for victims of catastrophic negligence, ensuring the path to justice is absolute and uncompromising.",
      tags: ["Wrongful Death", "Catastrophic Liability", "Neurological Trauma"],
      image: "https://images.unsplash.com/photo-1549416878-b9ca35c2d47b?w=1200",
      colSpan: "md:col-span-8",
      rowSpan: "md:row-span-2",
      howWeHelp: "We conduct exhaustive accident reconstruction, secure medical expert testimony, and negotiate directly with high-limit insurance carriers to ensure maximum recovery.",
      evidence: ["Police & Incident Reports", "Comprehensive Medical Records", "Witness Contact Information", "Scene & Injury Photography", "Employment & Wage History"]
    },
    {
      id: "criminal",
      title: "Criminal Defense",
      icon: ShieldAlert,
      description: "Protecting your legacy with aggressive, elite defense strategies.",
      tags: ["Federal Defense", "White Collar", "Asset Protection"],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
      colSpan: "md:col-span-4",
      howWeHelp: "Our elite defense team deconstructs the prosecution's case, identifying constitutional violations and leveraging forensic technology to protect your freedom.",
      evidence: ["Initial Statement of Facts", "Digital Correspondence Logs", "Surveillance & GPS Data", "Financial & Transaction Records", "Personal Character References"]
    },
    {
      id: "corporate",
      title: "Corporate Strategy",
      icon: Briefcase,
      description: "Navigating global regulatory landscapes and high-tier litigation.",
      tags: ["M&A Advisory", "Venture Capital", "Compliance", "IP Protection"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      colSpan: "md:col-span-4",
      howWeHelp: "We provide surgical risk mitigation and regulatory oversight, ensuring your international ventures are shielded from litigation and market volatility.",
      evidence: ["Articles of Incorporation", "Partnership & Vendor Agreements", "IP Transition Certificates", "Historical Compliance Audits", "Consolidated Financial Statements"]
    },
    {
      id: "family",
      title: "Family Law",
      icon: Scale,
      description: "Guardianship and elite asset management during complex family transitions and high-net-worth divorce.",
      tags: ["High-Net Divorce", "Asset Shielding", "Legacy Planning"],
      colSpan: "md:col-span-4",
      howWeHelp: "We specialize in the discrete management of high-net-worth transitions, prioritizing asset protection and the long-term stability of your legacy.",
      evidence: ["Detailed Asset Schedules", "Trust & Estate Documents", "Prenuptial Agreements", "Custody Preference Outlines", "Certified Real Estate Valuations"]
    },
    {
      id: "immigration",
      title: "Immigration",
      icon: Globe,
      description: "Navigating professional visa pathways and high-net-worth residency with diplomatic precision.",
      tags: ["Investor Visas", "Golden Visa Expertise"],
      image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=800",
      colSpan: "md:col-span-4",
      howWeHelp: "We navigate complex global visa pathways for investors and elite professionals, providing diplomatic precision and expedited processing.",
      evidence: ["Full Passport History", "Investment Capital Proof", "Professional Credentials", "Custom Business Plans", "Clean Records Certification"]
    },
    {
      id: "assets",
      title: "Global Assets",
      icon: Globe,
      description: "Protecting international interests and offshore structures with surgical precision.",
      tags: ["Offshore Trusts", "Asset Recovery"],
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
      colSpan: "md:col-span-4",
      howWeHelp: "Our specialists implement offshore trust structures and international asset recovery strategies to safeguard your global interests from jurisdictional overreach.",
      evidence: ["Bank & Brokerage Statements", "Entity Formation Documents", "Historical Tax Filings", "Jurisdiction Analysis Reports", "Beneficial Ownership Records"]
    }
  ];

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
          {PRACTICE_AREAS.map((area) => (
            <div 
              key={area.id} 
              className={`${area.colSpan} ${area.rowSpan || ""} group relative min-h-[500px] md:min-h-0 overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-[0_40px_120px_rgba(10,17,40,0.15)] bg-navy border border-navy/5 [transform:translateZ(0)]`}
            >
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full flex flex-col">
                  {area.image && (
                    <div 
                      className={`absolute inset-0 bg-cover bg-center ${area.id === "injury" ? "opacity-40" : "opacity-10"} mix-blend-overlay scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out`} 
                      style={{ backgroundImage: `url('${area.image}')` }}
                    />
                  )}
                  {area.id === "injury" && <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent z-10" />}
                  
                  <div className={`relative z-20 h-full p-8 md:p-12 lg:p-16 flex flex-col ${area.id === "family" || area.id === "assets" || area.id === "immigration" ? "justify-start" : "justify-end"}`}>
                    {area.id === "family" && (
                      <div className="flex items-center justify-between mb-10">
                        <div className="w-12 h-px bg-gold/50" />
                        <div className="text-[9px] font-black text-gold uppercase tracking-[0.4em]">Private Client</div>
                      </div>
                    )}
                    {area.id === "assets" && (
                      <div className="inline-flex py-1 px-3 rounded bg-gold text-white text-[8px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-gold/20 w-fit">Offshore Mastery</div>
                    )}

                    <div className={`${area.id === "injury" ? "w-16 h-16 md:w-20 md:h-20" : "w-14 h-14"} bg-gold rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl shadow-gold/30 group-hover:-translate-y-2 transition-transform duration-700`}>
                      <area.icon className={`${area.id === "injury" ? "w-8 h-8 md:w-10 md:h-10" : "w-7 h-7"} text-white`} />
                    </div>

                    <h3 className={`text-white font-heading font-black mb-6 tracking-tighter uppercase ${area.id === "injury" ? "text-4xl md:text-6xl" : "text-3xl"}`}>
                      {area.title.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                          {word} {i === 0 && area.title.split(' ').length > 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h3>

                    <p className={`text-white/60 mb-8 leading-relaxed font-body ${area.id === "injury" ? "text-base md:text-xl max-w-2xl" : "text-sm max-w-xs"}`}>
                      {area.description}
                    </p>

                    {area.id === "immigration" && (
                       <p className="text-gold text-base leading-relaxed mb-6 italic font-heading font-bold">
                         &quot;Precision at the border of freedom.&quot;
                       </p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-8">
                      {area.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <button
                        onClick={() => setFlippedCardId(area.id)}
                        className="group/btn inline-flex items-center gap-4 text-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs hover:gap-6 transition-all"
                      >
                        View Strategy <Info className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                      </button>
                      
                      {area.id === "assets" && (
                         <Globe className="w-12 h-12 text-gold/5 group-hover:text-gold/20 transition-all duration-700 group-hover:rotate-12" />
                      )}
                    </div>
                  </div>
              </div>

              {/* Back Side (Slide-up Overlay) */}
              <div className={`absolute inset-0 w-full h-full z-30 bg-navy border-2 border-gold/30 p-8 md:p-12 lg:p-16 flex flex-col overflow-y-auto transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_100px_rgba(212,175,55,0.15)] ${flippedCardId === area.id ? 'translate-y-0' : 'translate-y-full'}`}>
                  <div className="flex justify-between items-start mb-8 md:mb-12">
                    <div>
                      <div className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-2">Case Blueprint</div>
                      <h3 className="text-white text-3xl md:text-4xl font-heading font-black tracking-tighter uppercase">{area.title}</h3>
                    </div>
                    <button 
                      onClick={() => setFlippedCardId(null)}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all"
                    >
                      <X className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  </div>

                  <div className="space-y-8 md:space-y-10 flex-grow">
                    <section>
                      <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                        <div className="w-8 h-px bg-gold/30" /> How We Help
                      </h4>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed font-body">
                        {area.howWeHelp}
                      </p>
                    </section>

                    <section className="flex-grow">
                      <h4 className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                        <div className="w-8 h-px bg-gold/30" /> Required Evidence
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {area.evidence.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 group/item">
                            <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                            <span className="text-white/60 text-[11px] md:text-xs font-medium tracking-tight group-hover/item:text-white transition-colors">{item}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 items-center justify-between">
                    <Link 
                      href="#contact" 
                      onClick={() => setFlippedCardId(null)}
                      className="w-full sm:w-auto px-8 py-4 bg-gold text-white font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm hover:brightness-110 transition-all text-center rounded-xl"
                    >
                      Inquire Case
                    </Link>
                    <div className="text-white/30 text-[9px] uppercase tracking-[0.4em] hidden md:block">Uncompromising Advocacy</div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
