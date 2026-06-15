import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6"
      style={{ backgroundColor: '#F0EDE6' }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-xs tracking-widest3 uppercase text-olive mb-4">
            ✦ &nbsp; About
          </p>
          <h2 className="font-heading text-5xl font-light text-charcoal mb-6 leading-tight">
            Meet Paige
          </h2>
          <div className="w-10 h-px mb-8" style={{ backgroundColor: '#6B7040' }} />
          <p className="font-body text-sm leading-relaxed text-charcoal opacity-80 mb-5">
            Paige Clemen is a dedicated beauty therapist based in the coastal village of Melkbosstrand, bringing expertise, warmth, and an artful eye to every treatment she delivers.
          </p>
          <p className="font-body text-sm leading-relaxed text-charcoal opacity-80 mb-5">
            With a passion for skin health and a commitment to results-driven care, Paige has built Glow Beauty as a sanctuary — a place where clients come not just for a treatment, but for an experience that leaves them feeling genuinely transformed.
          </p>
          <p className="font-body text-sm leading-relaxed text-charcoal opacity-80">
            Every appointment is tailored. Every detail is considered. Because when you leave feeling confident and glowing, that's the whole point.
          </p>
        </motion.div>

        {/* Right — decorative card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div
            className="relative w-full max-w-sm p-12 text-center"
            style={{
              border: '1px solid rgba(107,112,64,0.3)',
              backgroundColor: '#F9F6F2',
            }}
          >
            {/* Corner accents */}
            <span className="absolute top-3 left-3 text-olive opacity-40 text-lg">✦</span>
            <span className="absolute top-3 right-3 text-olive opacity-40 text-lg">✦</span>
            <span className="absolute bottom-3 left-3 text-olive opacity-40 text-lg">✦</span>
            <span className="absolute bottom-3 right-3 text-olive opacity-40 text-lg">✦</span>

            <p className="font-heading text-2xl italic text-olive mb-8 leading-relaxed">
              "Every client deserves to leave feeling like the best version of themselves."
            </p>
            <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#6B7040' }} />
            <div className="space-y-3">
              {['Precision', 'Passion', 'Glow'].map((val) => (
                <p
                  key={val}
                  className="font-body text-xs tracking-widest2 uppercase text-charcoal opacity-70"
                >
                  {val}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
