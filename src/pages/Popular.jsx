import { ArrowUpRight, Dumbbell } from "lucide-react"
import { Link } from "react-router-dom"

const workouts=[
  {name:"Aquecimento ativo", category:"Preparação", image:"https://i.postimg.cc/dVJWPrVJ/ex-aquecimento.jpg",detail:"Ative o corpo e prepare-se para o movimento."},
  {name:"Treino de ombro", category:"Força", image:"https://i.postimg.cc/YC8dp0vY/ex-ombro.jpg",detail:"Movimentos com foco em estabilidade e controle."},
  {name:"Yoga", category:"Mobilidade", image:"https://i.postimg.cc/hjQsb0p1/ex-yoga.jpg",detail:"Respiração e mobilidade para equilibrar a rotina."},
  {name:"Treino de pernas", category:"Resistência", image:"https://i.postimg.cc/KYzJ4bTV/ex-pernas.jpg",detail:"Trabalhe força e consciência dos movimentos."},
]
export default function Popular() {
  return <section className="gym-section" aria-labelledby="workouts-title"><div className="gym-container">
    <div data-reveal className="mb-10"><p className="gym-eyebrow"><Dumbbell size={16}/> Inspiração para se mover</p><h2 id="workouts-title" className="gym-title mt-4">MOVIMENTO QUE <span className="text-orange-500">TRANSFORMA.</span></h2></div>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{workouts.map(t=><article data-reveal className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1c1e22]" key={t.name}>
      <div className="overflow-hidden"><img loading="lazy" src={t.image} alt={"Exemplo de "+t.name} className="gym-image h-60 w-full object-cover" /></div>
      <div className="p-5"><p className="mb-2 text-xs font-bold uppercase tracking-[.15em] text-orange-400">{t.category}</p><h3 className="text-xl font-bold">{t.name}</h3><p className="mt-3 min-h-14 text-sm leading-relaxed text-gray-400">{t.detail}</p><Link to="/services" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-orange-300">Ver modalidades <ArrowUpRight size={17}/></Link></div>
    </article>)}</div>
  </div></section>
}
