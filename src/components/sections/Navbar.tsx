"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Scale, Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Expertise", href: "#practice-areas" },
    { name: "Experience", href: "#results" },
    { name: "Attorneys", href: "#attorneys" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${
        isScrolled && !mobileMenuOpen
          ? "py-4 bg-white/95 backdrop-blur-md border-b border-navy/10 shadow-[0_10px_40px_rgba(10,17,40,0.08)]" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="relative z-[200] max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group relative" onClick={() => setMobileMenuOpen(false)}>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 scale-90 group-hover:scale-100 ${
            mobileMenuOpen ? "bg-white text-navy" : isScrolled ? "bg-navy text-white shadow-lg shadow-navy/20" : "bg-white text-navy shadow-xl shadow-black/10"
          }`}>
            <Scale className="w-5 h-5" />
          </div>
          <span className={`font-heading text-xl md:text-2xl font-black tracking-tighter transition-colors duration-500 uppercase ${
            mobileMenuOpen ? "text-white" : isScrolled ? "text-navy" : "text-white"
          }`}>
            Vanguard
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 px-8 py-3 rounded-full border border-navy/5 bg-navy/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-bold uppercase tracking-[0.1em] transition-all duration-300 font-body relative group ${
                  isScrolled ? "text-navy/60 hover:text-navy" : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-gold rounded-full transition-all duration-300 group-hover:w-full`} />
              </Link>
            ))}
          </div>
          
          <Link
            href="#contact"
            className="group relative overflow-hidden bg-gold text-white px-8 py-3.5 rounded-full text-[13px] font-bold uppercase tracking-[0.1em] transition-all hover:pr-10 active:scale-95 shadow-xl shadow-gold/20"
          >
            <span className="relative z-10">Consultation</span>
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 -translate-x-full transition-all group-hover:opacity-100 group-hover:translate-x-0" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-3 rounded-xl transition-all ${
            mobileMenuOpen ? "bg-white/10 text-white backdrop-blur-md" : isScrolled ? "bg-navy text-white" : "bg-white text-navy"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[150] bg-[#0A1128] lg:hidden transition-all duration-500 ease-out ${
          mobileMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
      >
        {/* Solid Background Layer to ensure no transparency */}
        <div className="absolute inset-0 bg-[#0A1128]" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] gap-6 px-8 pt-10 pb-20">
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-4xl font-heading font-black tracking-tighter uppercase transition-all duration-500 hover:scale-110 ${
                  mobileMenuOpen 
                    ? "translate-y-0 opacity-100 text-white hover:text-gold" 
                    : "translate-y-10 opacity-0 text-white/50"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className={`w-16 h-[2px] bg-gold/30 my-8 transition-all duration-1000 ${mobileMenuOpen ? "scale-x-100" : "scale-x-0"}`} />
          
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full max-w-xs text-center bg-gold text-navy py-5 rounded-2xl text-sm font-bold uppercase tracking-[0.2em] shadow-2xl transition-all active:scale-95 duration-500 ${
              mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${navLinks.length * 50}ms` }}
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
