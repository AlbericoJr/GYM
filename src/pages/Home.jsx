import About from "./About"
import Banner from "./Banner"
import BMI from "./BMI"
import Card from "./Card"
import Contact from "./Contact"
import Footer from "./Footer"
import Hero from "./Hero"
import Popular from "./Popular"
import PricingPlan from "./PricingPlan"
import Services from "./Services"
import Trainers from "./Trainers"


const Home = () => {
  return (
    <div className="w-full h-auto">
      <Hero/>
      <Card/>
      <About/>
      <BMI/>
      <Services/>
      <Banner/>
      <Trainers/>
      <Popular/>
      <PricingPlan/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
