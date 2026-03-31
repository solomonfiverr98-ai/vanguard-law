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
- **Deployment**: GitHub / Cloudflare Pages (Manual)

## 📜 Behavioral Rules
- **No Specific Location**: Universal market, no local references.
- **Imagery**: Professional justice/courtroom imagery only. High-end attorney portrait cutouts for Hero.
- **Typography**: Headings (Playfair Display), Body (Plus Jakarta Sans).
- **Color Palette**: Charcoal Navy (#0A1128), Metallic Antique Gold (#D4AF37).
- **Asymmetry**: Practice areas and Hero must use an asymmetric, premium layout.

## 🛠 Maintenance Log
- **2026-03-31**: Initial B.L.A.S.T. setup and Discovery Phase completed.
