import Image from "../assets/images/sketch.png"

const Hero = () => {
  return (
    <main className='flex flex-col justify-center items-center min-h-screen p-4'>
      <div className="absolute top-0 right-0 flex items-end mr-4 md:mr-7">
        <p className="transform -rotate-90 uppercase -mr-8 mb-12 md:-mr-10 md:mb-11 text-xs sm:text-sm md:text-base">Save the date</p>
        <div className="h-36 md:h-40 w-0.5 bg-black"></div>
      </div>
      <div className='mt-14 md:mt-20 max-w-full'>
        <img src={Image} alt="Trees and Lake Wedding" className="max-w-full h-auto" />
      </div>
      <h1 className='font-primary text-center uppercase text-7xl sm:text-5xl md:text-6xl lg:text-8xl flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-6 md:mb-10'>
        Lore
        <span className='font-abhaya font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 md:mt-3'> &</span>
        Sergio
      </h1>
      <div className='flex flex-col justify-center items-center text-secondary font-secondary text-xl md:text-2xl text-center font-medium'>
        <span>
          Tequisquiapan, Querétaro.
        </span>
        <span>
          13. 09. 2025
        </span>
      </div>
    </main>
  )
}

export default Hero