import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{
        background: 'radial-gradient(ellipse at 60% 30%, #e8e4d9 0%, #F9F6F2 50%, #f0ede6 100%)',
      }}
    >
      {/* Decorative SVG botanical */}
      <svg className="absolute top-20 right-10 opacity-10 w-48 md:w-64" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 300 C100 300 20 200 20 100 C20 0 100 20 100 20 C100 20 180 0 180 100 C180 200 100 300 100 300Z" fill="#6B7040"/>
        <path d="M100 250 C100 250 40 170 40 90 C40 40 100 50 100 50" stroke="#6B7040" strokeWidth="1" fill="none"/>
        <path d="M100 250 C100 250 160 170 160 90 C160 40 100 50 100 50" stroke="#6B7040" strokeWidth="1" fill="none"/>
      </svg>
      <svg className="absolute bottom-20 left-10 opacity-10 w-32 md:w-48 rotate-180" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 300 C100 300 20 200 20 100 C20 0 100 20 100 20 C100 20 180 0 180 100 C180 200 100 300 100 300Z" fill="#6B7040"/>
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="max-w-3xl mx-auto"
      >
        <p className="section-tag mb-6">✦ Melkbosstrand · Est. 2024 ✦</p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-charcoal leading-tight mb-6">
          Where Beauty<br /><em>Meets Intention</em>
        </h1>
        <div className="thin-line !mx-auto mb-6"></div>
        <p className="font-body text-sm tracking-widest text-charcoal/60 uppercase mb-10">
          Skin · Nails · Wax · Tints
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/27000000000"
            className="bg-olive text-cream font-body text-xs tracking-widest uppercase px-10 py-4 hover:bg-olive-dark transition-colors duration-300"
          >
            Book Now
          </a>
          <a
            href="#services"
            className="border border-charcoal/30 text-charcoal font-body text-xs tracking-widest uppercase px-10 py-4 hover:border-olive hover:text-olive transition-colors duration-300"
          >
            View Services
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="section-tag">Scroll</span>
        <motion.div
          className="w-px h-12 bg-olive/40"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}
