import { motion } from 'framer-motion'

export default function BookNow() {
  return (
    <section
      id="book"
      className="py-28 px-6 text-center"
      style={{ backgroundColor: '#6B7040' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto"
      >
        <p className="font-body text-xs tracking-widest3 uppercase text-white opacity-70 mb-5">
          ✦ &nbsp; Ready to Glow? &nbsp; ✦
        </p>
        <h2 className="font-heading text-5xl md:text-6xl font-light text-white mb-4 leading-tight">
          Book Your Appointment
        </h2>
        <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} />
        <p className="font-body text-sm leading-relaxed text-white opacity-80 mb-10">
          Book directly with Paige via WhatsApp or reach out on Instagram. We'd love to welcome you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/27836601386"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest2 uppercase px-10 py-4 bg-white text-olive hover:bg-cream transition-colors w-full sm:w-auto text-center"
          >
            WhatsApp Paige
          </a>
          <a
            href="https://instagram.com/glowbeauty_melkbosstrand"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest2 uppercase px-10 py-4 border border-white text-white hover:bg-white hover:text-olive transition-all w-full sm:w-auto text-center"
          >
            Instagram
          </a>
        </div>
        <p className="font-body text-xs text-white opacity-50 mt-8 tracking-wide">
          083 660 1386 &nbsp;·&nbsp; @glowbeauty_melkbosstrand
        </p>
      </motion.div>
    </section>
  )
}
