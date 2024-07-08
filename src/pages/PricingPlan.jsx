import { CheckSquare, Dumbbell } from "lucide-react"
import PrimaryBtn from "../components/Button/PrimaryBtn"

const PricingPlan = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 ">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-6 h-6 -rotate-45 text-orange-500" />
          Nossos planos
        </h6>
        <div className="w-full h-auto flex justify-center gap-x-8 gap-y-8 mt-2 flex-wrap">
          {/* PLANO BASICO */}
          <div className="lg:w-[28%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/10 rounded-lg border-[6px] border-gray-600 hover:border-orange-600/40 hover:bg-orange-600/10 ease-out duration-700 cursor-pointer">
            <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5">
              Plano Básico
            </h2>
            <h1 className="lg:text-4xl md:text-5xl sm:text-4xl text-4xl text-orange-600 font-bold mb-3 tracking-wide">
              R$165.00{""}
              <span className="lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal">
                / mês
              </span>
            </h1>
            <hr className="border-gray-600/40 my-7" />
            <div className="w-full h-auto space-y-2 mb-8">
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Acesse a todas as aulas de ginástica
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Aulas de yoga ilimitadas
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Uso de armários
                </p>
              </div>
            </div>
            <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wide mb-3 uppercase">
              Selecione plano
            </PrimaryBtn>
          </div>
          {/* PLANO PREMIUM */}
          <div className="lg:w-[32%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-orange-600/ rounded-lg border-[6px] border-orange-600 ease-out duration-700 cursor-pointer relative">
            <div className="absolute -top-6 left-[50%] translate-x-[-50%] bg-orange-600 py-2 px-5 rounded-full text-base font-medium text-white">
              Recomendado
            </div>
            <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5">
              Plano Premium
            </h2>
            <h1 className="lg:text-4xl md:text-5xl sm:text-4xl text-4xl text-orange-600 font-bold mb-3 tracking-wide">
              R$200.00{""}
              <span className="lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal">
                / mês
              </span>
            </h1>
            <hr className="border-gray-600/40 my-7" />
            <div className="w-full h-auto space-y-2 mb-8">
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Acesse a todas as aulas de ginástica
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Aulas de yoga ilimitadas
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Uso de armários
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Acesso à piscina durante a semana
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Camiseta de ginástica grátis
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  20% de desconto em todos os produtos de ginástica
                </p>
              </div>
            </div>
            <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wide mb-3 uppercase">
              Selecione plano
            </PrimaryBtn>
          </div>
          {/* PLANO VIP */}
          <div className="lg:w-[28%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/10 rounded-lg border-[6px] border-gray-600 hover:border-orange-600/40 hover:bg-orange-600/10 ease-out duration-700 cursor-pointer">
            <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5">
              Plano VIP
            </h2>
            <h1 className="lg:text-4xl md:text-5xl sm:text-4xl text-4xl text-orange-600 font-bold mb-3 tracking-wide">
              R$365.00{""}
              <span className="lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium tracking-normal">
                / mês
              </span>
            </h1>
            <hr className="border-gray-600/40 my-7" />
            <div className="w-full h-auto space-y-2 mb-8">
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Acesse a todas as aulas de ginástica
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Aulas de yoga ilimitadas
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Uso de armários
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Acesso à piscina durante a semana
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Camiseta de ginástica grátis
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  30% de desconto em todos os produtos de ginástica
                </p>
              </div>
              <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className="w-4 h-4 text-orange-600" />
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                  Personal trainer 3 dias por semana
                </p>
              </div>
            </div>
            <PrimaryBtn className="w-full h-11 text-lg justify-center font-semibold tracking-wide mb-3 uppercase">
              Selecione plano
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </>
  )
}

export default PricingPlan
