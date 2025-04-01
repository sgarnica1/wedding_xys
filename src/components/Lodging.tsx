
const Lodging = () => {
  return (
    <div className='flex flex-col justify-center items-center py-20 w-full bg-bg-primary max-w-md'>
      <div className='flex flex-col justify-center items-center w-full px-6'>
        <h2 className='font-primary text-6xl uppercase mb-3'>Hospedaje</h2>
        <p className='text-xl md:text-2xl text-center text-secondary mb-6'>Casa Conejos / Hacienda de las Adelitas</p>
        <p className='font-secondary mb-10 text-xl font-bold'>Desde $2,500 por noche.</p>
        <p className='text-center text-secondary mb-10 text-lg'>Animamos a nuestros invitados a alojarse dentro del mismo lugar del evento <span className='underline'>(Casa Conejos o Hacienda de las Adelitas)</span> o en el centro de Tequisquiapan (a 10 minutos del jardín).</p>
        <a
          href="https://casaconejos.mx/reservar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center text-xl py-3 px-20 md:text-base border-2 border-black hover:bg-primary hover:text-white hover:cursor-pointer transition duration-300 rounded"
        >
          Reservar
        </a>
      </div>
    </div>
  )
}

export default Lodging