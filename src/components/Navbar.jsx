import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl tracking-[0.15em] text-charcoal font-light">
          GLOW BEAUTY
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#about" className="section-tag hover:text-olive transition-colors">About</a>
          <a href="#services" className="section-tag hover:text-olive transition-colors">Services</a>
          <a href="#book" className="section-tag bg-olive text-cream px-5 py-2 hover:bg-olive-dark transition-colors">Book Now</a>
        </div>
        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`w-6 h-px bg-charcoal transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-px bg-charcoal transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-px bg-charcoal transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream px-6 py-6 flex flex-col gap-6 border-t border-sage-light">
          <a href="#about" className="section-tag" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" className="section-tag" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#book" className="section-tag bg-olive text-cream px-5 py-2 text-center" onClick={() => setMenuOpen(false)}>Book Now</a>
        </div>
      )}
    </nav>
  )
}
