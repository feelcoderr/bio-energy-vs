import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PlatformBenefits from './components/PlatformBenefits'
import ValueChain from './components/ValueChain'
import Products from './components/Products'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      <Navbar />
      <main>
        <Hero />
        <PlatformBenefits />
        <ValueChain />
        <Products />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
