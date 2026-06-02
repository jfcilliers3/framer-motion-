import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.5 2.18 2 2 0 012.48 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: 'Phone / WhatsApp',
    value: '082 339 3473',
    href: 'tel:+27823393473',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'jfcilliers87@gmail.com',
    href: 'mailto:jfcilliers87@gmail.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    label: 'Instagram',
    value: '@jfcilliers3',
    href: 'https://instagram.com/jfcilliers3',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const body = encodeURIComponent(
      `New enquiry from Buildrr website!\n\nName: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\n\nMessage: ${form.message}`
    )
    window.open(`mailto:jfcilliers87@gmail.com?subject=Website%20Enquiry%20-%20${encodeURIComponent(form.name)}&body=${body}`)
    setSent(true)
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <span className="inline-block text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let's build your{' '}
            <span className="gradient-text">online presence</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Fill in the form below or reach out directly. We respond within a few hours.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <FadeUp>
            <StaggerContainer className="flex flex-col gap-5">
              {contactItems.map((item, i) => (
                <StaggerItem key={i}>
                  <motion.a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-5 rounded-2xl border border-white/8 bg-dark-700/60 hover:border-brand-500/40 transition-colors group"
                    whileHover={{ x: 5, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-500/15 border border-brand-500/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-500/25 transition-colors flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-0.5">{item.label}</div>
                      <div className="text-white font-semibold">{item.value}</div>
                    </div>
                  </motion.a>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeUp delay={0.3} className="mt-8 p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💚</span>
                <div>
                  <div className="text-white font-semibold mb-1">Prefer WhatsApp?</div>
                  <p className="text-slate-400 text-sm mb-3">
                    Send a quick message to get a quote in minutes.
                  </p>
                  <motion.a
                    href="https://wa.me/27823393473"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-500 text-white text-sm font-semibold transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    Message on WhatsApp
                  </motion.a>
                </div>
              </div>
            </FadeUp>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.2}>
            {sent ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-10 rounded-2xl border border-brand-500/30 bg-brand-500/10 text-center"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-slate-400">We'll be in touch very soon. Talk soon!</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border border-white/8 bg-dark-700/60 backdrop-blur-sm flex flex-col gap-5"
              >
                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Smith', required: true },
                  { name: 'business', label: 'Business Name', type: 'text', placeholder: 'My Business', required: false },
                  { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', placeholder: '082 xxx xxxx', required: true },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-slate-400 text-sm font-medium mb-1.5">{field.label}</label>
                    <motion.input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full px-4 py-3 rounded-xl bg-dark-600/80 border border-white/8 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500/60 transition-colors text-sm"
                      whileFocus={{ borderColor: 'rgba(99,102,241,0.6)' }}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-1.5">What do you need?</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us a bit about your business and what you're looking for..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-600/80 border border-white/8 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500/60 transition-colors text-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-base transition-colors shadow-lg shadow-brand-900/40"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  Send My Enquiry →
                </motion.button>

                <p className="text-slate-600 text-xs text-center">
                  We'll respond within a few hours. No spam, ever.
                </p>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
