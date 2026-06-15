export default function Footer() {
  return (
    <footer
      className="py-14 px-6 text-center"
      style={{ backgroundColor: '#2C2C2C' }}
    >
      <p
        className="font-heading text-2xl text-white mb-4"
        style={{ letterSpacing: '0.2em' }}
      >
        GLOW BEAUTY
      </p>
      <div className="w-8 h-px mx-auto mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
      <p className="font-body text-xs text-white opacity-50 mb-1 tracking-wide">
        13 6th Avenue, Melkbosstrand
      </p>
      <a
        href="tel:+27836601386"
        className="font-body text-xs text-white opacity-50 hover:opacity-80 transition-opacity tracking-wide block mb-1"
      >
        083 660 1386
      </a>
      <a
        href="https://instagram.com/glowbeauty_melkbosstrand"
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-xs text-white opacity-50 hover:opacity-80 transition-opacity tracking-wide"
      >
        @glowbeauty_melkbosstrand
      </a>
      <p className="font-body text-xs text-white opacity-25 mt-8 tracking-wide">
        © {new Date().getFullYear()} Glow Beauty by Paige Clemen. All rights reserved.
      </p>
    </footer>
  )
}
