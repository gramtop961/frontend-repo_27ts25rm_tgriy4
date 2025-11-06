import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-indigo-950 to-fuchsia-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
