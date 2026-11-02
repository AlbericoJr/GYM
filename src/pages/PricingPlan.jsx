import { useState } from "react"
import { ArrowRight, Check, Dumbbell, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

const plans = [
  { name:"Essencial", price:165, description:"O básico para criar uma rotina de movimento.", items:["Acesso às modalidades básicas","Aulas de yoga em grupo","Uso dos armários"] },
  { name:"Performance", price:200, popular:true, description:"Mais opções para explorar seu potencial.", items:["Todos os benefícios do Essencial","Acesso à piscina em dias disponíveis","Aulas e atividades complementares","Descontos demonstrativos em produtos"] },
  { name:"Elite", price:365, description:"Uma proposta de acompanhamento ampliado.", items:["Todos os benefícios do Performance","Acompanhamento personalizado demonstrativo","Atividades e horários diferenciados","Experiência premium"] },
]
const questions = [
  ["Posso testar antes de escolher?","Este site é uma demonstração de interface. Para uma academia real, políticas de visita e avaliação devem ser definidas pelo estabelecimento."],
  ["Os valores são reais?","Não. Todos os preços e benefícios são ilustrativos, apresentados para demonstrar a experiência de escolha de planos."],
  ["Consigo contratar pelo site?","Não há cobrança ou matrícula online integrada. Ao selecionar um plano, você será direcionado ao formulário demonstrativo de contato."],
]
export default function PricingPlan() {
  const [period, setPeriod] = useState("month")
  return <section className="gym-section gym-glow bg-[#101113]" aria-labelledby="plans-title">
    <div className="gym-container">
      <div className="mx-auto max-w-2xl text-center" data-reveal>
        <p className="gym-eyebrow justify-center"><Dumbbell size={16}/> Planos e possibilidades</p>
        <h2 id="plans-title" className="gym-title mt-5">SEU FOCO MERECE <span className="text-orange-500">UM PLANO.</span></h2>
        <p className="gym-text mt-5">Compare opções ilustrativas e encontre o caminho que combina com sua rotina.</p>
        <div className="mt-8 inline-flex rounded-xl border border-white/15 bg-[#222429] p-1" role="group" aria-label="Período de cobrança demonstrativo">
          <button type="button" aria-pressed={period==="month"} onClick={()=>setPeriod("month")} className={"rounded-lg px-5 py-2 text-sm font-bold transition-colors "+(period==="month"?"bg-orange-500 text-[#111]":"text-gray-300 hover:text-white")}>Mensal</button>
          <button type="button" aria-pressed={period==="year"} onClick={()=>setPeriod("year")} className={"rounded-lg px-5 py-2 text-sm font-bold transition-colors "+(period==="year"?"bg-orange-500 text-[#111]":"text-gray-300 hover:text-white")}>Anual <span className="text-xs">(−10%)</span></button>
        </div>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map(plan => <article data-reveal key={plan.name} className={"gym-panel relative flex flex-col p-7 sm:p-8 "+(plan.popular?"border-orange-500 shadow-[0_20px_80px_#f973161a]":"")}>
          {plan.popular && <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-orange-500 px-4 py-2 text-xs font-extrabold text-[#111]"><Sparkles size={14} aria-hidden="true" className="mr-1 inline" /> Mais procurado*</span>}
          <h3 className="text-2xl font-extrabold">{plan.name}</h3>
          <p className="mt-3 min-h-14 text-sm leading-relaxed text-gray-400">{plan.description}</p>
          <div className="my-7 border-b border-white/10 pb-7">
            <p className="text-4xl font-extrabold">{new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(plan.price*(period==="year"?.9:1))}<span className="ml-2 text-sm font-normal text-gray-400">/ mês</span></p>
            <p className="mt-2 text-xs text-gray-500">{period==="year"?"Valor mensal equivalente em plano anual ilustrativo":"Valor mensal ilustrativo"}</p>
          </div>
          <ul className="mb-9 flex-1 space-y-4">
            {plan.items.map(item=><li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-200"><Check aria-hidden="true" className="mt-0.5 shrink-0 text-orange-400" size={17}/>{item}</li>)}
          </ul>
          <Link to={"/contact?plano="+encodeURIComponent(plan.name)} className={plan.popular?"gym-button w-full":"gym-button gym-button-outline w-full"}>Tenho interesse <ArrowRight size={18} aria-hidden="true" /></Link>
        </article>)}
      </div>
      <p className="mt-5 text-center text-xs text-gray-500">* Destaque apenas demonstrativo. Valores, condições, descontos e serviços não representam oferta comercial real.</p>
      <div className="mx-auto mt-20 max-w-3xl" data-reveal>
        <p className="gym-eyebrow justify-center">Dúvidas comuns</p>
        <h3 className="mt-3 text-center text-3xl font-extrabold">Perguntas frequentes</h3>
        <div className="mt-7 space-y-3">{questions.map(([q,a])=><details key={q} className="gym-panel group p-5"><summary className="cursor-pointer list-none pr-3 font-semibold marker:hidden">{q}<span className="float-right text-orange-400 group-open:rotate-45">+</span></summary><p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-gray-400">{a}</p></details>)}</div>
      </div>
    </div>
  </section>
}
