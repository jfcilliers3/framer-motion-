import { motion } from 'framer-motion'

const floatVariants = {
  animate: {
    y: [0, -16, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

const orb = (cx, cy, r, color, delay = 0) => (
  <motion.div
    className="absolute rounded-full blur-3xl opacity-25 pointer-events-none"
    style={{
      width: r * 2,
      height: r * 2,
      left: `calc(${cx} - ${r}px)`,
      top: `calc(${cy} - ${r}px)`,
      background: color,
    }}
    animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
    transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  />
)

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background orbs */}
      {orb('30%', '40%', 280, 'radial-gradient(circle, #6366f1, transparent)', 0)}
      {orb('75%', '60%', 220, 'radial-gradient(circle, #a855f7, transparent)', 1.5)}
      {orb('55%', '85%', 180, 'radial-gradient(circle, #ec4899, transparent)', 2.5)}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Now taking new clients — Limited spots available
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight mb-6"
        >
          Your Business Deserves<br />
          <span className="gradient-text">A Website That Sells</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We build stunning, high-converting websites for South African businesses.
          No tech jargon. No hidden fees. Just results.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg shadow-lg shadow-brand-900/50 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <motion.span
              className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%]"
              transition={{ duration: 0.5 }}
            />
            Get My Free Website Quote
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>

          <motion.a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 hover:border-white/30 text-white font-semibold text-lg transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            See How It Works
          </motion.a>
        </motion.div>

        {/* Social proof numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          {[
            { stat: '20+', label: 'Websites Launched' },
            { stat: '100%', label: 'Client Satisfaction' },
            { stat: '7 Days', label: 'Average Delivery' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="text-center"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-3xl font-black gradient-text">{item.stat}</div>
              <div className="text-slate-500 text-sm mt-1">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        variants={floatVariants}
        animate="animate"
      >
        <div className="flex flex-col items-center gap-1 text-slate-600">
          <span className="text-xs">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
