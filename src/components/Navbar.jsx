import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-heading text-2xl tracking-widest2 text-charcoal"
          style={{ letterSpacing: '0.15em' }}
        >
          GLOW BEAUTY
        </a>
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#about"
            className="font-body text-xs tracking-widest2 uppercase text-charcoal hover:text-olive transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="font-body text-xs tracking-widest2 uppercase text-charcoal hover:text-olive transition-colors"
          >
            Services
          </a>
          <a
            href="https://wa.me/27836601386"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest2 uppercase px-6 py-2 border border-olive text-olive hover:bg-olive hover:text-white transition-all"
          >
            Book Now
          </a>
        </div>
        {/* Mobile menu — simple links */}
        <div className="flex md:hidden items-center gap-4">
          <a
            href="#services"
            className="font-body text-xs tracking-widest2 uppercase text-charcoal"
          >
            Services
          </a>
          <a
            href="https://wa.me/27836601386"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest2 uppercase px-4 py-2 border border-olive text-olive"
          >
            Book
          </a>
        </div>
      </div>
    </nav>
  )
}
