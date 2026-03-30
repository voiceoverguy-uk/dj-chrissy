import { useState, useEffect } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const faqs = [
  {
    question: 'How much does it cost to hire a DJ in Wakefield?',
    answer: 'DJ Chrissy C offers flexible pricing to suit your event and budget. Packages range from DJ only (you provide the PA) through to a full setup with Pioneer decks, speakers, lights, smoke machine, lasers and an Insta360 camera. Contact us for a personalised quote.',
  },
  {
    question: 'What areas does DJ Chrissy C cover?',
    answer: 'Based in Wakefield, DJ Chrissy C is available across the whole of West Yorkshire and beyond — including Leeds, Bradford, Huddersfield, Sheffield and surrounding areas. Get in touch to discuss your location.',
  },
  {
    question: 'What type of events does DJ Chrissy C perform at?',
    answer: 'Weddings and civil ceremonies, birthday parties of all ages, corporate events and awards nights, club nights and bar residencies, charity events, festivals, and private celebrations. No event is too big or too small.',
  },
  {
    question: 'What music genres does DJ Chrissy C play?',
    answer: 'Dance, Club, House, Trance, R&B, Soul, Old School and Motown — spanning the 60s right through to today\'s chart hits. Every set is tailored to suit you and your guests, with music planning included as standard.',
  },
  {
    question: 'How far in advance should I book a DJ in Wakefield?',
    answer: 'Popular dates — especially summer weekends, Christmas and New Year — fill up fast. We recommend booking at least 3 to 6 months ahead to secure your date. Contact us to check availability.',
  },
  {
    question: 'Is DJ Chrissy C fully insured?',
    answer: 'Yes — DJ Chrissy C is fully insured and professionally presented at every event. All equipment is PAT tested and venue-compliant.',
  },
  {
    question: 'Do I need to provide any equipment?',
    answer: 'Only if you choose the DJ Only package, where you supply your own PA system. All other packages include everything needed — Pioneer decks, speakers, and optionally full lighting and effects.',
  },
]

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  const ref = useScrollAnimation()
  return (
    <div
      ref={ref}
      className="fade-in-up border-b border-[#1e1e1e]"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-white text-sm md:text-base font-semibold group-hover:text-[#D4A017] transition-colors leading-snug">
          {faq.question}
        </span>
        <span className="shrink-0 w-7 h-7 border border-[#333] group-hover:border-[#D4A017] flex items-center justify-center transition-colors">
          {open
            ? <Minus size={14} className="text-[#D4A017]" />
            : <Plus size={14} className="text-white/60 group-hover:text-[#D4A017]" />}
        </span>
      </button>
      {open && (
        <p className="text-white/60 text-sm leading-relaxed pb-5 pr-10">
          {faq.answer}
        </p>
      )}
    </div>
  )
}

export default function FaqSection() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'faq-schema'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
    return () => {
      const el = document.getElementById('faq-schema')
      if (el) el.remove()
    }
  }, [])

  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Common Questions</p>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-4">FAQ</h2>
          <div className="gold-line mx-auto" />
        </div>
        <div className="border-t border-[#1e1e1e]">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
