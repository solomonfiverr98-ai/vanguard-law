# Preferred Tech Stack & Implementation Rules

## Core Stack
* **Framework:** Next.js (App Router) with TypeScript
* **Styling:** Tailwind CSS (Mandatory)
* **Component Library:** shadcn/ui
* **Icons:** Lucide React
* **Animations:** GSAP + ScrollTrigger
* **Database:** Supabase with RLS
* **Email:** Resend
* **Fonts:** Cormorant Garamond (headings) + Plus Jakarta Sans (body) via next/font/google
* **Deployment:** Cloudflare Pages

## Implementation Guidelines

### 1. Light Mode Throughout
* Background is always white #FFFFFF or #F8F7F5
* Never use dark backgrounds except hero overlay
* Navy #1B2A4A for primary elements and text
* Gold #C9A84C for accents and CTAs only
* Clean and professional always

### 2. Typography Rules
* Headlines: Cormorant Garamond — elegant, authoritative, serious
* Body: Plus Jakarta Sans — clean, readable, professional
* Navy #1B2A4A for main headings
* Gold #C9A84C for accent headings and highlights
* Never use casual or playful fonts

### 3. Component Patterns
* Buttons: rounded-full always
* Primary CTA: bg #1B2A4A text white
* Secondary CTA: border #1B2A4A text #1B2A4A
* Accent CTA: bg #C9A84C text white
* Cards: white background, subtle shadow, border #E5E2DC
* Hover on cards: translateY(-4px) shadow-lg border-color #C9A84C

### 4. Practice Area Cards
* Each practice area gets its own card
* Icon in navy circle
* Bold headline, short description
* "Learn More →" link in gold
* Never use equal 3-column grids — use asymmetric layouts

### 5. Trust Signals
* Bar association badges
* Case win statistics
* Years of experience
* Client satisfaction rate
* These must appear prominently throughout

### 6. Forbidden Patterns
* NO dark mode anywhere
* NO wellness or spa patterns
* NO fitness patterns
* NO real estate patterns
* NO casual or playful design elements
* NO Calendly embeds
* NO bright colors (no red, green, purple)
* NO generic law firm stock photos of gavels

### 7. Form Handling
* Server actions with use server
* Zod validation server side always
* Connect to Supabase leads table
* Resend notification on successful submission
* Show success toast on submit
