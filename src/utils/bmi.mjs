export function calculateBmi(weightKg, heightCm) {
  const weight = Number(weightKg)
  const height = Number(heightCm)
  if (weightKg === "" || heightCm === "" || !Number.isFinite(weight) || !Number.isFinite(height) || weight < 1 || weight > 500 || height < 50 || height > 250) return null
  const value = weight / ((height / 100) ** 2)
  const category = value < 18.5 ? "Abaixo do peso" : value < 25 ? "Faixa considerada adequada" : value < 30 ? "Sobrepeso" : value < 35 ? "Obesidade grau I" : value < 40 ? "Obesidade grau II" : "Obesidade grau III"
  return {value: Number(value.toFixed(1)), category}
}
