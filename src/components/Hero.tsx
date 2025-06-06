import BackgroundCover from '../assets/images/cover.png'

const Hero = () => {
  return (
    <main
      className='flex flex-col justify-center items-between min-h-[500px] h-[500px] max-h-[500px] p-4 bg-cover bg-center bg-no-repeat relative'
      style={{ backgroundImage: `url(${BackgroundCover})` }}
    >
      <div className='absolute inset-0 bg-black/40'></div>
      <h1 className='font-primary font-medium text-center text-[#DCD7B7] uppercase text-5xl sm:text-5xl md:text-6xl lg:text-8xl flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-6 md:mb-10 relative z-10'>
        <p className='flex items-center'>
          Pau
          <span className='w-[50px] h-[1px] bg-[#DCD7B7] self-center'></span>
        </p>
        <span className='font-primary font-normal text-4xl sm:text-4xl md:text-4xl lg:text-5xl mt-1 md:mt-3'> &</span>
        Kevin
      </h1>
      <p className='text-primary font-secondary text-xl md:text-2xl text-center font-medium relative z-10'>
        San Miguel de Allende
      </p>
      <p className='text-primary font-secondary text-xl md:text-2xl text-center font-medium z-10 absolute bottom-10 left-0 right-0'>
        30 . 08 . 2025
      </p>
    </main>
  )
}

export default Hero