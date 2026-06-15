import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

export default function Location() {
  return (
    <section id="location" className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-tag mb-4">✦ Visit Us</p>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-charcoal">
            Find <em>Us</em>
          </h2>
          <div className="thin-line mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="section-tag mb-3">Address</p>
              <p className="font-heading text-2xl font-light text-charcoal">13 6th Avenue</p>
              <p className="font-heading text-2xl font-light text-charcoal">Melkbosstrand</p>
              <p className="text-charcoal/50 text-sm mt-1">Western Cape, South Africa</p>
            </div>

            <div className="w-full h-px bg-olive/15"></div>

            <div>
              <p className="section-tag mb-3">Hours</p>
              <div className="space-y-2">
                {[
                  { day: 'Monday – Friday', hours: '9:00am – 6:00pm' },
                  { day: 'Saturday', hours: '9:00am – 3:00pm' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map(row => (
                  <div key={row.day} className="flex justify-between text-sm">
                    <span className="text-charcoal/60">{row.day}</span>
                    <span className="text-charcoal font-medium">{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-olive/15"></div>

            <div>
              <p className="section-tag mb-3">Contact</p>
              <a
                href="https://wa.me/27836601386"
                className="text-sm text-olive hover:text-olive-dark transition-colors"
              >
                WhatsApp Us →
              </a>
              <br />
              <a
                href="https://instagram.com/glowbeauty_melkbosstrand"
                className="text-sm text-olive hover:text-olive-dark transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                @glowbeauty_melkbosstrand →
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full h-80 md:h-96 overflow-hidden border border-olive/15"
          >
            <iframe
              title="Glow Beauty Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26485.27834254437!2d18.4273!3d-33.7259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc59b81d0a26bd%3A0x1f0c6b2f09b41b36!2sMelkbosstrand%2C%20Cape%20Town%2C%207441!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(20%) contrast(95%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
