export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/60 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-cream/10 pb-10 mb-8">
          <div>
            <p className="font-heading text-2xl text-cream tracking-[0.15em] font-light mb-1">GLOW BEAUTY</p>
            <p className="text-xs text-cream/40">By Paige Clemen · Melkbosstrand</p>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-xs tracking-widest uppercase hover:text-cream transition-colors">About</a>
            <a href="#services" className="text-xs tracking-widest uppercase hover:text-cream transition-colors">Services</a>
            <a href="#book" className="text-xs tracking-widest uppercase hover:text-cream transition-colors">Book</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2025 Glow Beauty by Paige Clemen. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://instagram.com/glowbeauty_melkbosstrand" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
              @glowbeauty_melkbosstrand
            </a>
            <span>13 6th Avenue, Melkbosstrand</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
