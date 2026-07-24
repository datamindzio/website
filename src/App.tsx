import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MarketingLayout from './components/MarketingLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import EnergyAtlas from './pages/EnergyAtlas'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/energyatlas" element={<EnergyAtlas />} />
      </Routes>
    </BrowserRouter>
  )
}
