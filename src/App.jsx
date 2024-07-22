import {Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import PricingPlan from "./pages/PricingPlan"
import Contact from "./pages/Contact"


function App() {

  return (
    <>
    <div className="w-full min-h-screen h-auto bg-[#171717]">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/pricingPlan" element={<PricingPlan/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App