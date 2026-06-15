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

        {/* Right: decorative card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-sm">
            {/* Offset border */}
            <div className="absolute inset-0 border border-olive/30 translate-x-4 translate-y-4"></div>
            <div className="relative bg-cream p-10 border border-olive/20">
              <p className="section-tag mb-6 text-center">✦ The Glow Standard ✦</p>
              <blockquote className="font-heading text-2xl italic text-charcoal/80 text-center leading-relaxed mb-8">
                "Every client deserves to leave feeling radiant — inside and out."
              </blockquote>
              <div className="w-8 h-px bg-olive/40 mx-auto mb-8"></div>
              <ul className="space-y-4">
                {[
                  { label: 'Precision', desc: 'Meticulous technique in every treatment' },
                  { label: 'Passion', desc: 'Genuine love for the art of beauty' },
                  { label: 'Personalisation', desc: 'Every client, every skin — unique' },
                  { label: 'Glow', desc: 'Results you can feel and see' },
                ].map(item => (
                  <li key={item.label} className="flex gap-4 items-start">
                    <span className="text-olive mt-0.5">✦</span>
                    <div>
                      <span className="section-tag text-charcoal block mb-0.5">{item.label}</span>
                      <span className="text-charcoal/50 text-xs">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
