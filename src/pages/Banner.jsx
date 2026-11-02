import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Banner() {
  return <section className="relative isolate overflow-hidden py-24 md:py-32">
    <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop')"}} aria-hidden="true"/>
    <div className="absolute inset-0 -z-10 bg-[#101113]/80" aria-hidden="true"/>
    <div className="gym-container text-center" data-reveal>
      <span className="gym-eyebrow justify-center">Uma nova experiência fitness</span>
      <h2 className="gym-title mx-auto mt-5 max-w-[900px] text-white">NÃO ESPERE PELA <span className="text-orange-500">PRÓXIMA SEGUNDA.</span></h2>
      <p className="mx-auto mt-5 max-w-xl text-gray-300">Transforme intenção em movimento. Conheça as modalidades e escolha por onde começar.</p>
      <Link to="/pricingPlan" className="gym-button mt-8">Quero conhecer os planos <ArrowUpRight size={18} aria-hidden="true" /></Link>
    </div>
  </section>
}
