import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{
        background: 'linear-gradient(160deg, #F9F6F2 0%, #F0EDE6 50%, #EBE6DC 100%)',
      }}
    >
      {/* Decorative SVG botanical lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="400" cy="400" r="350" fill="none" stroke="#6B7040" strokeWidth="0.5" />
        <circle cx="400" cy="400" r="280" fill="none" stroke="#6B7040" strokeWidth="0.5" />
        <circle cx="400" cy="400" r="200" fill="none" stroke="#6B7040" strokeWidth="0.5" />
        <line x1="400" y1="50" x2="400" y2="750" stroke="#6B7040" strokeWidth="0.3" />
        <line x1="50" y1="400" x2="750" y2="400" stroke="#6B7040" strokeWidth="0.3" />
        <line x1="153" y1="153" x2="647" y2="647" stroke="#6B7040" strokeWidth="0.3" />
        <line x1="647" y1="153" x2="153" y2="647" stroke="#6B7040" strokeWidth="0.3" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <p className="font-body text-xs tracking-widest3 uppercase text-olive mb-8">
          ✦ &nbsp; Melkbosstrand, South Africa &nbsp; ✦
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-light text-charcoal leading-tight mb-6">
          Where Beauty<br />Meets Intention
        </h1>
        <div
          className="w-16 h-px mx-auto mb-6"
          style={{ backgroundColor: '#6B7040' }}
        />
        <p className="font-body text-sm tracking-widest2 uppercase text-charcoal opacity-70 mb-12">
          Skin &nbsp;·&nbsp; Nails &nbsp;·&nbsp; Wax &nbsp;·&nbsp; Tints
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/27836601386"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest2 uppercase px-10 py-4 bg-olive text-white hover:bg-charcoal transition-colors"
          >
            Book Now
          </a>
          <a
            href="#services"
            className="font-body text-xs tracking-widest2 uppercase px-10 py-4 border border-charcoal text-charcoal hover:border-olive hover:text-olive transition-colors"
          >
            View Services
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div
          className="w-px h-12 opacity-30"
          style={{ backgroundColor: '#6B7040' }}
        />
      </motion.div>
    </section>
  )
}
