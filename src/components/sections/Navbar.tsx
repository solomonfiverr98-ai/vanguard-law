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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Practice Areas", href: "#practice-areas" },
    { name: "About", href: "#about" },
    { name: "Results", href: "#results" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Scale className={`w-8 h-8 transition-colors ${isScrolled ? "text-navy" : "text-white"}`} />
          <span className={`font-heading text-2xl font-bold tracking-tight transition-colors ${isScrolled ? "text-navy" : "text-white"}`}>
            VANGUARD LAW
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-[#4A4A6A] hover:text-navy" : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            href="#contact"
            className="bg-gold hover:brightness-110 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 active:scale-95 shadow-md shadow-gold/20"
          >
            Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-navy" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-navy" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-b border-border transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen py-8 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-navy hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center bg-gold text-white py-4 rounded-full font-bold shadow-lg shadow-gold/20"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
