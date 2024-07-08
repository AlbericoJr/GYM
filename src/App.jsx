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


// github rotas: https://gist.github.com/gtech-official08/0a0ffac779d3340674c768071a312859
// https://youtu.be/jZXp76rPF84?si=1oiedm0H15T1pKXz
// 52:50