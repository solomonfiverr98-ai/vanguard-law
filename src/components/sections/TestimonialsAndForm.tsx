"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight, Lock, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { submitLead } from "@/app/actions";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      text: "Vanguard Law fought for me when I felt completely alone. They secured a $380,000 settlement for my injury case. I cannot thank them enough.",
      name: "David R.",
      case: "Personal Injury Client",
      initials: "DR",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    },
    {
      text: "Facing criminal charges was the most terrifying experience of my life. The team at Vanguard Law had all charges dropped. They are exceptional.",
      name: "Anonymous",
      case: "Criminal Defense Client",
      initials: "A",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=100", // High-end house background for anonymous
    },
    {
      text: "Our business faced a serious contract dispute. Vanguard Law resolved it efficiently and saved us from a costly legal battle.",
      name: "Jennifer M.",
      case: "Corporate Law Client",
      initials: "JM",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100", // Real professional headshot
    },
    {
      text: "They handled my divorce with compassion and professionalism. My children and I got the outcome we needed. Forever grateful.",
      name: "Maria S.",
      case: "Family Law Client",
      initials: "MS",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100",
    },
  ];


  return (
    <section id="testimonials" className="bg-surface py-24 md:py-32 scroll-mt-24 md:scroll-mt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <span className="section-label">Client Testimonials</span>
          <h2 className="text-navy text-4xl md:text-6xl font-bold font-heading">What our clients say.</h2>
        </div>

        <div className="relative group">
           <div 
             className="flex transition-transform duration-700 ease-in-out"
             style={{ transform: `translateX(-${activeIndex * 100}%)` }}
           >
             {testimonials.map((testi, i) => (
               <div key={i} className="min-w-full px-4">
                 <div className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-border shadow-sm flex flex-col items-center text-center max-w-4xl mx-auto">
                    <div className="flex gap-1 mb-8">
                       {[...Array(5)].map((_, j) => (
                         <Star key={j} className="w-5 h-5 text-gold fill-gold" />
                       ))}
                    </div>
                    
                    <Quote className="w-12 h-12 text-gold/20 mb-8" />
                    
                    <blockquote className="text-navy font-heading text-2xl md:text-3xl italic leading-relaxed mb-12">
                      &quot;{testi.text}&quot;
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                       <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold/40 bg-gold flex items-center justify-center">
                          {testi.image && !testi.name.includes("Anonymous") ? (
                            <Image src={testi.image} alt={testi.name} fill className="object-cover" />
                          ) : (
                            <span className="text-white font-bold text-xl uppercase tracking-tighter">
                              {testi.initials || testi.name[0]}
                            </span>
                          )}
                       </div>
                       <div className="text-left">
                          <div className="text-navy font-bold text-lg font-body">{testi.name}</div>
                          <div className="text-mutedText text-sm font-body">{testi.case}</div>
                       </div>
                    </div>
                 </div>
               </div>
             ))}
           </div>

           {/* Navigation */}
           <button 
             onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
             className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all shadow-md -translate-x-1/2 opacity-0 group-hover:opacity-100"
           >
             <ChevronLeft className="w-6 h-6" />
           </button>
           <button 
             onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
             className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all shadow-md translate-x-1/2 opacity-0 group-hover:opacity-100"
           >
             <ChevronRight className="w-6 h-6" />
           </button>
        </div>
      </div>
    </section>
  );
};

export const FreeConsultation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    const formData = new FormData(e.currentTarget);
    const result = await submitLead(formData);
    
    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
    } else if (result.error) {
      if (typeof result.error === "object") {
         setErrors(result.error as Record<string, string[]>);
      } else {
         alert(result.error as string);
      }
    }
  }



  return (
    <section id="contact" className="relative bg-navy py-24 md:py-40 scroll-mt-24 md:scroll-mt-32 overflow-hidden">
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-fixed opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1600')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy pointer-events-none" />

      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[22vw] font-bold text-gold opacity-[0.03] select-none pointer-events-none uppercase">
        Vanguard
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="text-center mb-16 lg:mb-20">
          <span className="section-label text-gold">Free Consultation</span>
          <h2 className="text-white text-5xl md:text-7xl font-bold font-heading leading-tight mb-8">
            Your case deserves <br />
            <span className="italic text-gold">expert attention.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-body max-w-2xl mx-auto leading-relaxed">
            Schedule a free, confidential consultation with one of our experienced attorneys. 
            No obligation. No upfront fees.
          </p>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-2xl bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden">
          {isSuccess ? (
             <div className="relative z-10 flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-gold animate-bounce" />
                </div>
                <h3 className="text-navy text-2xl md:text-4xl font-heading font-black mb-4">Consultation Secure.</h3>
                <p className="text-sm md:text-base text-navy/70 mb-8 font-body max-w-md mx-auto leading-relaxed">
                  Thank you for trusting Vanguard Law. Your information is protected under attorney-client privilege. Our elite legal team will review your case file and contact you within <strong>24 business hours</strong>.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-navy hover:bg-navy/90 text-white px-8 py-4 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95"
                >
                  Return to Inquiry
                </button>
             </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-navy uppercase tracking-widest block font-body">Full Name *</label>
                <input 
                  required
                  name="name"
                  type="text" 
                  className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-border'} focus:border-gold outline-none py-3 text-navy font-body transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.name[0]}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-navy uppercase tracking-widest block font-body">Email Address *</label>
                <input 
                  required
                  name="email"
                  type="email" 
                  className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-border'} focus:border-gold outline-none py-3 text-navy font-body transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.email[0]}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-navy uppercase tracking-widest block font-body">Phone Number</label>
                <input 
                  name="phone"
                  type="tel" 
                  className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-navy font-body transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-navy uppercase tracking-widest block font-body">Practice Area</label>
                <select name="practice_area" className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-navy font-body transition-colors appearance-none cursor-pointer">
                  <option value="Personal Injury">Personal Injury</option>
                  <option value="Criminal Defense">Criminal Defense</option>
                  <option value="Corporate Law">Corporate Law</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Immigration Law">Immigration Law</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold text-navy uppercase tracking-widest block font-body">Brief Case Description *</label>
              <textarea 
                required
                name="case_description"
                rows={3}
                className={`w-full bg-transparent border-b ${errors.case_description ? 'border-red-500' : 'border-border'} focus:border-gold outline-none py-3 text-navy font-body transition-colors resize-none`}
                placeholder="How can we help you?"
              />
              {errors.case_description && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.case_description[0]}</p>}
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold hover:brightness-110 disabled:opacity-70 disabled:hover:brightness-100 text-white rounded-full py-4 text-sm md:text-base font-bold uppercase tracking-widest shadow-xl shadow-gold/20 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin" /> Processing...
                </>
              ) : (
                <>Schedule Consultation <ArrowRight className="w-4 h-4" /></>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[#8A8AA0] text-[11px] font-semi-bold tracking-wide font-body">
              <Lock className="w-3 h-3" /> All consultations are 100% confidential. Attorney-client privilege applies.
            </div>
          </form>
          )}
        </div>
      </div>
    </section>
  );
};
