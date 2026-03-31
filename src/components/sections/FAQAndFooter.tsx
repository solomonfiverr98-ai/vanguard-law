"use client";

import React, { useState, useRef } from "react";
import { Plus, Minus, Mail, Phone, MapPin, Globe } from "lucide-react";
import gsap from "gsap";

const faqs = [
  {
    question: "Do I have to pay anything upfront for a personal injury case?",
    answer: "No. At Vanguard Law, we work on a contingency fee basis for all personal injury cases. This means we only get paid if we successfully recover compensation for you. Our initial consultations are always free.",
  },
  {
    question: "How long will my case take to resolve?",
    answer: "Every case is unique. Simple settlements might take a few months, while complex litigation can take over a year. During our first meeting, we&apos;ll give you a realistic timeline based on the specifics of your situation.",
  },
  {
    question: "What should I bring to my free consultation?",
    answer: "Please bring any relevant documents, such as police reports, medical bills, photos of the incident, insurance correspondence, or contract copies. The more information we have, the better we can evaluate your case.",
  },
  {
    question: "Can I switch lawyers if I'm already represented?",
    answer: "Yes, you have the right to change legal counsel at any time. If you feel your current representation isn&apos;t meeting your needs, we can review your file and advise if transition to Vanguard Law is appropriate for your case.",
  },
  {
    question: "Is my corporate data secure with Vanguard Law?",
    answer: "Absolutely. We employ enterprise-grade security for all digital files and maintain strict attorney-client privilege. Confidentiality is a cornerstone of our practice.",
  },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      gsap.to(contentRef.current, { height: "auto", duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(contentRef.current, { height: 0, duration: 0.4, ease: "power3.inOut" });
    }
  };

  return (
    <div className="border-b border-border py-4">
      <button 
        onClick={toggle}
        className="w-full flex items-center justify-between py-4 text-left group focus:outline-none"
      >
        <span className={`text-xl md:text-2xl font-heading font-bold transition-colors ${isOpen ? 'text-gold' : 'text-navy'} group-hover:text-gold`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all ${isOpen ? 'bg-navy border-navy text-white rotate-180' : 'text-navy'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div 
        ref={contentRef} 
        className="h-0 overflow-hidden"
      >
        <p className="text-mutedText text-lg pb-6 leading-relaxed font-body">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label">General Questions</span>
          <h2 className="text-navy text-4xl md:text-6xl font-bold font-heading">Frequently asked.</h2>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-surface pt-16 pb-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
               <span className="text-white text-xl font-heading font-black relative z-10">V</span>
            </div>
            <span className="text-navy font-heading text-2xl font-bold tracking-tight">Vanguard Law</span>
          </div>
          <p className="text-mutedText font-body text-sm leading-relaxed mb-8">
            Providing expert legal representation across all practice areas. Excellence as standard, justice as a priority.
          </p>
          <div className="flex gap-4">
             <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all"><Globe className="w-4 h-4" /></a>
             <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all"><Globe className="w-4 h-4" /></a>
             <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all"><Globe className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-navy font-bold uppercase text-[11px] tracking-widest mb-6 font-body">Practice Areas</h4>
          <ul className="space-y-4 text-mutedText text-sm font-semi-bold font-body">
            <li><a href="#" className="hover:text-gold transition-colors">Personal Injury</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Criminal Defense</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Corporate Law</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Family Law</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Immigration Law</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-navy font-bold uppercase text-[11px] tracking-widest mb-6 font-body">Contact Info</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gold shrink-0" />
              <span className="text-mutedText text-sm font-body">
                123 Excellence Plaza,<br />Suite 500, MD 20854
              </span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <span className="text-mutedText text-sm font-body">+1 (555) 000-0000</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-gold shrink-0" />
              <span className="text-mutedText text-sm font-body">contact@vanguardlaw.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-navy font-bold uppercase text-[11px] tracking-widest mb-6 font-body">Office Hours</h4>
          <ul className="space-y-4 text-mutedText text-sm font-body">
            <li className="flex justify-between">
              <span>Mon - Fri:</span>
              <span className="text-navy font-bold">9:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sat:</span>
              <span className="text-navy font-bold">10:00 AM - 2:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sun:</span>
              <span className="text-navy font-bold">Closed</span>
            </li>
            <li className="pt-4 border-t border-border mt-4">
               <span className="text-[10px] italic">24/7 Phone Support Available</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[#8A8AA0] text-[11px] font-body text-center md:text-left leading-relaxed">
          © 2026 Vanguard Law Firm. All Rights Reserved. <br />
          The information on this website is for general information purposes only. 
          Nothing on this site should be taken as legal advice for any individual case or situation.
        </p>
        <div className="flex gap-8 text-[11px] font-bold text-navy uppercase tracking-widest font-body">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gold transition-colors">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};
