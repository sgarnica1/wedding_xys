
const Lodging = () => {
  return (
    <div className='flex flex-col justify-center items-center py-20 w-full bg-bg-secondary'>
      <div className='flex flex-col justify-center items-center w-full px-6 max-w-md '>
        <h2 className='font-primary text-6xl uppercase mb-3'>Hospedaje</h2>
        <p className='text-xl text-center text-secondary mb-10'>San Miguel de Allende, Guanajuato.</p>
        <p className='font-secondary font-medium text-center text-secondary mb-10 text-xl'>Animamos a nuestros invitados a alojarse en algún <span className='font-bold'>Airbnb</span> en
          San Miguel de allende.</p>
        <a
          href="https://www.airbnb.mx/s/San-Miguel-de-Allende--Gto./homes?place_id=ChIJD7xxmK9RK4QRpLAHHQMBMWU&refinement_paths%5B%5D=%2Fhomes&checkin=2025-08-30&checkout=2025-08-31&date_picker_type=calendar&adults=2&guests=2&search_type=AUTOSUGGEST"
          target="_blank"
          rel="noopener noreferrer"
          className="font-secondary font-semibold flex justify-center items-center text-xl py-3 px-20 md:text-base border-2 border-black hover:bg-secondary hover:text-white hover:cursor-pointer transition duration-300 rounded"
        >
          Buscar
        </a>
      </div>
    </div>
  )
}

export default Lodging