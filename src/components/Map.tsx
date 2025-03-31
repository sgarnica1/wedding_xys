import MapIframe from './MapIframe'

const Map = () => {
  return (
    <div className='flex flex-col justify-center items-center py-20 w-full bg-white'>
      <div className='flex flex-col justify-center items-center max-w-md w-full px-6'>
        <h2 className='font-abraham text-5xl uppercase mb-8'>¿Cómo llegar?</h2>
        <MapIframe />
      </div>
    </div>
  )
}

export default Map