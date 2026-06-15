import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.1 }
  })
}

function MenuItem({ name, price, description }) {
  return (
    <div className="py-4 border-b border-olive/10 last:border-0">
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-heading text-lg font-light text-charcoal">{name}</span>
        <span className="font-body text-sm text-olive font-medium whitespace-nowrap">{price}</span>
      </div>
      {description && <p className="text-charcoal/55 text-xs mt-1.5 leading-relaxed">{description}</p>}
    </div>
  )
}

function SubSection({ title, children }) {
  return (
    <div className="mb-10">
      <p className="section-tag text-olive italic mb-5">{title}</p>
      {children}
    </div>
  )
}

function ServiceSection({ id, tag, title, children, bg }) {
  return (
    <motion.div
      id={id}
      className={`py-16 px-6 md:px-12 ${bg || 'bg-cream'} scroll-mt-20`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto">
        <p className="section-tag mb-3">{tag}</p>
        <h3 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-6">{title}</h3>
        <div className="w-10 h-px bg-olive/40 mb-8"></div>
        {children}
      </div>
    </motion.div>
  )
}

const categories = [
  { id: 'facials', icon: '✦', label: 'Facials', desc: 'Peels, Dermaplane & more' },
  { id: 'wax', icon: '✧', label: 'Wax', desc: 'Face & body waxing' },
  { id: 'tints', icon: '✦', label: 'Tints', desc: 'Brow & lash tinting' },
  { id: 'nails', icon: '✧', label: 'Nails', desc: 'Gel nails & add-ons' },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream">
      {/* Section header */}
      <div className="py-20 px-6 text-center bg-sage-light">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="section-tag mb-4">✦ Treatment Menu ✦</p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-charcoal mb-6">
            Our <em>Services</em>
          </h2>
          <div className="thin-line"></div>
          <p className="text-charcoal/55 text-sm max-w-lg mx-auto mt-6">
            Thoughtfully curated treatments designed to nourish, refine, and reveal your natural radiance.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-14">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href={`#${cat.id}`}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-cream border border-olive/20 p-6 hover:border-olive hover:shadow-sm transition-all duration-300 group"
            >
              <span className="text-2xl text-olive block mb-3">{cat.icon}</span>
              <p className="font-heading text-xl font-light text-charcoal group-hover:text-olive transition-colors">{cat.label}</p>
              <p className="text-charcoal/40 text-xs mt-1">{cat.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* FACIALS */}
      <ServiceSection id="facials" tag="✦ Skin Treatments" title="Facials" bg="bg-cream">
        <SubSection title="Intensive Peels">
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
        </SubSection>

        <SubSection title="Gentle Peels">
          <MenuItem
            name="The Oil Slick Beta Oil Peel"
            price="R800"
            description="The deep cleanse — a blend of 5% lactic acid + 5% salicylic acid that says \"bye-bye to blocked pores and oily villains.\""
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
        </SubSection>

        <SubSection title="Dermaplane">
          <MenuItem
            name="Dermaplane"
            price="R450"
            description="Get ready to say goodbye to dullness and hello to a glow with the magical Dermaplane Facial!"
          />
          <ul className="mt-3 ml-4 space-y-1">
            {['Smooth Operator — removes dead skin cells', 'Bye-Bye Peach Fuzz', 'Silky Smoothness', 'Scar-Be-Gone'].map(item => (
              <li key={item} className="text-charcoal/50 text-xs flex gap-2 items-center">
                <span className="text-olive text-xs">✦</span>{item}
              </li>
            ))}
          </ul>
        </SubSection>

        <div className="mt-8 p-5 border border-olive/20 bg-sage-light/40">
          <p className="text-charcoal/60 text-xs italic text-center leading-relaxed">
            ✦ All treatments come with LED light therapy plus a soothing hydrating mask to wrap up your treatment. ✦
          </p>
        </div>
      </ServiceSection>

      {/* WAX */}
      <ServiceSection id="wax" tag="✧ Hair Removal" title="Wax" bg="bg-sage-light">
        <SubSection title="Face">
          <MenuItem name="Lip" price="R100" />
          <MenuItem name="Chin" price="R100" />
          <MenuItem name="Brow Shape" price="R110" />
          <MenuItem name="Brow + Lip" price="R190" />
          <MenuItem name="Lip + Chin" price="R190" />
          <MenuItem name="Brow + Lip + Chin" price="R250" />
          <MenuItem name="Nose" price="R100" />
        </SubSection>

        <SubSection title="Body">
          <MenuItem name="Underarm" price="R150" />
          <MenuItem name="Half Arm" price="R160" />
          <MenuItem name="Full Arm" price="R210" />
          <MenuItem name="Half Leg" price="R220" />
          <MenuItem name="Full Leg" price="R300" />
        </SubSection>
      </ServiceSection>

      {/* TINTS */}
      <ServiceSection id="tints" tag="✦ Colour & Definition" title="Tints" bg="bg-cream">
        <MenuItem name="Brow Tint" price="R100" />
        <MenuItem name="Lash Tint" price="R120" />
        <MenuItem name="Lash + Brow Tint" price="R200" />
        <MenuItem name="Brow Tint + Wax" price="R190" />
      </ServiceSection>

      {/* NAILS */}
      <ServiceSection id="nails" tag="✧ Senior Nail Tech" title="Nails" bg="bg-sage-light">
        <SubSection title="Long Lasting Gel">
          <MenuItem
            name="Basic Colour Set"
            price="R500"
            description="Includes soak off and hard layer."
          />
        </SubSection>

        <SubSection title="Add-Ons">
          <MenuItem name="Set with stickers (1–10)" price="R50" />
          <MenuItem name="Chrome Powder" price="R50" />
          <MenuItem name="French" price="R100" />
          <MenuItem name="Ombre" price="R100" />
          <MenuItem name="Intricate Hand-Drawn Art" price="R100" />
          <MenuItem name="Tips" price="R100" />
          <MenuItem name="Silk / Tip Repair" price="R20" />
          <MenuItem name="Soak Off with No-Reapplication & Mini Mani" price="R150" />
        </SubSection>

        <div className="mt-8 p-5 border border-olive/20 bg-cream">
          <p className="section-tag mb-3">Products Used</p>
          <p className="text-charcoal/55 text-xs leading-relaxed">
            Lola Lee base coat · Bio Sculpture hard layer · Kinetics top coat · Bio Sculpture Gel remover
          </p>
        </div>
      </ServiceSection>
    </section>
  )
}
