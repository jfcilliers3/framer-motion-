import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const testimonials = [
  {
    name: 'Thabo Mokoena',
    role: 'Owner, TM Electrical',
    avatar: 'T',
    color: 'from-orange-500 to-amber-400',
    stars: 5,
    quote:
      "I was sceptical at first but within a week of my site going live, my phone started ringing. I got 3 new jobs in the first two weeks just from Google searches. Best investment I ever made for my business.",
  },
  {
    name: 'Lerato Dlamini',
    role: 'Hair & Beauty Studio',
    avatar: 'L',
    color: 'from-pink-500 to-rose-400',
    stars: 5,
    quote:
      "JF made the whole process so easy. I just told him what I wanted, and he handled everything. My clients love the new website and my bookings have doubled since launch.",
  },
  {
    name: 'Christo van Wyk',
    role: 'Van Wyk Plumbing',
    avatar: 'C',
    color: 'from-blue-500 to-cyan-400',
    stars: 5,
    quote:
      "Professional, fast, and affordable. I had no idea a website could make such a difference. Customers actually call me saying they found me on Google. Never had that before.",
  },
  {
    name: 'Nomsa Khumalo',
    role: 'Catering & Events',
    avatar: 'N',
    color: 'from-purple-500 to-violet-400',
    stars: 5,
    quote:
      "Buildrr built my site in under a week. It looks amazing on phones — which is where most of my clients find me. I finally feel like a proper business.",
  },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-600/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Client Wins
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Real results from{' '}
            <span className="gradient-text">real businesses</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Don't take our word for it — hear from clients who were exactly where you are now.
          </p>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="group p-7 rounded-2xl border border-white/8 bg-dark-700/60 backdrop-blur-sm hover:border-brand-500/30 transition-all duration-300 h-full flex flex-col"
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              >
                <Stars count={t.stars} />

                <blockquote className="mt-4 text-slate-300 text-base leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>

                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-white/8">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust strip */}
        <FadeUp delay={0.2} className="mt-16">
          <div className="flex flex-wrap justify-center gap-8 items-center text-slate-600 text-sm">
            {['⭐ 5-star rated', '🇿🇦 South Africa based', '📞 Direct WhatsApp support', '🔒 Secure & fast hosting'].map(
              (item, i) => (
                <motion.span
                  key={i}
                  whileHover={{ color: '#818cf8', y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="cursor-default"
                >
                  {item}
                </motion.span>
              )
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
