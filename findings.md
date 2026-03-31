# Project Findings (findings.md) — Vanguard Law

## Research & Discoveries

### Brand Identity (Source: brand-identity skill)
- **Name:** Vanguard Law
- **Tagline:** "Fighting for what matters most."
- **Colors:**
  - Navy Primary: `#1B2A4A`
  - Gold Accent: `#C9A84C`
  - White Background: `#FFFFFF`
  - Off-white Surface: `#F8F7F5`
- **Typography:**
  - Headings: `Cormorant Garamond` (Elegant, Authoritative)
  - Body: `Plus Jakarta Sans` (Clean, Modern)

### Technology Stack
- **Framework:** Next.js 14+ (App Router)
- **Logic:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** GSAP + ScrollTrigger
- **Database:** Supabase (leads table)
- **Email:** Resend
- **Deployment:** Cloudflare Pages (Manual Handover)

### Integration Status
- `.env.local`: Contains `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, and `RESEND_API_KEY`. (Verification required in Phase 2).
- Supabase Schema: `leads` table with fields `id`, `name`, `email`, `phone`, `practice_area`, `case_description`, `source`, `created_at`, `status`.

## Architectural Constraints
- **Universal Market**: No specific geographic references.
- **Asymmetric Layout**: Avoiding standard 3-column grids for practice areas.
- **No Python scripts**: System Pilot automation to focus on Next.js Server Actions.
