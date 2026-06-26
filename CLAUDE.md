# Encountive site — project notes

## What this repo is
- The **live site is the standalone `index.html`** at the repo root (Encountive
  marketing page for nurse educators). It's a single self-contained file with
  inline CSS/JS and a base64 logo. Served as a static site (see `CNAME`),
  no build step needed for the live page.
- The React/Vite app under `src/` is an unused legacy "Medical Simulation
  Consulting" template. Edits to the live site go in root `index.html`, not `src/`.

## Contact
- Primary email: **melissa@encountive.com**

## Intake form → email (FormSubmit.co)
The intake form (`#intakeForm`) emails submissions to melissa@encountive.com
via **FormSubmit.co** (no backend; static-site friendly).

- **Random alias (hides the real email):** `https://formsubmit.co/el/zudoro`
  - Native form `action` (no-JS fallback): `https://formsubmit.co/el/zudoro`
  - AJAX/fetch endpoint (used by the JS handler): `https://formsubmit.co/ajax/el/zudoro`
  - Rule of thumb: any FormSubmit URL becomes its AJAX endpoint by inserting
    `ajax/` right after `formsubmit.co/`.
- The account is **already activated** (the alias was issued, which only happens
  after confirming the email), so submissions should deliver without further setup.
- Config in the form: `_subject`, `_template=table`, `_captcha=false`, plus a
  hidden `_honey` honeypot for spam.
- On failure the form shows an error message directing visitors to email
  melissa@encountive.com directly.
- Future option: add reCAPTCHA via FormSubmit's `_captcha`/site-key flow if spam appears.

## Conventions established for this site
- **No em dashes** anywhere (use commas/colons/periods instead).
- **No "synthetic data only" messaging.** Compliance is framed as **FERPA-aligned**,
  encrypted, and **WCAG 2.1 AA** (see footer "Privacy & compliance" column).
- Brand palette (CSS vars in `index.html`): navy `#1B3A5C`, teal `#2AA7A0`,
  turquoise `#3CC8B4`, emerald accent `#10b981`. Fonts: Outfit + JetBrains Mono.
- Imagery is **original inline SVG artwork** (hero improvement-loop/dashboard,
  analytics dashboard). The sandbox network policy blocks external image hosts,
  so prefer self-contained SVG over third-party image URLs.
