import MapIframe from './MapIframe'

const Map = () => {
  return (
    <div className='flex flex-col justify-center items-center py-20 w-full bg-white'>
      <div className='flex flex-col justify-center items-center max-w-md w-full px-6'>
        <h2 className='font-primary text-5xl uppercase mb-10 text-left md:text-center'>¿Cómo llegar?</h2>
        <p className='font-secondary font-medium text-left md:text-center text-secondary mb-10 text-xl'>Para una navegación más segura y rápido, los animamos a usar la aplicación de viajes <span className='font-bold'>Waze</span>.</p>
        <MapIframe />
      </div>
    </div>
  )
}

export default Map