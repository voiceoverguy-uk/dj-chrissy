import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { CheckCircle, Headphones, Speaker, Zap, Camera, Lightbulb, Shield } from 'lucide-react'
import SEO from '../components/SEO'

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

const equipment = [
  { icon: Headphones, label: 'Pioneer DJ Equipment', desc: 'Trusted industry-standard Pioneer decks and mixers' },
  { icon: Speaker, label: 'Full Sound System', desc: 'Crystal-clear audio at any venue, any size' },
  { icon: Zap, label: 'Smoke Machine & FX', desc: 'Atmospheric effects that add energy to any room' },
  { icon: Lightbulb, label: 'Dynamic Lighting', desc: 'Strobes, moving heads - creating a true club vibe' },
  { icon: Camera, label: 'Insta360 Video', desc: 'Capturing the party from every angle' },
  { icon: Shield, label: 'Fully Insured', desc: 'Professionally presented and fully insured' },
]

const eventTypes = [
  'Weddings & Civil Ceremonies',
  'Birthday Parties & Private Celebrations',
  'Corporate Functions, Awards & Launch Nights',
  'Bars, Clubs & Boutique Venues',
  'Festivals, Charity Events & Community Shows',
]

const genres = [
  'Dance', 'Club', 'Trance', 'House', 'R&B', 'Soul', 'Old School', 'Motown',
  '60s', '70s', '80s', '90s', '00s', 'Anthems', 'Chart Hits',
]

export default function About() {
  return (
    <main>
      <SEO
        title="About DJ Chrissy C | Wakefield DJ for Hire | Feel-Good Party Specialist"
        description="Meet DJ Chrissy C — Wakefield's premier DJ for hire. Playing Dance, Club, House, R&B, Soul & Motown at weddings, parties and events across West Yorkshire."
      />
      <PageHero
        title="About Me"
        subtitle="DJ Chrissy C"
        bgImage="/images/dj-mixing.jpg"
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-4">The DJ</p>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
              DJ Chrissy C
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-white/70 leading-relaxed text-base mb-6">
              DJ Chrissy C is a versatile and dynamic DJ based in Wakefield, known for delivering high-energy sets with a polished, feel-good vibe. With a music catalogue spanning the 60s, 70s, 80s, 00s, 10s and today, Chrissy brings together classic hits and modern favourites to create unforgettable party atmospheres for all ages.
            </p>
            <p className="text-white/70 leading-relaxed text-base mb-6">
              Specialising in <span className="text-[#D4A017] font-semibold">Dance, Club, Trance, House, R&B, Soul, Old School and Motown</span>, Chrissy blends timeless grooves with floor-filling anthems, keeping crowds moving from the first track to the last.
            </p>
            <p className="text-white/70 leading-relaxed text-base mb-10">
              Professional, energetic and always fun - DJ Chrissy C brings the music, the atmosphere and the full experience, turning every event into a night to remember.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {genres.map((g) => (
                <span
                  key={g}
                  className="text-xs font-semibold tracking-wider uppercase px-3 py-1 border border-[#D4A017]/40 text-[#D4A017]/80"
                >
                  {g}
                </span>
              ))}
            </div>

            <Link to="/contact" className="btn-gold">
              Book Now
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="relative">
              <img
                src="/images/dj-arms-wide.jpg"
                alt="DJ Chrissy C at Home Before Dark"
                className="w-full object-cover object-top"
                style={{ height: '600px' }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-4">The Setup</p>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-4">Full Professional Kit</h2>
              <div className="gold-line mx-auto mb-6" />
              <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
                Every event comes with quality entertainment and a clean, stylish presentation. Everything set up safe, tidy, and tailored to suit your venue, theme, and atmosphere.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map(({ icon: Icon, label, desc }, i) => (
              <AnimatedSection key={label} delay={i * 80}>
                <div className="card-hover bg-[#111] border border-[#1e1e1e] p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border border-[#D4A017] flex items-center justify-center shrink-0 mt-1">
                      <Icon size={20} className="text-[#D4A017]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{label}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <img
                src="/images/about-me.jpg"
                alt="Home Before Dark club night"
                className="w-full object-cover"
                style={{ height: '500px' }}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Perfect For</p>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
              All Events &<br />Celebrations
            </h2>
            <div className="gold-line mb-8" />
            <p className="text-white/60 leading-relaxed text-base mb-8">
              Chrissy brings professional energy and fun to a wide range of occasions, with smart, tidy presentation and a deep love of music.
            </p>
            <ul className="space-y-4 mb-10">
              {eventTypes.map((type) => (
                <li key={type} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#D4A017] mt-0.5 shrink-0" />
                  <span className="text-white/70 text-sm">{type}</span>
                </li>
              ))}
            </ul>
            <div className="bg-[#111] border border-[#1e1e1e] p-6">
              <p className="text-[#D4A017] text-xs tracking-widest uppercase font-semibold mb-2">Bespoke Packages</p>
              <p className="text-white/60 text-sm leading-relaxed">
                Bespoke music packages available to match themes, special moments, first dances, corporate branding and more - ensuring every event has its own unique soundtrack.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
