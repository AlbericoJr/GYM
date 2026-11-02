import { ArrowUpRight, BadgeCheck, Dumbbell, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export default function About() {
  return <section className="gym-section gym-glow" aria-labelledby="about-title">
    <div className="gym-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div className="relative" data-reveal>
        <div className="absolute -left-3 -top-3 h-36 w-36 rounded-tl-3xl border-l-2 border-t-2 border-orange-500/60" aria-hidden="true" />
        <img src="https://i.postimg.cc/d0pm1ywk/sobre-01.avif" alt="Pessoa preparando equipamentos para o treino" loading="lazy" className="relative h-[420px] w-full rounded-[1.4rem] object-cover shadow-2xl sm:h-[570px]" />
        <div className="gym-float absolute -bottom-5 right-4 flex max-w-[230px] gap-3 rounded-2xl border border-white/10 bg-[#1d1f23] p-4 shadow-xl sm:-right-5">
          <span className="rounded-xl bg-orange-500/15 p-2 text-orange-400"><Sparkles size={25} aria-hidden="true" /></span><div><p className="font-bold">Seu próximo nível</p><p className="mt-1 text-xs leading-relaxed text-gray-400">Começa com uma decisão.</p></div>
        </div>
      </div>
      <div data-reveal>
        <p className="gym-eyebrow"><Dumbbell size={17}/> Sobre a GYM</p>
        <h2 id="about-title" className="gym-title mt-5">MAIS QUE TREINO. <span className="text-orange-500">UM ESTILO DE VIDA.</span></h2>
        <p className="gym-text mt-7">Acreditamos que o movimento transforma a maneira como você se sente e encara seus desafios. Nosso conceito reúne disciplina, motivação e acolhimento em uma experiência fitness acessível.</p>
        <div className="mt-8 space-y-5">
          {[["Movimento com propósito","Cada atividade é uma oportunidade de evoluir."],["Ambiente acolhedor","Um espaço pensado para diferentes níveis de experiência."],["Consistência antes da perfeição","O melhor treino é aquele que você consegue manter."]].map(([title,desc])=><div key={title} className="flex gap-3"><BadgeCheck className="mt-1 shrink-0 text-orange-400" size={22}/><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm text-gray-400">{desc}</p></div></div>)}
        </div>
        <Link to="/contact" className="gym-button gym-button-outline mt-9">Fale com a GYM <ArrowUpRight size={18}/></Link>
      </div>
    </div>
  </section>
}
