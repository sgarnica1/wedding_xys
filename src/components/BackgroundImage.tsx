import BackgroundCover from '../assets/images/background_image.png'


const Hero = () => {
  return (
    <div className='relative'>
      <main
        className='flex flex-col justify-center items-center h-[600px] bg-cover bg-center bg-no-repeat relative'
        style={{ backgroundImage: `url(${BackgroundCover})` }}
      >
        <h2 className='text-white text-3xl font-thin uppercase mb-20 tracking-[-0.10em]'>Sabado</h2>
        <h2 className='text-white text-5xl font-thin uppercase mb-5 tracking-[-0.05em]'>22</h2>
        <h2 className='text-white text-5xl font-thin uppercase mb-5 tracking-[-0.10em]'>Noviembre</h2>
        <h2 className='text-white text-5xl font-thin uppercase tracking-[-0.10em]'>2025</h2>
      </main>

    </div>
  )
}

export default Hero