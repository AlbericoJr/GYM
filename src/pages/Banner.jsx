import PrimaryBtn from '../components/Button/PrimaryBtn'

const Banner = () => {
  return (
    <>
      <div 
        className='w-full h-[58vh] flex items-center justify-center flex-col relative lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 z-10'
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-black/70 absolute top-0 left-0 -z-10 "></div>
        <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold text-gray-200 uppercase text-center'>
          Sem <span className='text-orange-500'>Dor</span>, se{""} <span className='text-orange-500'>Ganho</span>
        </h1>
        <p className='text-lg text-gray-300 font-medium mb-8 text-center'>
          Inicie sua jornada de condicionamento físico com soluções premium
        </p>
        <PrimaryBtn className="px-10 py-3 uppercase rounded-full">Torne-se um membro</PrimaryBtn>
      </div>
    </>
  )
}

export default Banner