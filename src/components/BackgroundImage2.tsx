import BackgroundCover from '../assets/images/background-2.png'


const Hero = () => {
  return (
    <div className='relative'>
      <section
        className='flex flex-col justify-center items-center h-[400px] bg-cover bg-center bg-no-repeat relative'
        style={{ backgroundImage: `url(${BackgroundCover})` }}
      >
      </section>

    </div>
  )
}

export default Hero