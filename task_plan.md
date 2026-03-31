# Project Task Plan (task_plan.md) — Vanguard Law

## Phase 0: Initialization [Protocol 0]
- [X] Create `task_plan.md`
- [X] Create `findings.md`
- [X] Create `progress.md`
- [X] Create `gemini.md` (Project Constitution)
- [X] Discovery Phase completed (B - Blueprint)

## Phase 1: Blueprint (Finalize Logic)
- [X] Define Data Schema in `gemini.md`
- [X] Research: GSAP patterns and Next.js 14 server components.

## Phase 2: Link (Connect Services)
- [/] Verify `.env.local` credentials.
- [ ] Build minimal verification for Supabase.
- [ ] Build minimal verification for Resend.

## Phase 3: Architect (Build the 3-Layer System)
- [ ] Layer 1: Architecture (`architecture/`)
    - [ ] Write SOP: `lead_capture_flow.md`
    - [ ] Write SOP: `animation_system.md`
- [ ] Layer 2: Navigation (Decision Making)
    - [ ] Map routing and server actions.
- [ ] Layer 3: Tools (`tools/` - Not needed as per user "No Python scripts")
    - [ ] Implement Next.js Server Actions.

## Phase 4: Stylize (Full UI Build)
- [ ] Build Navbar (Sticky, Gold CTA)
- [ ] Build Hero (100dvh, GSAP staggered slide-up)
- [ ] Build Trust Bar (ABA marquee)
- [ ] Build Practice Areas (Asymmetric Bento Grid)
- [ ] Build Results & Stats (Count-up GSAP)
- [ ] Build Meet the Attorneys (Card Layout)
- [ ] Build Testimonials (Carousel)
- [ ] Build Free Consultation (Lead capture form)
- [ ] Build FAQ (Accordion)
- [ ] Build Footer (Logo pulse, disclaimer)

## Phase 5: Trigger (Deployment)
- [ ] Final Build check (`npm run build`).
- [ ] Initialize Git and GitHub (`vanguard-law`).
- [ ] Handover for manual Cloudflare Pages deployment.
