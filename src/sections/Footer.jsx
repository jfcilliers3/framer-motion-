import { motion } from 'framer-motion'
import Logo from '../components/Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
          <div className="max-w-xs">
            <Logo size="md" />
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              Building high-converting websites for South African businesses. Fast, affordable, and built to grow.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="text-white font-semibold mb-3">Navigate</div>
              {['How It Works', 'Our Story', 'Testimonials', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                  className="block text-slate-500 hover:text-white transition-colors py-0.5"
                >
                  {link}
                </a>
              ))}
            </div>

            <div>
              <div className="text-white font-semibold mb-3">Contact</div>
              <a href="tel:+27823393473" className="block text-slate-500 hover:text-white transition-colors py-0.5">082 339 3473</a>
              <a href="mailto:jfcilliers87@gmail.com" className="block text-slate-500 hover:text-white transition-colors py-0.5 break-all">jfcilliers87@gmail.com</a>
              <a href="https://instagram.com/jfcilliers3" target="_blank" rel="noopener noreferrer" className="block text-slate-500 hover:text-white transition-colors py-0.5">@jfcilliers3</a>
            </div>

            <div>
              <div className="text-white font-semibold mb-3">Get Started</div>
              <motion.a
                href="#contact"
                className="inline-flex px-4 py-2 rounded-full bg-brand-600 text-white text-xs font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Free Quote →
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-2 justify-between items-center text-slate-600 text-xs">
          <span>© {new Date().getFullYear()} Buildrr. All rights reserved.</span>
          <span>🇿🇦 Proudly South African</span>
        </div>
      </div>
    </footer>
  )
}
