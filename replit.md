# DJ Chrissy C Website

A modern, premium DJ website for DJ Chrissy C (djshakeywakey.co.uk) — built with React + Vite.

## Stack

- **React 18.3.1** with React Router v7 for multi-page routing
- **Vite 6** for fast dev server and builds (using @vitejs/plugin-react-swc)
- **Tailwind CSS v4** (via @tailwindcss/vite plugin) for styling
- **Lucide React** for icons
- Custom inline SVG for social icons (Instagram, YouTube, WhatsApp)

## Pages

- `/` — Home: Full-screen hero, about teaser, services grid, image gallery, CTA section
- `/about` — About: Bio, equipment list, event types, genre tags
- `/events` — Events: Event cards, photo gallery, booking CTA
- `/contact` — Contact: Enquiry form with DJ package selection, contact info

## Design

- Dark theme: `#080808` background
- Gold/orange accent: `#D4A017` (gold), `#E8760A` (orange)
- Fonts: Bebas Neue (display/headings), Playfair Display (serif accents), Inter (body)
- Scroll-triggered fade-in animations via IntersectionObserver
- Parallax hero on homepage
- Transparent navbar that becomes solid on scroll
- Custom CSS animations (not Tailwind animate-* utilities) to prevent CSS regeneration loops

## Images

All images are stored in `/public/images/`:
- `logo.png` — DJCC logo
- `hero-confetti.jpg` — Home Before Dark confetti crowd (homepage hero)
- `crowd-phones.jpg` — B&W crowd with phone lights
- `dj-arms-wide.jpg` — DJ Chrissy G arms wide at Home Before Dark
- `dj-mixing.jpg` — DJ mixing on Pioneer decks
- `about-me.jpg` — Club night from DJ booth perspective
- `dance-floor.jpg` — Wedding dance floor setup
- `nye-party.jpg` — NYE 2026 party flyer

## Contact

- Email: bookings@djshakeywakey.co.uk
- DJ Packages: DJ Only / DJ + Decks & Speakers / Full Package (decks, speakers, lights, smoke, lasers, Insta360)

## Email (Contact Form)

The contact form POSTs to `/api/contact`, handled by:
- **Dev**: Express server (`server.js`) on port 3001; Vite proxies `/api` to it
- **Production (Vercel)**: `api/contact.js` serverless function (auto-detected by Vercel)

Required environment secrets: `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`

The email includes all form fields: name, email (set as reply-to), venue, event date, event type, DJ package, and message.

## Technical Notes

- React 18 (not 19) is required — React 19's new `ReactSharedInternals.H` dispatcher is incompatible with Vite 6's dep pre-bundler in this environment
- `server.watch.ignored` excludes `.local/**` (Replit system files) to prevent constant page reloads
- `resolve.dedupe` ensures React is not duplicated across pre-bundled chunks
- Custom CSS animations defined in `index.css` instead of Tailwind `animate-*` utilities
- `concurrently` runs Vite + Express API server together in dev mode

## Running

```
npm run dev    # Starts Vite (port 5000) + API server (port 3001) together
npm run build  # Production build
```
