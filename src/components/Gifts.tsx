import { Link } from 'react-router-dom'
import GiftsTitle from '../assets/icons/gifts-title.svg'

const Gifts = () => {
  return (
    <section className='flex flex-col justify-center items-center py-15 px-10'>
      <div className='flex flex-col justify-center items-center max-w-[500px] mx-auto'>
        <img src={GiftsTitle} alt="Gifts" className='w-full mb-10' />
        <p className='font-light text-center font-secondary'>Su presencia es el regalo más valioso en nuestro día especial.</p>
        <p className='font-medium text-center font-secondary mt-5'>Agradecemos su generosidad y apooyo por este medio.</p>
        <p className='font-secondary font-medium text-2xl uppercase mt-15 text-accent w-3/4 text-center'>Liverpool</p>
        <p className='font-secondary font-medium text-xl uppercase text-accent w-3/4 mt-3 mb-10 text-center'>No. de Evento: <span className='font-bold'>51684731</span></p>
        <Link
          to={`https://mesaderegalos.liverpool.com.mx/milistaderegalos/51684731`}
          className="flex justify-center items-center font-secondary text-accent text-lg py-3 px-4 md:px-5 md:text-base border-1 hover:bg-bg-primary hover:border-bg-secondary hover:text-white hover:cursor-pointer transition duration-300 rounded-xl max-w-lg w-xs"
          target="_blank"
        >
          Ver
        </Link>
      </div>
    </section>
  )
}

export default Gifts