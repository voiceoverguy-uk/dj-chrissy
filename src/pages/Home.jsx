import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ChevronDown, Music, Users, Star, Zap } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useScrollAnimation()
  return (
    <div
      ref={ref}
      className={`fade-in-up ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const galleryImages = [
  { src: '/images/hero-confetti.jpg', alt: 'Home Before Dark — Confetti Celebration' },
  { src: '/images/crowd-phones.jpg', alt: 'Crowd at Home Before Dark' },
  { src: '/images/dj-arms-wide.jpg', alt: 'DJ Chrissy G at Home Before Dark' },
  { src: '/images/dj-mixing.jpg', alt: 'DJ Chrissy G on Pioneer decks' },
  { src: '/images/about-me.jpg', alt: 'Home Before Dark club night' },
  { src: '/images/dance-floor.jpg', alt: 'Wedding dance floor setup' },
]

const services = [
  { icon: Music, label: 'Club Nights', desc: 'Dance, House, Trance, R&B, Motown & Old School' },
  { icon: Users, label: 'Weddings', desc: 'From first dance to last track — unforgettable nights' },
  { icon: Star, label: 'Private Events', desc: 'Birthdays, corporates, charity events & more' },
  { icon: Zap, label: 'Full Production', desc: 'Pioneer decks, speakers, lighting & Insta360' },
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main>
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '100vh', minHeight: '700px' }}>
        <div
          ref={heroRef}
          className="absolute inset-0 bg-center bg-cover scale-110"
          style={{ backgroundImage: "url('/images/hero-confetti.jpg')" }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[#D4A017] text-xs md:text-sm tracking-[0.4em] uppercase font-semibold mb-6 text-pulse">
            Wakefield's Feel-Good Party Specialist
          </p>
          <h1 className="font-display text-7xl md:text-[9rem] lg:text-[11rem] leading-none text-white mb-6">
            DJ Chrissy G
          </h1>
          <div className="gold-line mx-auto mb-8" />
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Dance, Club, House, Trance, R&B, Soul, Old School & Motown.<br />
            Every performance crafted with precision, passion, and pure party energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold">
              Book DJ Chrissy G
            </Link>
            <Link to="/events" className="btn-outline-gold">
              View Events
            </Link>
          </div>
        </div>

        <a
          href="#about-teaser"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-[#D4A017] transition-colors"
          aria-label="Scroll down"
        >
          <span className="bounce-scroll block">
            <ChevronDown size={32} />
          </span>
        </a>
      </section>

      <section id="about-teaser" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-4">About</p>
            <h2 className="font-display text-5xl md:text-7xl text-white mb-6">
              The Soundtrack<br />To Your Night
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-white/60 leading-relaxed text-base mb-6">
              DJ Chrissy G is a versatile and dynamic DJ based in Wakefield, known for delivering high-energy sets with a polished, feel-good vibe. With a music catalogue spanning the 60s, 70s, 80s, 00s, 10s and today, Chrissy brings together classic hits and modern favourites to create unforgettable party atmospheres for all ages.
            </p>
            <p className="text-white/60 leading-relaxed text-base mb-10">
              Professional, tidy, and always fun — DJ Chrissy G delivers the ultimate soundtrack to your night, where great music meets good vibes, every single time.
            </p>
            <Link to="/about" className="btn-gold">
              Learn More
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="relative">
              <img
                src="/images/dj-arms-wide.jpg"
                alt="DJ Chrissy G at Home Before Dark"
                className="w-full object-cover"
                style={{ height: '560px', objectPosition: 'top' }}
              />
              <div className="absolute -bottom-6 -left-6 bg-[#D4A017] p-6 hidden md:block">
                <p className="font-display text-4xl text-[#080808]">20+</p>
                <p className="text-[#080808] text-xs font-bold tracking-widest uppercase">Years Experience</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-4">What We Do</p>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-4">Built For Every Event</h2>
              <div className="gold-line mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, label, desc }, i) => (
              <AnimatedSection key={label} delay={i * 100}>
                <div className="card-hover bg-[#111] border border-[#1e1e1e] p-8 text-center h-full">
                  <div className="w-14 h-14 rounded-full border border-[#D4A017] flex items-center justify-center mx-auto mb-6">
                    <Icon size={24} className="text-[#D4A017]" />
                  </div>
                  <h3 className="font-display text-2xl text-white mb-3">{label}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Gallery</p>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-4">Recent Events</h2>
              <div className="gold-line mx-auto" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={img.src} delay={i * 80}>
                <div
                  className="relative overflow-hidden group cursor-pointer"
                  style={{ paddingBottom: i === 2 ? '140%' : i === 0 ? '75%' : '100%' }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="image-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-semibold tracking-wide">{img.alt}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={200}>
            <div className="text-center mt-12">
              <Link to="/events" className="btn-outline-gold">
                View All Events
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/about-me.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#080808]/80" />
        <AnimatedSection>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Ready?</p>
            <h2 className="font-display text-5xl md:text-8xl text-white mb-6">
              Let's Make Your Night Unforgettable
            </h2>
            <div className="gold-line mx-auto mb-8" />
            <p className="text-white/60 text-base leading-relaxed mb-10">
              From weddings and birthday parties to club nights and corporate events — DJ Chrissy G brings the music, the atmosphere, and the full experience.
            </p>
            <Link to="/contact" className="btn-gold">
              Get In Touch
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
