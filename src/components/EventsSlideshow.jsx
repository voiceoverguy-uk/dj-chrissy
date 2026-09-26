import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const photos = [
  { src: '/images/recent-events/dj-chrissy-c-2.webp', alt: 'Guests dancing with glow sticks in front of the DJ booth' },
  { src: '/images/recent-events/dj-chrissy-c-9.webp', alt: 'DJ decks overlooking guests seated at a celebration venue' },
  { src: '/images/recent-events/dj-chrissy-c-3.webp', alt: 'Guests dancing beneath colourful lights at an indoor event' },
  { src: '/images/recent-events/dj-chrissy-c-5.webp', alt: 'DJ view of guests and colourful lights in a function room' },
  { src: '/images/recent-events/dj-chrissy-c-1.webp', alt: 'DJ sound system and lighting set up beside celebration balloons' },
  { src: '/images/recent-events/dj-chrissy-c-4.webp', alt: 'DJ decks illuminated by blue lights' },
  { src: '/images/recent-events/dj-chrissy-c-7.webp', alt: 'DJ Chrissy C performing under purple lights' },
  { src: '/images/recent-events/dj-chrissy-c-8.webp', alt: 'Crowd dancing outdoors behind a Pioneer DJ setup' },
  { src: '/images/recent-events/dj-chrissy-c-6.webp', alt: 'Crowd dancing with colourful glow sticks' },
  { src: '/images/recent-events/dj-chrissy-c-10.webp', alt: 'Decorated function room with DJ setup and pink balloon arch' },
  { src: '/images/recent-events/dj-chrissy-c-11.webp', alt: 'DJ Chrissy C performing in front of a colourful illuminated backdrop' },
  { src: '/images/recent-events/dj-chrissy-c-12.webp', alt: 'Guests dancing outdoors under string lights, viewed from the DJ decks' },
  { src: '/images/recent-events/dj-chrissy-c-13.webp', alt: 'Decorated function room with gold balloons and DJ equipment' },
  { src: '/images/recent-events/dj-chrissy-c-14.webp', alt: 'Decorated celebration tables and DJ setup in a function room' },
]

export default function EventsSlideshow() {
  const [index, setIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const photo = photos[index]

  const goTo = (direction) => {
    setIndex((current) => (current + direction + photos.length) % photos.length)
  }

  const handleTouchEnd = (event) => {
    if (touchStart === null) return
    const distanceX = event.changedTouches[0].clientX - touchStart.x
    const distanceY = event.changedTouches[0].clientY - touchStart.y
    if (Math.abs(distanceX) > 50 && Math.abs(distanceX) > Math.abs(distanceY)) {
      goTo(distanceX < 0 ? 1 : -1)
    }
    setTouchStart(null)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(event.key === 'ArrowRight' ? 1 : -1)
    }
  }

  return (
    <section className="py-20 md:py-24 px-6" aria-labelledby="wedding-photos-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[#D4A017] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Wedding Celebrations</p>
          <h2 id="wedding-photos-heading" className="font-display text-5xl md:text-7xl text-white mb-4">
            Wedding Moments
          </h2>
          <div className="gold-line mx-auto mb-6" />
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            A closer look at the celebrations, dancefloors and DJ setups from weddings with DJ Chrissy C.
          </p>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Wedding photos slideshow"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017]"
        >
          <div
            className="relative h-[300px] sm:h-[420px] md:h-[560px] bg-[#111] overflow-hidden select-none"
            onTouchStart={(event) => setTouchStart({
              x: event.touches[0].clientX,
              y: event.touches[0].clientY,
            })}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={() => setTouchStart(null)}
          >
            <img
              src={photo.src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-110"
              aria-hidden="true"
            />
            <img
              src={photo.src}
              alt={photo.alt}
              className="relative w-full h-full object-contain"
              loading="lazy"
              draggable="false"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10" />
          </div>

          <div className="flex items-center justify-between gap-4 mt-5">
            <button
              type="button"
              onClick={() => goTo(-1)}
              aria-label="Previous photo"
              className="flex items-center justify-center w-12 h-12 border border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-[#080808] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017] transition-colors"
            >
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <p className="text-white/60 text-xs sm:text-sm tracking-widest uppercase text-center" aria-live="polite" aria-atomic="true">
              Photo {index + 1} of {photos.length}
            </p>
            <button
              type="button"
              onClick={() => goTo(1)}
              aria-label="Next photo"
              className="flex items-center justify-center w-12 h-12 border border-[#D4A017] text-[#D4A017] hover:bg-[#D4A017] hover:text-[#080808] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A017] transition-colors"
            >
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
          <p className="text-center text-white/40 text-xs mt-4">Swipe on mobile or use the arrows to browse</p>
        </div>
      </div>
    </section>
  )
}