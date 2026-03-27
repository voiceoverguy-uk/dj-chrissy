import { useState } from 'react'
import PageHero from '../components/PageHero'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Mail, CheckCircle } from 'lucide-react'
import { InstagramIcon, YoutubeIcon, WhatsAppIcon } from '../components/SocialIcons'

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

const packages = [
  {
    id: 'dj-only',
    label: 'DJ Only',
    desc: 'DJ only, no equipment - bring your own PA',
  },
  {
    id: 'dj-decks',
    label: 'DJ + Decks & Speakers',
    desc: 'Pioneer decks including speakers',
  },
  {
    id: 'full-package',
    label: 'Full Package',
    desc: 'DJ, Decks, Speakers, Lights, Smoke machine, Lasers, Insta360',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    venue: '',
    eventDate: '',
    eventType: '',
    message: '',
    djPackage: 'dj-decks',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <PageHero
        title="Contact"
        subtitle="Book DJ Chrissy G"
        bgImage="/images/dj-mixing.jpg"
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          <AnimatedSection className="lg:col-span-3">
            <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Get In Touch</p>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
              We're Ready,<br />Let's Talk.
            </h2>
            <div className="gold-line mb-10" />

            {submitted ? (
              <div className="bg-[#111] border border-[#D4A017]/40 p-10 text-center">
                <CheckCircle size={48} className="text-[#D4A017] mx-auto mb-4" />
                <h3 className="font-display text-3xl text-white mb-3">Message Sent!</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Thanks for getting in touch. DJ Chrissy G will be in contact with you soon to discuss your event.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/50 text-xs tracking-widest uppercase mb-2" htmlFor="name">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="w-full bg-[#111] border border-[#222] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#D4A017] transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs tracking-widest uppercase mb-2" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-[#111] border border-[#222] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#D4A017] transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs tracking-widest uppercase mb-2" htmlFor="venue">
                    Venue Location
                  </label>
                  <input
                    id="venue"
                    name="venue"
                    type="text"
                    value={form.venue}
                    onChange={handleChange}
                    placeholder="Venue name and location"
                    className="w-full bg-[#111] border border-[#222] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#D4A017] transition-colors placeholder:text-white/20"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/50 text-xs tracking-widest uppercase mb-2" htmlFor="eventDate">
                      Date of Event *
                    </label>
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      required
                      value={form.eventDate}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-[#222] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#D4A017] transition-colors"
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs tracking-widest uppercase mb-2" htmlFor="eventType">
                      Type of Event *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={form.eventType}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-[#222] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#D4A017] transition-colors"
                    >
                      <option value="">Select event type...</option>
                      <option value="wedding">Wedding & Civil Ceremony</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="corporate">Corporate Event / Awards Night</option>
                      <option value="club">Club Night / Bar</option>
                      <option value="charity">Charity / Festival</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs tracking-widest uppercase mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event, approximate guest numbers, music preferences..."
                    className="w-full bg-[#111] border border-[#222] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#D4A017] transition-colors resize-none placeholder:text-white/20"
                  />
                </div>

                <div>
                  <p className="text-white/50 text-xs tracking-widest uppercase mb-4 font-semibold">DJ Package Required</p>
                  <div className="space-y-3">
                    {packages.map((pkg) => (
                      <label
                        key={pkg.id}
                        className={`flex items-start gap-4 p-4 border cursor-pointer transition-colors ${
                          form.djPackage === pkg.id
                            ? 'border-[#D4A017] bg-[#D4A017]/5'
                            : 'border-[#1e1e1e] bg-[#111] hover:border-[#333]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="djPackage"
                          value={pkg.id}
                          checked={form.djPackage === pkg.id}
                          onChange={handleChange}
                          className="mt-0.5 accent-[#D4A017]"
                        />
                        <div>
                          <p className="text-white text-sm font-semibold">{pkg.label}</p>
                          <p className="text-white/40 text-xs mt-1">{pkg.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn-gold w-full text-center">
                  Send Message
                </button>
              </form>
            )}
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-2" delay={150}>
            <div className="space-y-8 lg:pt-24">
              <div>
                <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-6">Contact Info</p>
                <div className="space-y-4">
                  <a
                    href="mailto:bookings@djshakeywakey.co.uk"
                    className="flex items-center gap-3 text-white/60 hover:text-[#D4A017] transition-colors group"
                  >
                    <div className="w-10 h-10 border border-[#222] group-hover:border-[#D4A017] flex items-center justify-center transition-colors">
                      <Mail size={16} />
                    </div>
                    <span className="text-sm">bookings@djshakeywakey.co.uk</span>
                  </a>
                </div>
              </div>

              <div>
                <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border border-[#222] hover:border-[#D4A017] flex items-center justify-center text-white/50 hover:text-[#D4A017] transition-all"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={18} />
                  </a>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border border-[#222] hover:border-[#D4A017] flex items-center justify-center text-white/50 hover:text-[#D4A017] transition-all"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon size={18} />
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border border-[#222] hover:border-[#D4A017] flex items-center justify-center text-white/50 hover:text-[#D4A017] transition-all"
                    aria-label="YouTube"
                  >
                    <YoutubeIcon size={18} />
                  </a>
                </div>
              </div>

              <div className="bg-[#111] border border-[#1e1e1e] p-6">
                <p className="text-[#D4A017] text-xs tracking-widest uppercase font-semibold mb-4">What To Expect</p>
                <ul className="space-y-3">
                  {[
                    'Quick response within 24 hours',
                    'No obligation consultation',
                    'Bespoke music planning included',
                    'Fully insured & professionally presented',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/50 text-sm">
                      <CheckCircle size={14} className="text-[#D4A017] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden" style={{ height: '240px' }}>
                <img
                  src="/images/dj-arms-wide.jpg"
                  alt="DJ Chrissy G"
                  className="w-full h-full object-cover object-top"
                />
                <div className="image-overlay absolute inset-0" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
