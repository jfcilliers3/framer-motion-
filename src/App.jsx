import './index.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import Story from './sections/Story'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Story />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
