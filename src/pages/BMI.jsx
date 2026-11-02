import { useState } from "react"
import { Dumbbell } from "lucide-react"

function categoryFor(bmi) {
  if (bmi < 18.5) return "Abaixo do peso"
  if (bmi < 25) return "Faixa considerada adequada"
  if (bmi < 30) return "Sobrepeso"
  if (bmi < 35) return "Obesidade grau I"
  if (bmi < 40) return "Obesidade grau II"
  return "Obesidade grau III"
}

export default function BMI() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")

  function calculate(event) {
    event.preventDefault()
    const kg = Number(weight)
    const cm = Number(height)
    if (!Number.isFinite(kg) || !Number.isFinite(cm) || kg < 1 || kg > 500 || cm < 50 || cm > 250) {
      setResult(null)
      setError("Informe peso entre 1 e 500 kg e altura entre 50 e 250 cm.")
      return
    }
    const bmi = kg / ((cm / 100) ** 2)
    setResult({ bmi: bmi.toFixed(2), category: categoryFor(bmi) })
    setError("")
  }

  return (
    <section aria-labelledby="bmi-title" className="px-4 py-12 sm:px-6 md:px-16 lg:px-24">
      <div className="mx-auto max-w-4xl rounded-xl bg-black/25 p-6 text-gray-100 sm:p-10">
        <h2 id="bmi-title" className="mb-6 flex items-center justify-center gap-2 text-xl font-semibold"><Dumbbell aria-hidden="true" className="text-orange-500" /> Calcule seu IMC</h2>
        <form onSubmit={calculate} noValidate className="grid gap-4 sm:grid-cols-3 sm:items-end">
          <div><label htmlFor="gym-weight" className="mb-2 block">Peso (kg)</label><input id="gym-weight" type="number" inputMode="decimal" min="1" max="500" step="0.1" required value={weight} onChange={e=>setWeight(e.target.value)} className="w-full rounded border border-gray-600 bg-[#171717] p-3 text-white focus:border-orange-400" /></div>
          <div><label htmlFor="gym-height" className="mb-2 block">Altura (cm)</label><input id="gym-height" type="number" inputMode="decimal" min="50" max="250" step="0.1" required value={height} onChange={e=>setHeight(e.target.value)} className="w-full rounded border border-gray-600 bg-[#171717] p-3 text-white focus:border-orange-400" /></div>
          <button type="submit" className="rounded bg-orange-600 px-4 py-3 font-semibold text-white hover:bg-orange-700">Calcular IMC</button>
        </form>
        <div role="status" aria-live="polite" className="mt-5">
          {error && <p className="text-red-300">{error}</p>}
          {result && <p className="text-orange-300">IMC: <strong>{result.bmi}</strong> — {result.category}</p>}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-gray-400">Estimativa educativa para adultos. O IMC não avalia composição corporal individual e não substitui orientação de um profissional de saúde.</p>
      </div>
    </section>
  )
}
