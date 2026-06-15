import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import BookNow from './sections/BookNow'
import Location from './sections/Location'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BookNow />
      <Location />
      <Footer />
    </div>
  )
}

export default App
