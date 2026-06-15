import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
}

function SectionLabel({ children }) {
  return (
    <p className="font-body text-xs tracking-widest2 uppercase text-olive mb-3 italic">
      {children}
    </p>
  )
}

function MenuItem({ name, price, description, children }) {
  return (
    <div className="py-5 border-b border-charcoal border-opacity-10 last:border-0">
      <div className="flex justify-between items-baseline gap-4 mb-2">
        <span className="font-body text-xs tracking-widest uppercase font-semibold text-charcoal">
          {name}
        </span>
        {price && (
          <span className="font-heading text-lg text-olive shrink-0">{price}</span>
        )}
      </div>
      {description && (
        <p className="font-body text-sm leading-relaxed text-charcoal opacity-70">{description}</p>
      )}
      {children}
    </div>
  )
}

function PriceRow({ name, price }) {
  return (
    <div className="flex justify-between items-baseline py-2 border-b border-charcoal border-opacity-10 last:border-0">
      <span className="font-body text-sm text-charcoal opacity-80">{name}</span>
      <span className="font-body text-sm text-olive font-medium">{price}</span>
    </div>
  )
}

function ServiceBlock({ children, alt }) {
  return (
    <div
      className="rounded-none p-10 md:p-12"
      style={{ backgroundColor: alt ? '#F0EDE6' : '#F9F6F2' }}
    >
      {children}
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: '#F9F6F2' }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div {...fadeUp} className="text-center mb-20">
          <p className="font-body text-xs tracking-widest3 uppercase text-olive mb-4">
            ✦ &nbsp; What We Offer &nbsp; ✦
          </p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-charcoal mb-4">
            Our Services
          </h2>
          <div className="w-12 h-px mx-auto" style={{ backgroundColor: '#6B7040' }} />
        </motion.div>

        {/* ── FACIALS ── */}
        <motion.div {...fadeUp} className="mb-16">
          <div className="text-center mb-10">
            <h3 className="font-heading text-4xl font-light text-charcoal tracking-wide">
              ✦ Facials ✦
            </h3>
          </div>

          <ServiceBlock>
            <SectionLabel>Intensive Peels</SectionLabel>
            <MenuItem
              name="The Drama Queen Peel"
              price="R1 050"
              description="A 15% TCA for skin that needs a full-on reboot. Peel it, reveal it, serve it. Results so good, you won't need makeup."
            />
            <MenuItem
              name="The Fountain of Youth Facial"
              price="R900"
              description="A high-powered cocktail of 30% lactic acid, 5% salicylic acid and 50% glycolic acid. The definition of a triple threat."
            />
          </ServiceBlock>

          <ServiceBlock alt>
            <SectionLabel>Gentle Peels</SectionLabel>
            <MenuItem
              name="The Oil Slick Beta Oil Peel"
              price="R800"
              description='The deep cleanse — a blend of 5% lactic acid + 5% salicylic acid that says "bye-bye" to blocked pores and oily villains.'
            />
            <MenuItem
              name="The Sneaky Lunch Break 1 Layer 6% TCA Peel"
              price="R700"
              description="So quick and sneaky, your boss won't even notice you slipped out — but your skin will spill all your secrets."
            />
            <MenuItem
              name="The Glow-Up Express Peel"
              price="R800"
              description="The glycolic 35% is like a shot of espresso for tired skin. Ready to freshen your face fast!"
            />
          </ServiceBlock>

          <ServiceBlock>
            <SectionLabel>Dermaplane</SectionLabel>
            <div className="flex justify-between items-baseline gap-4 mb-4">
              <span className="font-body text-xs tracking-widest uppercase font-semibold text-charcoal">
                Dermaplane Facial
              </span>
              <span className="font-heading text-lg text-olive shrink-0">R450</span>
            </div>
            <p className="font-body text-sm leading-relaxed text-charcoal opacity-70 mb-5">
              Get ready to say goodbye to dullness and hello to a glow with the magical Dermaplane Facial.
            </p>
            <p className="font-body text-xs tracking-wide uppercase text-olive mb-3">
              Why you'll love it:
            </p>
            <ul className="space-y-2">
              {[
                ['Smooth Operator', 'This safe and pain-free procedure sends dead skin cells packing.'],
                ['Bye-Bye Peach Fuzz', 'Zaps away the soft facial hair that loves to collect dirt and oils, leaving you fresh and fabulous.'],
                ['Silky Smoothness', "Say hello to skin so smooth, you'll want to touch it all day."],
                ['Scar-Be-Gone', 'Wave goodbye to pesky acne scars and embrace a more radiant you.'],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3 font-body text-sm text-charcoal opacity-70">
                  <span className="text-olive shrink-0">·</span>
                  <span><strong className="font-semibold opacity-100">{title}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </ServiceBlock>

          {/* LED note */}
          <div className="mt-6 py-5 px-8 text-center" style={{ border: '1px solid rgba(107,112,64,0.25)' }}>
            <p className="font-body text-xs leading-relaxed text-charcoal opacity-70 italic">
              All treatments come with LED light therapy plus a soothing hydrating mask to wrap up your treatment.
            </p>
          </div>
        </motion.div>

        {/* ── WAX & TINTS ── */}
        <motion.div {...fadeUp} className="mb-16">
          <div className="text-center mb-10">
            <h3 className="font-heading text-4xl font-light text-charcoal tracking-wide">
              ✦ Wax &amp; Tints ✦
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-1">
            <ServiceBlock>
              <SectionLabel>Face Wax</SectionLabel>
              <PriceRow name="Lip" price="R100" />
              <PriceRow name="Chin" price="R100" />
              <PriceRow name="Brow Shape" price="R110" />
              <PriceRow name="Brow + Lip" price="R190" />
              <PriceRow name="Lip + Chin" price="R190" />
              <PriceRow name="Brow + Lip + Chin" price="R250" />
              <PriceRow name="Nose" price="R100" />
            </ServiceBlock>

            <ServiceBlock alt>
              <SectionLabel>Body Wax</SectionLabel>
              <PriceRow name="Underarm" price="R150" />
              <PriceRow name="Half Arm" price="R160" />
              <PriceRow name="Full Arm" price="R210" />
              <PriceRow name="Half Leg" price="R220" />
              <PriceRow name="Full Leg" price="R300" />
            </ServiceBlock>

            <ServiceBlock alt className="md:col-span-2">
              <SectionLabel>Tints</SectionLabel>
              <PriceRow name="Brow Tint" price="R100" />
              <PriceRow name="Lash Tint" price="R120" />
              <PriceRow name="Lash + Brow Tint" price="R200" />
              <PriceRow name="Brow Tint + Wax" price="R190" />
            </ServiceBlock>
          </div>
        </motion.div>

        {/* ── NAILS ── */}
        <motion.div {...fadeUp}>
          <div className="text-center mb-10">
            <h3 className="font-heading text-4xl font-light text-charcoal tracking-wide">
              ✦ Nails ✦
            </h3>
          </div>

          <ServiceBlock>
            <SectionLabel>Senior Nail Tech — Long Lasting Gel</SectionLabel>
            <div className="flex justify-between items-baseline gap-4 mb-1">
              <span className="font-body text-xs tracking-widest uppercase font-semibold text-charcoal">
                Basic Colour Set
              </span>
              <span className="font-heading text-lg text-olive shrink-0">R500</span>
            </div>
            <p className="font-body text-xs text-charcoal opacity-60 mb-6 italic">
              Includes soak off and hard layer
            </p>

            <SectionLabel>Add Ons</SectionLabel>
            <PriceRow name="Set with (1–10) stickers" price="R50" />
            <PriceRow name="Chrome powder" price="R50" />
            <PriceRow name="French" price="R100" />
            <PriceRow name="Ombré" price="R100" />
            <PriceRow name="Intricate hand-drawn art" price="R100" />
            <PriceRow name="Tips" price="R100" />
            <PriceRow name="Silk / Tip repair" price="R20" />
            <PriceRow name="Soak off with no-reapplication + mini mani" price="R150" />
          </ServiceBlock>

          <ServiceBlock alt>
            <p className="font-body text-xs tracking-wide uppercase text-olive mb-4">
              Products we use
            </p>
            <ul className="space-y-1">
              {[
                'Lola Lee base coat',
                'Bio Sculpture hard layer',
                'Kinetics top coat',
                'Bio Sculpture Gel remover',
              ].map((p) => (
                <li key={p} className="flex gap-3 font-body text-sm text-charcoal opacity-70">
                  <span className="text-olive">·</span> {p}
                </li>
              ))}
            </ul>
            <p className="font-body text-xs text-charcoal opacity-60 italic mt-4">
              We take pride in using non-damaging gel.
            </p>
          </ServiceBlock>
        </motion.div>
      </div>
    </section>
  )
}
