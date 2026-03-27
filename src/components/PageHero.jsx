export default function PageHero({ title, subtitle, bgImage }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ height: '50vh', minHeight: '380px' }}
    >
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="page-hero-overlay absolute inset-0" />
      <div className="relative z-10 text-center px-6">
        {subtitle && (
          <p className="text-[#D4A017] text-sm tracking-[0.3em] uppercase font-semibold mb-3">
            {subtitle}
          </p>
        )}
        <h1 className="font-display text-6xl md:text-8xl text-white">{title}</h1>
        <div className="gold-line mx-auto mt-5" />
      </div>
    </div>
  )
}
