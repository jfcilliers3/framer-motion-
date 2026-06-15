import { motion } from 'framer-motion'

export default function Location() {
  return (
    <section id="location" className="py-24 px-6" style={{ backgroundColor: '#F0EDE6' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs tracking-widest3 uppercase text-olive mb-4">
            ✦ &nbsp; Visit Us &nbsp; ✦
          </p>
          <h2 className="font-heading text-5xl font-light text-charcoal mb-4">Find Us</h2>
          <div className="w-12 h-px mx-auto" style={{ backgroundColor: '#6B7040' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <p className="font-body text-xs tracking-widest2 uppercase text-olive mb-3">Address</p>
              <p className="font-heading text-2xl text-charcoal font-light leading-relaxed">
                13 6th Avenue<br />Melkbosstrand<br />Western Cape
              </p>
            </div>

            <div>
              <p className="font-body text-xs tracking-widest2 uppercase text-olive mb-3">Contact</p>
              <a
                href="tel:+27836601386"
                className="font-body text-sm text-charcoal opacity-80 hover:text-olive transition-colors block mb-1"
              >
                083 660 1386
              </a>
              <a
                href="https://wa.me/27836601386"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-wide uppercase text-olive hover:underline"
              >
                Message on WhatsApp →
              </a>
            </div>

            <div>
              <p className="font-body text-xs tracking-widest2 uppercase text-olive mb-3">Hours</p>
              <div className="space-y-1">
                {[
                  ['Monday – Friday', '9:00 – 18:00'],
                  ['Saturday', '9:00 – 15:00'],
                  ['Sunday', 'By appointment'],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between font-body text-sm text-charcoal opacity-80">
                    <span>{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-body text-xs tracking-widest2 uppercase text-olive mb-3">Follow</p>
              <a
                href="https://instagram.com/glowbeauty_melkbosstrand"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-charcoal opacity-80 hover:text-olive transition-colors"
              >
                @glowbeauty_melkbosstrand
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden"
            style={{ border: '1px solid rgba(107,112,64,0.2)' }}
          >
            <iframe
              title="Glow Beauty location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.8!2d18.4428!3d-33.7249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc52d3b8b35f8d%3A0x0!2s13+6th+Ave%2C+Melkbosstrand%2C+7441!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
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
