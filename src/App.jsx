import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
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
      <div className="min-h-screen w-full bg-[#171717]">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-orange-600 focus:p-3 focus:text-white">
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="main-content" className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricingPlan" element={<PricingPlan />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="*" element={<section className="mx-auto max-w-3xl px-5 py-24 text-center text-white"><h1 className="mb-5 text-4xl font-bold">Página não encontrada</h1><Link to="/" className="text-orange-400 underline">Voltar ao início</Link></section>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
export default App
