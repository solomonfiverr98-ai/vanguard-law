# SOP: Lead Capture Flow (lead_capture_flow.md)

## Objective
To capture lead data from the "Vanguard Law" landing page and automate notifications.

## Data Persistence (Layer 3: Supabase)
- **Table**: `leads`
- **Fields**: `name`, `email`, `phone`, `practice_area`, `case_description`, `source`, `created_at`, `status`.
- **Default Status**: `new`
- **Standard Source**: `vanguard-law`

## Logic & Notification (Layer 2: Server Actions)
- **Validation**: Use `zod` for server-side validation.
- **Database Entry**: Insert validated data using `@supabase/supabase-js`.
- **Notification**: Use `resend` to email `solomonfiverr98@gmail.com` with the lead details.

## Success State (Layer 1: UI)
- Clear the form fields.
- Show a success toast or message using `shadcn/ui`.
- Trigger a GSAP "success" micro-animation.

## Technical Details
- URL: `https://ixyjhvkupqwqqfpbsshd.supabase.co`
- Keys: Found in `.env.local`.
