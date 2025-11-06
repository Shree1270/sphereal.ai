import Companies from "./sections/Companies"
import Features from "./sections/Features"
import Header from "./sections/Header"
import Hero from "./sections/Hero"


function App() {
  

  return (
    
    <div className="min-h-screen bg-gray-900 text-gray-300 font-body antialiased">
      <Header/>
      <Hero/>
      <Companies/>
      <Features/>
    </div>
    
  )
}

export default App
