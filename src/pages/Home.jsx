import Hero from "./Hero"
import Card from "./Card"
import About from "./About"
import Services from "./Services"
import Banner from "./Banner"
import BMI from "./BMI"
import Trainers from "./Trainers"
import Popular from "./Popular"
import PricingPlan from "./PricingPlan"

export default function Home() {
  return <div>
    <Hero />
    <Card />
    <About />
    <Services />
    <Banner />
    <Popular />
    <PricingPlan />
    <BMI />
    <Trainers />
  </div>
}
