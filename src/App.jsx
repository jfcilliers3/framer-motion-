import './index.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import BookNow from './sections/BookNow'
import Location from './sections/Location'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BookNow />
        <Location />
      </main>
      <Footer />
    </>
  )
}
