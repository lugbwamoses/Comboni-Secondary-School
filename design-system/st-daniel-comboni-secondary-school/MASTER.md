# St. Daniel Comboni Secondary School — Design System

This reference describes the current React prototype. It is intended for a South Sudanese secondary school public website, not a university or research laboratory. Treat sample imagery and content as replaceable demonstration material.

## Visual direction

- Institutional, welcoming, and education-focused.
- Use clear page hierarchy, restrained color, real school-approved imagery, and practical navigation.
- Keep gradients for emphasis; do not use them as decoration across every section.
- Use cards when they organize related content. Avoid adding decorative card grids without a user need.
- Use the supplied Glow Icons SVG collection consistently.

## Current tokens

| Role | Value | CSS token |
|---|---|---|
| Navy | `#0F172A` | `--color-navy` |
| Teal | `#0F766E` | `--color-teal` |
| Light teal | `#0D9488` | `--color-teal-light` |
| Gold | `#F59E0B` | `--color-gold` |
| Orange | `#EA580C` | `--color-orange` |
| Body text | `#334155` | `--color-slate` |
| Muted text | `#64748B` | `--color-muted` |
| Border | `#E2E8F0` | `--color-border` |
| Page background | `#F8FAFC` | `--color-bg` |

## Type and layout

- Headings: Outfit, with a system sans-serif fallback.
- Body: Plus Jakarta Sans, with a system sans-serif fallback.
- Body text should remain at least `16px` where practical, with readable line spacing.
- Main content uses a centered container capped at `1240px`; adapt width and spacing for mobile.
- Use visible keyboard focus, semantic headings, descriptive image alternatives, and touch targets of at least `44px`.
- Respect `prefers-reduced-motion`; keep Framer Motion transitions brief and informational.

## Content and trust

- The project prompt identifies the school as St. Daniel Comboni Secondary School in Juba, South Sudan.
- Confirm addresses, phone numbers, email addresses, people, dates, statistics, programs, research, and social accounts with the school before publishing.
- Keep placeholders explicit and never present sample records or stock photos as verified school information.
- Student Portal is an external link only. Do not add student records, results, fees, attendance, or login functionality to this public site.

## Implementation notes

- Live tokens and component styles currently live in `frontend/src/App.css` and component stylesheets.
- `frontend/src/assets/design.css` is an older unused generated stylesheet; it does not define the active theme.
- The current admin route is a browser-local demo, not an authenticated CMS.
