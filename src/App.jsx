import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import ProductsPage from './pages/ProductsPage'
import Platform from './pages/Platform'
import Ecosystem from './pages/Ecosystem'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-on-background">
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
