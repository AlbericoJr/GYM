import { Dumbbell, MoveRight } from "lucide-react";
import SecondaryLink from "../components/LinkBtn/SecondaryLink"

const Trainers = () => {

  const trainerData = [
    {
      id: 1,
      trainerImg: "../../public/Trainers/trainers-01.avif",
      name: "Dr. John Smith",
      role: "Treinador de musculação",
    },
    {
      id: 2,
      trainerImg: "../../public/Trainers/trainers-02.avif",
      name: "Mrs. Lilly Doe",
      role: "Prof. de ginástica",
    },
    {
      id: 3,
      trainerImg: "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Dr. John Doe",
      role: "Prof. e preparador físico",
    },
    {
      id: 4,
      trainerImg: "../../public/Trainers/trainers-04.avif",
      name: "Ronaldo Reigns",
      role: "Prof. e treinador de luta livre",
    },
  ];

  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 ">
        <h6 className="text-lg font-bold text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-6 h-6 -rotate-45 text-orange-500" />
          Nossos treinadores especialistas
        </h6>

        <div
          className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10 ">
        {trainerData.map((data) => (
          <div
            key={data.id}
            className="lg:w-[23%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl overflow-hidden relative">
            <img 
              src={data.trainerImg} 
              alt="Personal trainer" 
              className="w-full h-full object-cover"
            />
            <div className="w-full h-auto bg-orange-500/90 absolute bottom-0 left-0 py-4 px-2 flex items-center justify-center flex-col">
              <h1 className="text-xl text-white font-semibold">
                {data.name}
              </h1>
              <p className="text-sm text-gray-300">{data.role}</p>
            </div>
          </div>
        ))}
        </div>
        <SecondaryLink 
          link="/trainers" 
          className="lg:w-[25%] md:w-[50%] sm:w-[75%] w-[90%] justify-center"
        >
          Ver todos os nossos Professores
          <MoveRight className="w-6 h-6"/>
        </SecondaryLink>
      </div>
    </>
  )
}

export default Trainers
