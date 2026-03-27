# DJ Chrissy G Website

A modern, premium DJ website for DJ Chrissy G (djshakeywakey.co.uk) — built with React + Vite.

## Stack

- **React 19** with React Router v7 for multi-page routing
- **Vite** for fast dev server and builds
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

## Running

```
npm run dev    # Development server on port 5000
npm run build  # Production build
```
