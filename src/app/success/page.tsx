"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Phone } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/FAQAndFooter";

export default function SuccessPage() {
  return (
    <main className="bg-navy min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow relative flex items-center justify-center py-24 md:py-32 px-6 overflow-hidden mt-20">
        {/* Background Accents */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
          <div className="absolute top-[10%] left-[-10%] w-full h-full border border-gold rotate-12" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold text-[30vw] font-black uppercase opacity-10">Vanguard</div>
        </div>

        <div className="relative z-10 max-w-4xl w-full">
          <div className="bg-white rounded-[3rem] p-8 md:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.4)] border border-white/10 text-center">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-gold/10 rounded-full mb-10 relative">
              <div className="absolute inset-0 bg-gold animate-ping opacity-20 rounded-full" />
              <CheckCircle2 className="w-10 h-10 md:w-14 md:h-14 text-gold relative z-10" />
            </div>

            <h1 className="text-navy text-4xl md:text-7xl font-heading font-black mb-8 tracking-tighter uppercase leading-none">
              Inquiry <br />
              <span className="text-gold italic">Confirmed.</span>
            </h1>

            <p className="text-navy/70 text-lg md:text-xl font-body max-w-2xl mx-auto mb-12 leading-relaxed">
              Your case details have been securely transmitted to our executive legal team. 
              Vanguard Law maintains the highest standards of <span className="text-navy font-bold">attorney-client privilege</span>.
            </p>

            {/* Next Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col items-center text-center">
                <ShieldCheck className="w-6 h-6 text-gold mb-4" />
                <h3 className="text-navy font-bold text-sm uppercase tracking-widest mb-2 font-heading">Secure</h3>
                <p className="text-xs text-navy/50 font-body">Encrypted transmission complete.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col items-center text-center">
                <Clock className="w-6 h-6 text-gold mb-4" />
                <h3 className="text-navy font-bold text-sm uppercase tracking-widest mb-2 font-heading">Timely</h3>
                <p className="text-xs text-navy/50 font-body">Response within 24 business hours.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col items-center text-center">
                <Phone className="w-6 h-6 text-gold mb-4" />
                <h3 className="text-navy font-bold text-sm uppercase tracking-widest mb-2 font-heading">Direct</h3>
                <p className="text-xs text-navy/50 font-body">A senior attorney will reach out.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link 
                href="/"
                className="w-full md:w-auto bg-navy hover:bg-navy/90 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95"
              >
                Return to Site <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
