import { ArrowUpRight, Dumbbell } from "lucide-react"
import { Link } from "react-router-dom"

const trainers = [
  {name:"John Smith",role:"Treinamento de força",image:"https://i.postimg.cc/fyXHZvdR/trainers-01.avif"},
  {name:"Lilly Doe",role:"Ginástica e movimento",image:"https://i.postimg.cc/tRVvh9cG/trainers-02.avif"},
  {name:"Will Doe",role:"Condicionamento físico",image:"https://i.postimg.cc/QxG4mRL9/trainers-03.avif"},
  {name:"Ronaldo Reigns",role:"Modalidades de combate",image:"https://i.postimg.cc/7Y3BWmDB/trainers-04.jpg"},
]
export default function Trainers() {
  return <section className="gym-section bg-[#17191d]" aria-labelledby="trainers-title"><div className="gym-container">
    <div className="mb-11 flex flex-wrap items-end justify-between gap-6" data-reveal><div><p className="gym-eyebrow"><Dumbbell size={16}/> Nossa equipe</p><h2 id="trainers-title" className="gym-title mt-4">QUEM INSPIRA <span className="text-orange-500">SUA EVOLUÇÃO.</span></h2></div><Link to="/contact" className="gym-button gym-button-outline">Entre em contato <ArrowUpRight size={18}/></Link></div>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {trainers.map(t=><article key={t.name} data-reveal className="group gym-panel relative h-[385px] overflow-hidden">
        <img src={t.image} alt={"Retrato ilustrativo de "+t.name} loading="lazy" className="gym-image h-full w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-5 pb-6 pt-24"><h3 className="text-xl font-extrabold">{t.name}</h3><p className="mt-1 text-sm text-orange-300">{t.role}</p></div>
      </article>)}
    </div>
    <p className="mt-5 text-xs text-gray-500">Imagens, nomes e perfis demonstrativos. Não representam uma equipe verificada.</p>
  </div></section>
}
