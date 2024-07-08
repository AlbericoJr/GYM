import { Dumbbell } from "lucide-react"
import SecondaryBtn from "../components/Button/SecondaryBtn"

const About = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse">
        <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
          <img
            src="http://localhost:5173/public/Sobre/sobre-01.avif"
            alt="imagem de uma mulher organizando o equiamento para fazer exercicios"
            className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover"
          />
        </div>

        <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center">
          <h6 className="text-lg font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3">
            <Dumbbell className="w-6 h-6 -rotate-45 text-orange-500" />
            Sobre nós
          </h6>
          <h1 className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
            Força sem esforço, ganhos oportunos: construindo corpos melhores e
            mais rápido
          </h1>
          <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-300 font-medium mb-4">
            Bem-vindo à GYM, onde seu bem-estar é nossa prioridade!
          </p>
          <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-300 font-medium mb-4">
            Nossa missão é transformar vidas através do exercícios, proporcionando um ambiente inclusivo e motivador para todos, desde iniciantes até atletas
            experientes.
          </p>
          <h2 className="lg:text-2xl md:text-2xl sm:text-xl text-xl font-semibold text-gray-300 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
            Nossos Valores
          </h2>
          <ul className="lg:text-base md:text-base sm:text-sm text-sm text-gray-300 font-medium mb-4 flex flex-col gap-y-4">
            <li>
              <strong>Dedicação:</strong> Suporte contínuo para alcançar seus
              objetivos.
            </li>
            <li>
              <strong>Inclusividade:</strong> Aberto a todos os níveis de
              condicionamento físico.
            </li>
            <li>
              <strong>Excelência:</strong> Serviços de alta qualidade com
              profissionais capacitados.
            </li>
          </ul>
          <h2 className="lg:text-2xl md:text-2xl sm:text-xl text-xl font-semibold text-gray-300 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
            Junte-se a Nós
          </h2>
          <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-300 font-medium mb-8">
            Independentemente de sua meta, seja perder peso, ganhar músculo, ou
            adotar um estilo de vida saudável. A GYM está aqui para ajudar.
            Visite-nos e descubra como podemos apoiar seu caminho para uma vida melhor.
          </p>
          <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-300 font-medium mb-8">
            Visite-nos e descubra como podemos apoiar seu caminho para uma vida melhor.
          </p>
          <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center">Torne-se um membro</SecondaryBtn>
        </div>
      </div>
    </>
  )
}

export default About
