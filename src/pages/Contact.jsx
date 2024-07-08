import { Dumbbell } from "lucide-react"
import Input from "../components/Form/input"
import TextArea from "../components/Form/TextArea"
import PrimaryBtn from "../components/Button/PrimaryBtn"


const Contact = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 ">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-6 h-6 -rotate-45 text-orange-500" />
          Pergunte sobre GYMs
        </h6>
        <div className="w-full h-auto flex items-center gap-x-8 lg:gap-y-8 md:gap-y-8 sm:gap-y-4 gap-y-4 flex-col lg:p-7 sm:p-4 p-3">
          <div className="w-full h-auto flex items-center lg:gap-x-8 md:gap-x-4 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-8 sm:gap-y-5 gap-y-4 lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap">
            <div className="lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto">
              <Input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Escreva seu nome completo"
                className="w-full h-12 px-4"
              />
            </div>
            <div className="lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto">
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Escreva seu e-mail"
                className="w-full h-12 px-4"
              />
            </div>
            <div className="lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto">
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Escreva o seu assunto"
                className="w-full h-12 px-4"
              />
            </div>
          </div>

          <TextArea
            id="message"
            name="message"
            placeholder="Escreva sua mensagem"
            className="w-full px-4"  
          />
          <PrimaryBtn className="lg:w-auto md:w-auto sm-[75%] w-full px-8 py-3 uppercase rounded-md">Enviar mensagem</PrimaryBtn>
        </div>
      </div>
    </>
  )
}

export default Contact
