import { ArrowUpRight, Dumbbell } from "lucide-react"
import { Link } from "react-router-dom"

const services = [
  { title:"Musculação", image:"https://i.postimg.cc/FK9V84Gz/services-01.jpg", description:"Força, estabilidade e desenvolvimento muscular." },
  { title:"Yoga", image:"https://i.postimg.cc/rmHGDtTR/services-02.jpg", description:"Movimento, presença e equilíbrio no dia a dia." },
  { title:"Funcional", image:"https://i.postimg.cc/NLq14q5g/services-03.jpg", description:"Condicionamento e movimentos para a rotina." },
  { title:"Aeróbica", image:"https://i.postimg.cc/59ZGGXzt/services-04.jpg", description:"Ritmo, disposição e resistência em movimento." },
  { title:"Boxe", image:"https://i.postimg.cc/cLWzxPXy/services-05.jpg", description:"Coordenação, foco e intensidade a cada treino." },
  { title:"Cross training", image:"https://i.postimg.cc/YSqygg5d/services-06.jpg", description:"Desafios variados de força e condicionamento." },
  { title:"Muay Thai", image:"https://i.postimg.cc/5t7Kmy1b/services-07.jpg", description:"Técnica, disciplina e consciência corporal." },
  { title:"Zumba", image:"https://i.postimg.cc/k4LjkHBH/services-08.jpg", description:"Energia e diversão em aulas com música." },
]

export default function Services() {
  return <section className="gym-section bg-[#17191d]" aria-labelledby="services-heading">
    <div className="gym-container">
      <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end" data-reveal>
        <div><p className="gym-eyebrow"><Dumbbell size={16}/> Encontre seu ritmo</p><h2 className="gym-title mt-4" id="services-heading">ESCOLHA COMO <span className="text-orange-500">EVOLUIR.</span></h2></div>
        <p className="gym-text max-w-md">Explore modalidades diferentes e descubra a atividade que mais combina com a sua energia.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => <article data-reveal key={s.title} className="group gym-panel gym-shine relative isolate min-h-[340px] overflow-hidden">
          <img src={s.image} alt={"Aula de "+s.title} loading="lazy" className="gym-image absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b0c0f] via-[#0b0c0f]/55 to-[#0b0c0f]/15" aria-hidden="true"/>
          <div className="flex min-h-[340px] flex-col justify-end p-6">
            <span className="mb-3 text-xs font-bold tracking-[.23em] text-orange-400">{String(i+1).padStart(2,"0")}</span>
            <h3 className="text-2xl font-extrabold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">{s.description}</p>
            <Link to={"/contact?assunto="+encodeURIComponent("Informações sobre "+s.title)} className="mt-4 inline-flex items-center gap-2 self-start text-sm font-bold text-orange-300 hover:text-white" aria-label={"Consultar informações sobre "+s.title}>Saiba mais <ArrowUpRight size={16} aria-hidden="true"/></Link>
          </div>
        </article>)}
      </div>
      <p className="mt-6 text-xs text-gray-500">Modalidades apresentadas para fins demonstrativos; disponibilidade sujeita à confirmação.</p>
    </div>
  </section>
}
