import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.15 }
  })
}

const testimonials = [
  {
    quote: "Paige is an absolute artist. My skin has never looked better — the peel she recommended changed everything.",
    name: "Sarah M.",
    service: "Drama Queen Peel",
  },
  {
    quote: "I drive all the way from Cape Town just for Paige's nail work. Worth every kilometre.",
    name: "Kezia L.",
    service: "Long Lasting Gel",
  },
  {
    quote: "The most relaxing and results-driven facial I've ever had. I left genuinely glowing.",
    name: "Monique R.",
    service: "Fountain of Youth Facial",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-sage-light py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-4">✦ Client Love ✦</p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-charcoal">
            What They&apos;re <em>Saying</em>
          </h2>
          <div className="thin-line mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Nails photo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 border border-olive/25 translate-x-3 translate-y-3 pointer-events-none"></div>
            <img
              src="/images/nails.jpg"
              alt="Glow Beauty nail art by Paige"
              className="w-full h-[420px] md:h-[520px] object-cover border border-olive/15"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-cream/90 backdrop-blur-sm px-5 py-4 border border-olive/15">
              <p className="section-tag mb-1">✦ Intricate Hand-Drawn Art</p>
              <p className="font-heading text-lg text-charcoal font-light">Long Lasting Gel · Add On</p>
            </div>
          </motion.div>

          {/* Testimonial cards */}
          <div className="flex flex-col gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-cream border border-olive/15 p-8"
              >
                <span className="font-heading text-4xl text-olive/30 leading-none block mb-3">&ldquo;</span>
                <p className="font-heading text-xl font-light text-charcoal italic leading-relaxed mb-5">
                  {t.quote}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-charcoal font-semibold">{t.name}</p>
                    <p className="text-charcoal/40 text-xs mt-0.5">{t.service}</p>
                  </div>
                  <span className="text-olive text-lg">✦</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
