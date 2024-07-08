import { Dumbbell } from "lucide-react"

const Popular = () => {

  const exerciseData = [
    {
      id: 1,
      exerciseImg: "https://i.postimg.cc/dVJWPrVJ/ex-aquecimento.jpg",
      name: "Aquecimento",
      duration: 15,
      sets: 3,
      calories: 100,
    },
    {
      id: 2,
      exerciseImg: "https://i.postimg.cc/YC8dp0vY/ex-ombro.jpg",
      name: "Treino de ombro",
      duration: 20,
      sets: 4,
      calories: 150,
    },
    {
      id: 3,
      exerciseImg: "https://i.postimg.cc/hjQsb0p1/ex-yoga.jpg",
      name: "Sessão de Yoga",
      duration: 55,
      sets: 5,
      calories: 250,
    },
    {
      id: 4,
      exerciseImg: "https://i.postimg.cc/KYzJ4bTV/ex-pernas.jpg",
      name: "Treino de pernas",
      duration: 18,
      sets: 4,
      calories: 120,
    },
  ];

  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 ">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-6 h-6 -rotate-45 text-orange-500" />
          Nossos exercícios populares
        </h6>
        <div className="w-full h-auto flex items-center justify-center gap-x-5 gap-y-6 lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap">
          {exerciseData.map((data) => (
          <div
          key={data.id} 
            className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-lg overflow-hidden hover:shadow hover:shadow-orange-600 ease-out duration-700 cursor-pointer">
            <img
              src={data.exerciseImg}
              alt="Exercise img"
              className="w-full lg:h-[30vh] md:h-[33vh] sm:h-[38vh] h-[40vh] object-cover rounded-lg"
            />
            <div className="w-full h-auto py-4 px-3">
              <h1 className="text-lg text-white font-semibold mb-1">
                {data.name}
              </h1>
              <div className="w-full h-auto flex items-center gap-x-2">
                <p className="text-sm text-gray-300">{data.duration} min</p>
                <span className="w-1 h-1 rounded-full bg-gray-600"/>
                <p className="text-sm text-gray-300">{data.sets} sets</p>
                <span className="w-1 h-1 rounded-full bg-gray-600"/>
                <p className="text-sm text-gray-300">{data.calories} calorias</p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Popular
