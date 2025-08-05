import TitleImage from '../assets/icons/sam_xime.svg'
import UsImage from '../assets/icons/us.svg'

const SaveTheDate = () => {
  return (
    <section className='flex flex-col items-center justify-center mt-20 xs:mt-24 md:mt-32 px-4 mx-auto max-w-[500px] mb-20'>
      <div className='flex flex-col justify-between items-center h-[500px] w-full px-6'>
        <img
          src={UsImage}
          alt="Nosotros"
          className='w-[70%] max-w-[200px] mb-5'
        />
        <img
          src={TitleImage}
          alt="Sam Marañon & Ximena Suárez"
          className='w-[90%] max-w-[300px] mb-10'
        />
        <p className='font-light text-center font-secondary mb-10'>Con alegría, nos complace anunciar que hemos decidido unir nuestras vidas en matrimonio.</p>
        <p className='font-light text-center font-secondary'>Que el Señor lleve sus corazones a amar como Dios ama y a perseverar como Cristo perseveró.</p>
        <p className='font-bold text-center font-secondary'>2 Tesalonicenses 3:5</p>
      </div>
    </section>
  )
}

export default SaveTheDate