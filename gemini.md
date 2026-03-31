# ⚖ Vanguard Law — Project Constitution (gemini.md)

## 🏗 Data Schemas

### Table: `leads`
Storage: Supabase
Schema:
- `id`: uuid (primary key)
- `name`: text (required)
- `email`: text (required)
- `phone`: text
- `practice_area`: text (Personal Injury, Criminal Defense, Corporate Law, Family Law, Immigration Law, Other)
- `case_description`: text
- `source`: text (utm_source, referral, etc.)
- `created_at`: timestamptz (default: now())
- `status`: text (default: 'new')

## 📐 Architectural Invariants
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Strict Light Mode)
- **Animations**: GSAP + ScrollTrigger
- **Database**: Supabase
- **Email**: Resend
- **Deployment**: Cloudflare Pages (Manual)

## 📜 Behavioral Rules
- **No Specific Location**: Universal market, no local references.
- **Imagery**: Professional justice/courtroom imagery only. (No gavels/handshakes)
- **Typography**: Headings (Cormorant Garamond), Body (Plus Jakarta Sans).
- **Asymmetry**: Practice areas must use an asymmetric bento grid.

## 🛠 Maintenance Log
- **2026-03-31**: Initial B.L.A.S.T. setup and Discovery Phase completed.
