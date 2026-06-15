import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

export default function About() {
  return (
    <section id="about" className="bg-sage-light py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="section-tag mb-4">✦ Our Story</p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-charcoal mb-6 leading-tight">
            Meet<br /><em>Paige</em>
          </h2>
          <div className="w-12 h-px bg-olive/50 mb-8"></div>
          <p className="text-charcoal/70 text-sm leading-relaxed mb-5">
            Paige Clemen is a passionate and dedicated beauty therapist based in the coastal village of Melkbosstrand. With a genuine love for her craft, she believes beauty is not just about appearance — it's about feeling truly seen, cared for, and confident in your own skin.
          </p>
          <p className="text-charcoal/70 text-sm leading-relaxed mb-5">
            Every treatment at Glow Beauty is personalised with intention. Whether you're coming in for a transformative chemical peel, a relaxing nail appointment, or a quick brow tint, Paige brings her full attention and expertise to every service she offers.
          </p>
          <p className="text-charcoal/70 text-sm leading-relaxed">
            Located steps from the sea, Glow Beauty is a quiet sanctuary where you can exhale, reset, and leave looking — and feeling — like the best version of yourself.
          </p>
        </motion.div>

        {/* Right: Paige's photo */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 border border-olive/30 translate-x-4 translate-y-4"></div>
            <div className="relative overflow-hidden border border-olive/20">
              <img
                src="/images/paige.jpg"
                alt="Paige Clemen — Glow Beauty"
                className="w-full h-[480px] object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent px-6 py-5">
                <p className="font-heading text-xl text-white font-light">Paige Clemen</p>
                <p className="text-white/70 text-xs tracking-widest uppercase mt-1">Beauty Therapist · Melkbosstrand</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
