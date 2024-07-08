// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./styles.css"

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import PrimaryBtn from "../components/Button/PrimaryBtn"

const Hero = () => {
  const swiperData = [
    {
      id: 1,
      bgImg:
        "https://ibb.co/Fbqd2Hd",
      slogan: "Mantenha seu corpo",
      title: "Em forma",
      desc: "Prepare-se para queimar muita gordura com nossos equipamentos de alta qualidade.",
    },
    {
      id: 2,
      bgImg:
        "../../public/Hero/slide-02.avif",
      slogan: "Apenas acredite",
      title: "em você mesmo",
      desc: "Estamos aqui para ajudá-lo a alcançar seus objetivos.",
    },
    {
      id: 3,
      bgImg:
        "../../public/Hero/slide-03.avif",
      slogan: "Pare de desejar e comece a",
      title: "fazer",
      desc: "Obtenha um corpo saudável com os exercícios perfeitos",
    },
  ]

  return (
    <>
      <div className="w-full h-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper w-full"
        >
          {swiperData.map((data) => (
            <SwiperSlide
              key={data.id}
              className="w-full relative sm:w-[300px]"
              style={{
                backgroundImage: `url(${data.bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
              }}
            >
              <div className="w-full h-full bg-black/60 absolute top-0 left-0 -z-10"></div>
              <div className="w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-orange-500 font-semibold mb-2 uppercase">
                  {data.slogan}
                </h5>
                <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-5xl font-bold text-white mb-4 uppercase">
                  {data.title}
                </h1>
                <p className="lg:text-lg md:text-base sm:text-base text-base text-gray-400 font-medium mb-6 text-center">
                  {data.desc}
                </p>
                <PrimaryBtn className="lg:w-[15%] md:w-[35%] sm:w-[75%] w-[80%] text-xl h-14 mt-5 font-semibold rounded-full">
                  Cadastre-se
                </PrimaryBtn>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Hero
