import { motion } from 'framer-motion'
import { StaggerContainer, StaggerItem, FadeUp } from '../components/AnimatedSection'

const steps = [
  {
    number: '01',
    icon: '💬',
    title: 'Free Consultation',
    desc: 'We hop on a quick call or WhatsApp chat. You tell us about your business, your goals, and what you need. No pressure — just a conversation.',
  },
  {
    number: '02',
    icon: '🎨',
    title: 'We Design & Build',
    desc: 'Our team crafts a custom website tailored to your brand. You see a live preview within 3–5 days and can request changes until it\'s perfect.',
  },
  {
    number: '03',
    icon: '🚀',
    title: 'We Launch',
    desc: 'We handle all the technical setup — hosting, domain, security. Your site goes live and starts attracting customers immediately.',
  },
  {
    number: '04',
    icon: '📈',
    title: 'You Grow',
    desc: 'We don\'t disappear. We offer ongoing support, updates, and growth advice so your website keeps working hard for you.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-20">
          <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            From zero to live in{' '}
            <span className="gradient-text">7 days</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We've simplified everything so you can focus on your business while we handle your online presence.
          </p>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="relative group p-7 rounded-2xl border border-white/8 bg-dark-700/60 backdrop-blur-sm hover:border-brand-500/40 transition-all duration-300 h-full"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                {/* Step connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 w-full h-px bg-gradient-to-r from-brand-500/30 to-transparent translate-x-full -z-10" />
                )}

                <div className="mb-4">
                  <span className="text-3xl">{step.icon}</span>
                </div>

                <div className="text-brand-500/40 text-5xl font-black leading-none mb-3 select-none">
                  {step.number}
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>

                <motion.div
                  className="absolute inset-0 rounded-2xl bg-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA under steps */}
        <FadeUp className="mt-16 text-center">
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-bold transition-colors shadow-lg shadow-brand-900/40"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Start My Website Today →
          </motion.a>
        </FadeUp>
      </div>
    </section>
  )
}
