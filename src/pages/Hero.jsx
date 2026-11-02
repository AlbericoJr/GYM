import { ArrowDownRight, ArrowUpRight, Dumbbell, MoveRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[670px] items-center overflow-hidden bg-[#101113] py-20 lg:min-h-[790px]">
      <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: "url('/Banner/Banner-01.avif')" }} aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101113] via-[#101113]/90 to-[#101113]/25" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#101113] via-transparent to-[#101113]/20" aria-hidden="true" />
      <div className="gym-container relative z-10">
        <div className="max-w-[760px]" data-reveal>
          <p className="gym-eyebrow mb-7"><Dumbbell size={17} aria-hidden="true" /> Eleve seu potencial</p>
          <h1 className="gym-title text-[clamp(3.5rem,9vw,8.5rem)] text-white">SEU LIMITE <br /><span className="text-orange-500">É O COMEÇO.</span></h1>
          <p className="mt-7 max-w-[570px] text-lg leading-relaxed text-gray-300">Treinos, energia e foco para evoluir todos os dias. Descubra uma experiência fitness feita para quem quer ir além.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/pricingPlan" className="gym-button">Explorar planos <MoveRight aria-hidden="true" size={18}/></Link>
            <Link to="/services" className="gym-button gym-button-outline">Conhecer modalidades <ArrowUpRight aria-hidden="true" size={18}/></Link>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[.2em] text-gray-400">
            <span className="h-px w-10 bg-orange-500" /> Movimento. Disciplina. Evolução.
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-8 right-8 hidden items-center gap-3 text-xs font-bold tracking-[.2em] text-gray-300 lg:flex">
        SCROLL TO EXPLORE <ArrowDownRight className="text-orange-400" size={22}/>
      </div>
    </section>
  )
}
