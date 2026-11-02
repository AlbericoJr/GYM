import { Activity, ArrowUpRight, Dumbbell, HeartPulse, Trophy } from "lucide-react"

const values = [
  { icon: Dumbbell, title: "Treinos para todos", description: "Escolha atividades que combinam com sua rotina e objetivos." },
  { icon: HeartPulse, title: "Bem-estar em foco", description: "Uma abordagem que valoriza movimento e qualidade de vida." },
  { icon: Trophy, title: "Evolução contínua", description: "Pequenos avanços constroem resultados consistentes." },
  { icon: Activity, title: "Seu ritmo importa", description: "Do primeiro treino à próxima conquista, um passo por vez." },
]

export default function Card() {
  return <section className="border-y border-white/10 bg-[#191b1f] py-7" aria-label="Diferenciais GYM">
    <div className="gym-container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {values.map(({ icon: Icon, title, description }) => <article key={title} className="group flex items-start gap-3 rounded-xl p-4 transition-colors hover:bg-white/5">
        <span className="rounded-xl bg-orange-500/10 p-3 text-orange-400"><Icon aria-hidden="true" size={24}/></span>
        <div><h2 className="flex items-center gap-1 font-bold text-white">{title}<ArrowUpRight size={14} className="text-orange-400 opacity-0 transition-opacity group-hover:opacity-100"/></h2><p className="mt-1 text-xs leading-relaxed text-gray-400">{description}</p></div>
      </article>)}
    </div>
  </section>
}
