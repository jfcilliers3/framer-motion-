import { motion } from 'framer-motion'

export default function BookNow() {
  return (
    <section id="book" className="bg-olive py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <p className="font-body text-cream/60 text-xs tracking-widest uppercase mb-6">✦ Get In Touch ✦</p>
        <h2 className="font-heading text-5xl md:text-6xl font-light text-cream mb-6 leading-tight">
          Ready to <em>Glow?</em>
        </h2>
        <div className="w-12 h-px bg-cream/30 mx-auto mb-8"></div>
        <p className="text-cream/70 text-sm mb-12 leading-relaxed">
          Book your appointment with Paige today and step into a space designed for your wellbeing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/27836601386"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cream text-olive font-body text-xs tracking-widest uppercase px-10 py-4 hover:bg-sage-light transition-colors duration-300"
          >
            WhatsApp Paige
          </a>
          <a
            href="https://instagram.com/glowbeauty_melkbosstrand"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cream/40 text-cream font-body text-xs tracking-widest uppercase px-10 py-4 hover:border-cream hover:bg-cream/10 transition-colors duration-300"
          >
            Follow on Instagram
          </a>
        </div>
      </motion.div>
    </section>
  )
}
