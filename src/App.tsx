import Pricing from "./sections/Pricing"
import Companies from "./sections/Companies"
import Features from "./sections/Features"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Testimonials from "./sections/Testimonials"
import CallToAction from "./sections/CallToAction"
import Footer from "./sections/Footer"


function App() {
  

  return (
    
    <div className="min-h-screen bg-gray-900 text-gray-300 font-body antialiased">
      <Header/>
      <Hero/>
      <Companies/>
      <Features/>
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>
    
  )
}

export default App
