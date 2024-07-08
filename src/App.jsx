import {BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"


function App() {

  return (
    <>
    <div className="w-full min-h-screen h-auto bg-[#171717]">
      <Router>
        <Navbar/>
        <Home/>
      </Router>
    </div>
    </>
  )
}

export default App