import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const highlights = [
  { icon: '📍', text: 'Started building websites for local SA businesses' },
  { icon: '💡', text: 'Noticed how many businesses had zero online presence' },
  { icon: '🤝', text: '20+ happy clients and counting' },
  { icon: '🌍', text: 'Now helping businesses across South Africa' },
]

export default function Story() {
  return (
    <section id="story" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: story text */}
          <div>
            <FadeUp>
              <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                I started selling websites because I saw a{' '}
                <span className="gradient-text">real problem</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                A few months ago, I was browsing through local businesses in my area — plumbers, hair salons, tutors, small restaurants — and I was shocked. So many of them had no website at all. Or worse, they had an outdated one from 2012 that looked broken on a phone.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                These are hard-working people with great services, losing customers every day simply because they can't be found online. I knew I could fix that. So I started reaching out, building websites, and the results spoke for themselves — clients were getting calls within days of going live.
              </p>
            </FadeUp>

            <FadeUp delay={0.35}>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                That's why I built <strong className="text-white">Buildrr</strong>. A done-for-you web design service specifically for businesses that need a serious online presence without the corporate price tag or the tech headache.
              </p>
            </FadeUp>

            <FadeUp delay={0.45}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  J
                </div>
                <div>
                  <div className="text-white font-semibold">JF Cilliers</div>
                  <div className="text-slate-500 text-sm">Founder, Buildrr</div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: highlights card */}
          <FadeUp delay={0.2}>
            <div className="relative">
              <div className="rounded-3xl border border-white/8 bg-dark-700/60 backdrop-blur-sm p-8">
                <h3 className="text-white font-bold text-xl mb-8">The journey so far</h3>

                <StaggerContainer className="flex flex-col gap-5">
                  {highlights.map((h, i) => (
                    <StaggerItem key={i}>
                      <motion.div
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/4 border border-white/5 hover:border-brand-500/30 transition-colors"
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <span className="text-2xl flex-shrink-0">{h.icon}</span>
                        <span className="text-slate-300 font-medium leading-snug">{h.text}</span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <div className="mt-8 pt-6 border-t border-white/8">
                  <p className="text-slate-500 text-sm italic">
                    "Every business deserves to be found. The internet shouldn't be a luxury — it's a necessity."
                  </p>
                </div>
              </div>

              {/* Decorative badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✓ 20+ Sites Live
              </motion.div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
