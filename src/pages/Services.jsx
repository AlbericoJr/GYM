import { Dumbbell, MoveRight } from "lucide-react"
import TertiaryLink from "../components/LinkBtn/TertiaryLink"
import SecondaryLink from "../components/LinkBtn/SecondaryLink"



const Services = () => {
  const serviceData = [
    {
      id: 1,
      serviceImg: "https://i.postimg.cc/FK9V84Gz/services-01.jpg",
      title: "Musculação",
      desc: "Construa sua força e alcance seu potencial máximo com a musculação.",
      link: "#services",
    },
    {
      id: 2,
      serviceImg: "https://i.postimg.cc/rmHGDtTR/services-02.jpg",
      title: "Yoga",
      desc: "Encontre serenidade e força em cada movimento com a prática do Yoga.",
      link: "#services",
    },
    {
      id: 3,
      serviceImg: "https://i.postimg.cc/NLq14q5g/services-03.jpg",
      title: "Academia",
      desc: "Transforme seu corpo e mente na Academia GYM, onde cada treino é um passo para a sua melhor versão.",
      link: "#services",
    },
    {
      id: 4,
      serviceImg: "https://i.postimg.cc/59ZGGXzt/services-04.jpg",
      title: "Aeróbica",
      desc: "Revitalize seu corpo e mente com a energia contagiante da aeróbica.",
      link: "#services",
    },
    {
      id: 5,
      serviceImg: "https://i.postimg.cc/cLWzxPXy/services-05.jpg",
      title: "Boxe",
      desc: "Na GYM, cada soco, cada treino e cada gota de suor te levam um passo mais perto da vitória dentro e fora do ringue.",
      link: "#services",
    },
    {
      id: 6,
      serviceImg: "https://i.postimg.cc/YSqygg5d/services-06.jpg",
      title: "Crossfit",
      desc: "Supere seus limites e descubra sua força com o desafio do CrossFit.",
      link: "#services",
    },
    {
      id: 7,
      serviceImg: "https://i.postimg.cc/5t7Kmy1b/services-07.jpg",
      title: "Muay Thai",
      desc: "Encontre poder e disciplina em cada golpe com a arte do Muay Thai.",
      link: "#services",
    },
    {
      id: 8,
      serviceImg: "https://i.postimg.cc/k4LjkHBH/services-08.jpg",
      title: "Zumba",
      desc: "Queime calorias se divertindo ao ritmo contagiante da Zumba!",
      link: "#services",
    },
  ]

  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-20 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6 md:pt-9">
          <Dumbbell className="w-6 h-6 -rotate-45 text-orange-500" />
          Nossos serviços
        </h6>
        <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10 ">
          {serviceData.map((data) => (
          <div
          key={data.id}
            className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[58vh] md:h-[44vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500"
            style={{
              backgroundImage: `url(${data.serviceImg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full bg-black/70 absolute top-0 left-0 -z-10 "></div>
            <div className="w-full h-full flex items-center justify-center flex-col text-white p-4 z-50">
              <div className="w-14 h-14 rounded-full bg-orange-500/20 border-4 border-orange-600/80 flex items-center justify-center mb-5">
                <Dumbbell className="w-6 h-6 text-white"/>
              </div>
              <h1 className="text-xl text-gray-100 font-semibold text-center mb-4">
                {data.title}
              </h1>
              <p className="text-base text-gray-400 font-normal text-center mb-4">
                {data.desc}
              </p>
              <TertiaryLink link={data.link}>
                Consulte Mais informação
              <MoveRight className="w-6 h-6"/>
              </TertiaryLink>
            </div>
          </div>
          ))}
        </div>
        <SecondaryLink 
          link="/services" 
          className="lg:w-[25%] md:w-[50%] sm:w-[75%] w-[90%] justify-center"
        >
          Ver todos os serviços
          <MoveRight className="w-6 h-6"/>
        </SecondaryLink>
      </div>
    </>
  )
}

export default Services
