import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { InstagramIcon, YoutubeIcon, WhatsAppIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src="/images/logo.png" alt="DJCC" className="h-12 w-auto mb-4" />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Wakefield's Feel-Good Party Specialist. Bringing the music, the atmosphere, and the full experience to every event.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xl text-[#D4A017] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/events', label: 'Events' },
                { to: '/contact', label: 'Book Now' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/50 hover:text-[#D4A017] transition-colors text-sm tracking-wide"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl text-[#D4A017] mb-5">Get In Touch</h4>
            <a
              href="mailto:bookings@djshakeywakey.co.uk"
              className="flex items-center gap-2 text-white/50 hover:text-[#D4A017] transition-colors text-sm mb-6"
            >
              <Mail size={16} />
              bookings@djshakeywakey.co.uk
            </a>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-white/50 hover:text-[#D4A017] hover:border-[#D4A017] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-white/50 hover:text-[#D4A017] hover:border-[#D4A017] transition-all"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-white/50 hover:text-[#D4A017] hover:border-[#D4A017] transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} DJ Chrissy G. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            djshakeywakey.co.uk
          </p>
        </div>
      </div>
    </footer>
  )
}
