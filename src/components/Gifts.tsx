import { Link } from 'react-router-dom'

const Gifts = () => {
  return (
    <section className='flex flex-col justify-center items-start bg-bg-primary rounded-tr-[16%] py-20 px-6 mt-[-100px] z-[9999]'>
      <div className='flex flex-col justify-center items-start max-w-[500px] mx-auto'>
        <h2 className='text-[3.2rem] sm:text-6xl font-bold font-primary leading-[0.8] text-primary uppercase mb-6 w-3/4'>Mesa de Regalos</h2>
        <span className='h-20 w-[1px] bg-primary'></span>
        <p className='font-secondary font-medium text-xl uppercase mt-5 text-primary w-3/4'>Agradecemos su generosidad y apoyo en esta nueva etapa.</p>
        <p className='font-secondary font-bold text-2xl uppercase text-primary w-3/4 mt-10'>Liverpool</p>
        <p className='font-secondary font-medium text-xl uppercase text-primary w-3/4 mt-3 mb-10'>No. de Evento: <span className='font-bold'>51643735</span></p>
        <Link
          to={`https://mesaderegalos.liverpool.com.mx/milistaderegalos/51684731`}
          className="flex justify-center items-center font-secondary text-accent text-lg py-3 px-4 md:px-5 md:text-base bg-button border-1 hover:bg-bg-primary hover:border-bg-secondary hover:text-white hover:cursor-pointer transition duration-300 rounded-xl max-w-lg w-xs"
          target="_blank"
        >
          Ver
        </Link>
      </div>
    </section>
  )
}

export default Gifts