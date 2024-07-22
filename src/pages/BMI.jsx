import { Dumbbell } from "lucide-react"
import Label from "../components/Label/Label"
import Input from "../components/Form/input"
import SecondaryBtn from "../components/Button/SecondaryBtn"
import { useState } from "react"

const BMI = () => {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setMBI] = useState(null)
  const [category, setCategory] = useState("")
  const [displayWeight, setDisplayWeight] = useState("")
  const [displayHeight, setDisplayHeight] = useState("")

  
  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height) / 100;

    if (isNaN(weightValue) || isNaN(heightValue) || heightValue === 0) {
      alert("Por favor, insira valores válidos para peso e altura.");
      return;
    }

    const bmi = (weightValue / (heightValue * heightValue)).toFixed(2);
    setMBI(bmi)
    setCategory(getBMICategory(bmi))
    setDisplayWeight(weight)
    setDisplayHeight(height)
    clearInputs()
  }

  // limpa os inputs
  const clearInputs = () => {
    setWeight("");
    setHeight("");
  }

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return "Abaixo do peso";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Peso normal";
    } else if (bmi >= 25 && bmi < 30) {
      return "Sobrepeso";
    } else if (bmi >= 30 && bmi < 40) {
      return "Obesidade";
    } else {
      return "Obesidade Grave";
    }
  }

  return (
    <>
      <div className="w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <div className="w-full h-auto flex items-center justify-center flex-col">
          <h6 className="lg:text-lg md:text-lg sm:text-base text-base font-medium text-gray-200 flex items-center gap-x-2 bg-black/20 roumded-t-md py-2 px-4">
            <Dumbbell className="w-6 h-6 -rotate-45 text-orange-500" />
            Calcule seu IMC
          </h6>
          <div className="w-full h-auto flex items-end justify-center bg-black/20 rounded-md lg:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap">
            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
              <Label htmlfor="weight">Peso (kg)</Label>
              <Input
                id="weight"
                name="weight"
                type="number"
                step="0.01"
                placeholder="Digite seu peso"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2">
              <Label htmlfor="weight">Altura (cm)</Label>
              <Input
                id="height"
                name="height"
                type="number"
                step="0.1"
                placeholder="Digite sua altura"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="lg:w-[20%] md:w-[35%] sm:w-[50%] w-full h-auto p-2">
              <SecondaryBtn
                type="submit"
                className="w-full h-11 justify-center"
                onClick={calculateBMI}
              >
                Calcular o IMC
              </SecondaryBtn>
            </div>
          </div>
          {bmi !== null && (
            <div className="bg-black/20 rounded-b-md px-6 py-2.5">
              <p className="text-orange-600">
                Seu IMC:  <span className="font-bold">{bmi}</span>
              </p>
              <p className="text-orange-600">
                Categoria: <span className="font-bold">{category}</span>
              </p>
              <p className="text-orange-600">
                Peso: <span className="font-bold">{displayWeight} kg</span>
              </p>
              <p className="text-orange-600">
                Altura: <span className="font-bold">{displayHeight} cm</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default BMI
