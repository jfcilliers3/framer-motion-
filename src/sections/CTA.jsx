import { motion } from 'framer-motion'
import { FadeUp } from '../components/AnimatedSection'

const reasons = [
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Live in 7 days or less.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'No hidden fees. Ever.' },
  { icon: '📱', title: 'Mobile-First', desc: '80% of traffic is mobile.' },
  { icon: '🔍', title: 'SEO Ready', desc: 'Show up on Google from day one.' },
  { icon: '🛠️', title: 'Ongoing Support', desc: 'We\'re here after launch too.' },
  { icon: '🎯', title: 'Built to Convert', desc: 'Designed to turn visitors into leads.' },
]

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Big glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-brand-600/15 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Why us grid */}
        <FadeUp className="text-center mb-16">
          <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Why Buildrr
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Everything you need,{' '}
            <span className="gradient-text">nothing you don't</span>
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {reasons.map((r, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <motion.div
                className="flex gap-4 items-start p-5 rounded-xl border border-white/8 bg-dark-700/40 hover:border-brand-500/40 transition-colors"
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="text-2xl flex-shrink-0">{r.icon}</span>
                <div>
                  <div className="text-white font-semibold mb-0.5">{r.title}</div>
                  <div className="text-slate-500 text-sm">{r.desc}</div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        {/* Main CTA box */}
        <FadeUp>
          <motion.div
            className="relative rounded-3xl overflow-hidden border border-brand-500/30 text-center p-12 md:p-20"
            style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.1) 50%, rgba(236,72,153,0.08) 100%)',
            }}
          >
            {/* Animated border shimmer */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-transparent"
              style={{
                background:
                  'linear-gradient(#0d0d14, #0d0d14) padding-box, linear-gradient(135deg, #6366f1, #a855f7, #ec4899) border-box',
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Spots filling up fast
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Ready to get more{' '}
                <span className="gradient-text">customers online?</span>
              </h2>

              <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
                Join 20+ South African businesses already growing with Buildrr. Your first consultation is completely free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg shadow-2xl shadow-brand-900/60"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  Get My Free Website Quote
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://wa.me/27823393473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-green-500/40 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-bold text-lg transition-colors"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.126 1.534 5.862L.057 23.704a.75.75 0 00.917.938l5.946-1.552A11.928 11.928 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-5.081-1.427l-.364-.218-3.529.921.938-3.432-.237-.374A9.699 9.699 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                  Chat on WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  )
}
