import { useState } from "react"
import { Activity, ArrowUpRight, Calculator, Dumbbell } from "lucide-react"
import { calculateBmi } from "../utils/bmi.mjs"
import { Link } from "react-router-dom"

export default function BMI() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    const next = calculateBmi(weight, height)
    if (!next) { setResult(null); setError("Informe peso entre 1 e 500 kg e altura entre 50 e 250 cm."); return }
    setError("")
    setResult(next)
  }
  return <section className="gym-section gym-glow bg-[#101113]" aria-labelledby="bmi-title"><div className="gym-container grid gap-10 lg:grid-cols-2 lg:gap-20">
    <div data-reveal><p className="gym-eyebrow"><Dumbbell size={16}/> Conheça suas medidas</p><h2 id="bmi-title" className="gym-title mt-5">COMECE PELO <span className="text-orange-500">AUTOCONHECIMENTO.</span></h2><p className="gym-text mt-6">O índice de massa corporal (IMC) é uma referência simples baseada em peso e altura. Experimente a calculadora para ter uma estimativa.</p><Link to="/services" className="gym-button gym-button-outline mt-8">Ver modalidades <ArrowUpRight size={17}/></Link></div>
    <div data-reveal className="gym-panel p-6 sm:p-9"><div className="mb-6 flex items-center gap-3"><span className="rounded-xl bg-orange-500/15 p-3 text-orange-400"><Calculator size={24}/></span><div><h3 className="text-xl font-extrabold">Calculadora de IMC</h3><p className="text-sm text-gray-400">Estimativa para adultos</p></div></div>
    <form noValidate onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-semibold">Peso (kg)<input required id="bmi-weight" type="number" step="0.1" inputMode="decimal" min="1" max="500" value={weight} onChange={e=>setWeight(e.target.value)} placeholder="Ex: 70" className="mt-2 w-full rounded-lg border border-white/15 bg-[#111214] p-3.5 text-white placeholder:text-gray-600"/></label>
      <label className="text-sm font-semibold">Altura (cm)<input required id="bmi-height" type="number" step="0.1" inputMode="decimal" min="50" max="250" value={height} onChange={e=>setHeight(e.target.value)} placeholder="Ex: 175" className="mt-2 w-full rounded-lg border border-white/15 bg-[#111214] p-3.5 text-white placeholder:text-gray-600"/></label>
      <button type="submit" className="gym-button sm:col-span-2"><Activity size={18}/> Calcular IMC</button>
    </form>
    <div className="mt-5" role="status" aria-live="polite">{error && <p className="text-sm text-red-300">{error}</p>}{result && <div className="flex flex-wrap items-center gap-5 rounded-xl border border-orange-500/25 bg-orange-500/10 p-5"><div><p className="text-xs uppercase tracking-wider text-gray-300">Seu IMC</p><p className="mt-1 text-4xl font-extrabold text-orange-300">{result.value.toLocaleString("pt-BR")}</p></div><div className="border-l border-white/15 pl-5"><p className="text-xs text-gray-300">Classificação</p><p className="mt-1 font-bold text-white">{result.category}</p></div></div>}</div>
    <p className="mt-5 text-xs leading-relaxed text-gray-400">O IMC não mede composição corporal e não deve ser usado isoladamente para avaliar saúde. Procure orientação profissional para interpretação individual.</p>
    </div>
  </div></section>
}
