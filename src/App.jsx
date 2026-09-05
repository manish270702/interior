import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import About from './pages/About'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modular-kitchen" element={<ServicePage type="kitchen" />} />
          <Route path="/wardrobes" element={<ServicePage type="wardrobe" />} />
          <Route path="/interiors" element={<ServicePage type="interior" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}