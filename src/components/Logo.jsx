import { motion } from 'framer-motion'

export default function Logo({ size = 'md', showText = true }) {
  const sizes = {
    sm: { icon: 28, font: 'text-lg' },
    md: { icon: 36, font: 'text-xl' },
    lg: { icon: 48, font: 'text-3xl' },
  }
  const s = sizes[size]

  return (
    <motion.div
      className="flex items-center gap-2 select-none"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {/* Icon mark — replace the SVG path to rebrand */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="10" fill="url(#logo-grad)" />
        <path
          d="M10 28V12h8c3.3 0 5.5 1.8 5.5 4.5 0 1.7-.9 3-2.4 3.7 1.8.6 3 2.2 3 4.1C24.1 27 21.7 28 18 28H10zm4-9.8h3.6c1.4 0 2.2-.7 2.2-1.9s-.8-1.9-2.2-1.9H14v3.8zm0 7h4c1.6 0 2.5-.8 2.5-2.1s-.9-2.1-2.5-2.1H14v4.2z"
          fill="white"
        />
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className={`${s.font} font-bold tracking-tight text-white`}>
          Build<span className="gradient-text">rr</span>
        </span>
      )}
    </motion.div>
  )
}
