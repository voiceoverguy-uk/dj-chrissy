import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { CalendarDays, Clock, MapPin } from 'lucide-react'

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

const events = [
  {
    title: 'Home Before Dark',
    subtitle: 'Halloween Party',
    date: '1st November 2025',
    time: '3pm till 8pm',
    venue: 'Home Over 30s Day Clubbing',
    description: 'The ultimate over-30s day clubbing experience. Dance anthems, club classics, 90s and 00s hits - hands in the air, smiles on faces.',
    image: '/images/hero-confetti.jpg',
    tag: 'Club Night',
  },
  {
    title: 'Home Before Dark',
    subtitle: 'Club Night',
    date: 'Regular Event',
    time: 'Evening',
    venue: 'Various Venues',
    description: 'The Home Before Dark night that gets the whole room going. Packed dancefloors, confetti cannons, glow sticks and memories that last a lifetime.',
    image: '/images/dj-arms-wide.jpg',
    tag: 'Club Night',
  },
  {
    title: 'NYE Countdown to 2026',
    subtitle: 'New Years Eve Party',
    date: '31st December 2025',
    time: '7pm Till Late',
    venue: 'Thornhill Cricket & Bowling Club',
    description: 'Two rooms of music - Members Bar with all your favourite hits through the decades, and the Function Room with dance anthems, club classics, 90s and 00s hits. Party games, drink offers and a chance to win £100 cash!',
    image: '/images/nye-party.jpg',
    tag: 'NYE Special',
  },
  {
    title: 'Wedding & Ceremony',
    subtitle: 'Bespoke DJ Service',
    date: 'Your Date',
    time: 'Your Time',
    venue: 'Your Venue',
    description: 'From the first dance to the last song of the night - a perfectly curated soundtrack for your most important day, tailored to you and your guests.',
    image: '/images/dance-floor.jpg',
    tag: 'Wedding',
  },
]

const allImages = [
  '/images/hero-confetti.jpg',
  '/images/crowd-phones.jpg',
  '/images/dj-arms-wide.jpg',
  '/images/dj-mixing.jpg',
  '/images/about-me.jpg',
  '/images/dance-floor.jpg',
]

export default function Events() {
  return (
    <main>
      <PageHero
        title="Events"
        subtitle="DJ Chrissy C"
        bgImage="/images/hero-confetti.jpg"
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Past & Upcoming</p>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-4">DJ Events</h2>
              <div className="gold-line mx-auto mb-6" />
              <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
                From intimate weddings to massive club nights - every event is crafted with precision, passion, and pure party energy.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event, i) => (
              <AnimatedSection key={event.title + event.date} delay={i * 100}>
                <div className="card-hover bg-[#111] border border-[#1e1e1e] overflow-hidden">
                  <div className="relative overflow-hidden" style={{ height: '280px' }}>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="image-overlay absolute inset-0" />
                    <span className="absolute top-4 right-4 bg-[#D4A017] text-[#080808] text-xs font-bold px-3 py-1 tracking-widest uppercase">
                      {event.tag}
                    </span>
                    <h3 className="absolute bottom-4 left-6 font-display text-3xl text-white">
                      {event.title}
                    </h3>
                  </div>

                  <div className="p-6">
                    <p className="text-[#D4A017] text-xs tracking-widest uppercase font-semibold mb-3">
                      {event.subtitle}
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed mb-5">
                      {event.description}
                    </p>
                    <div className="flex flex-col gap-2 pt-4 border-t border-[#1e1e1e]">
                      <div className="flex items-center gap-2 text-white/40 text-xs">
                        <CalendarDays size={13} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/40 text-xs">
                        <Clock size={13} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/40 text-xs">
                        <MapPin size={13} />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Photos</p>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-4">Gallery</h2>
              <div className="gold-line mx-auto mb-6" />
              <p className="text-white/50 max-w-2xl mx-auto text-sm leading-relaxed">
                Step into the world of DJ Chrissy C - capturing the energy, fun, and professionalism that define every event. From pulsing dancefloors to behind-the-scenes shots at the DJ booth.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {allImages.map((src, i) => (
              <AnimatedSection key={src} delay={i * 80}>
                <div
                  className="relative overflow-hidden group"
                  style={{ paddingBottom: i % 3 === 1 ? '130%' : '80%' }}
                >
                  <img
                    src={src}
                    alt={`Event photo ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#D4A017]/0 group-hover:bg-[#D4A017]/10 transition-all duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/crowd-phones.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#080808]/80" />
        <AnimatedSection>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Your Event Next</p>
            <h2 className="font-display text-5xl md:text-7xl text-white mb-6">
              Ready To Book?
            </h2>
            <div className="gold-line mx-auto mb-8" />
            <p className="text-white/60 text-base leading-relaxed mb-10">
              Get in touch and let's make your next event one to remember.
            </p>
            <Link to="/contact" className="btn-gold">
              Book DJ Chrissy C
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  )
}
