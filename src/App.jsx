import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import ScrollManager from "./components/ScrollManager"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import PricingPlan from "./pages/PricingPlan"
import Contact from "./pages/Contact"
import Trainers from "./pages/Trainers"
import Footer from "./pages/Footer"

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-screen w-full bg-[#101113]">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-orange-600 focus:p-3 focus:text-white">Pular para o conteúdo</a>
        <Navbar />
        <main id="main-content" className="pt-[72px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricingPlan" element={<PricingPlan />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="*" element={<section className="gym-section gym-container min-h-[60vh] text-center"><p className="gym-eyebrow justify-center">Erro 404</p><h1 className="gym-title mt-5">PÁGINA NÃO ENCONTRADA.</h1><p className="gym-text mt-5">O endereço não existe ou mudou.</p><Link to="/" className="gym-button mt-8">Voltar ao início</Link></section>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
export default App
