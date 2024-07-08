const Card = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center lg:grid-cols-4 md:grid-cols-2 sm:gid-cols-1  justify-center lg:gap-8 md:gap-5 sm:gap-4 gap-5 lg:px-24 md:px-16 sm:px-6 px-6 mt-6 flex-wrap">

        <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/40 rounded-md ease-out duration-700 cursor-pointer">
          <h5 className="text-4xl text-orange-400 font-semibold mb-2 uppercase">
            1200+
          </h5>
          <p className="text-lg text-gray-300 font-medium">Membros</p>
        </div>

        <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
          <h5 className="text-4xl text-orange-400 font-semibold mb-2 uppercase">
            120+
          </h5>
          <p className="text-lg text-gray-300 font-medium">
            Instrutores Especialistas
          </p>
        </div>

        <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
          <h5 className="text-4xl text-orange-400 font-semibold mb-2 uppercase">
            13+
          </h5>
          <p className="text-lg text-gray-300 font-medium">
            Anos de experiência
          </p>
        </div>

        <div className="flex items-center justify-center flex-col lg:w-fit md:w-[48%] sm:w-[48%] w-full lg:py-6 md:py-7 sm:py-8 py-9 px-10 bg-black/10 hover:bg-black/30 rounded-md ease-out duration-700 cursor-pointer">
          <h5 className="text-4xl text-orange-400 font-semibold mb-2 uppercase">
            368+
          </h5>
          <p className="text-lg text-gray-300 font-medium">Academia</p>
        </div>
      </div>
    </>
  )
}

export default Card
