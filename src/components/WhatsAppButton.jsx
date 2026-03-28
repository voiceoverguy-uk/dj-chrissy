import { useState } from 'react'

const WHATSAPP_NUMBER = '447830291463'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'd like to enquire about booking DJ Chrissy C for my event.")

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <div
          className="fixed bottom-24 right-5 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ background: '#25D366' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <WhatsAppLogo size={22} color="white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">WhatsApp</p>
                <p className="text-white/80 text-xs">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Chat bubbles */}
          <div className="px-4 py-5 space-y-3" style={{ background: '#e5ddd5', backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' opacity='0.06'%3E%3C/svg%3E\")" }}>
            <ChatBubble text={<>Hi 👋, welcome to <strong>djshakeywakey.co.uk</strong></>} />
            <ChatBubble text="How can we help you?" delay />
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 text-white font-semibold text-sm transition-all hover:brightness-95"
            style={{ background: '#25D366' }}
          >
            Open Chat
            <WhatsAppLogo size={20} color="white" />
          </a>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
        style={{ background: '#25D366' }}
      >
        {open ? (
          <span className="text-white text-xl font-bold">✕</span>
        ) : (
          <WhatsAppLogo size={30} color="white" />
        )}
      </button>
    </>
  )
}

function ChatBubble({ text, delay = false }) {
  return (
    <div
      className="bg-white rounded-xl rounded-tl-none px-4 py-2 max-w-xs text-sm text-gray-800 shadow-sm"
      style={delay ? { animationDelay: '0.3s' } : {}}
    >
      {text}
    </div>
  )
}

function WhatsAppLogo({ size = 24, color = '#25D366' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.001 3C8.82 3 3 8.82 3 16.001c0 2.29.605 4.44 1.66 6.3L3 29l6.9-1.63A12.938 12.938 0 0016.001 29C23.18 29 29 23.18 29 16.001 29 8.82 23.18 3 16.001 3z"
        fill={color}
      />
      <path
        d="M22.5 19.6c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
        fill="white"
      />
    </svg>
  )
}
