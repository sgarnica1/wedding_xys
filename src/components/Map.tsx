import { Link } from 'react-router-dom'

const Map = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-20 pb-30 w-full'>
      <div className='flex flex-col justify-center items-center max-w-md w-full px-6'>
        <h2 className='font-primary text-3xl uppercase mb-10 text-center'>¿Cómo llegar?</h2>
        <div className='flex flex-col justify-center items-center bg-[#937E6A] rounded-lg max-w-[500px] py-10 px-6'>
          <h2 className='text-[2rem] sm:text-4xl font-thin font-primary leading-[0.8] text-primary uppercase mb-6 text-center'>Finca El Olivo</h2>
          <p className='text-primary font-secondary font-thin text-md md:text-sm mb-6 text-center'>
            Santa María Begoña, 76250, San Luis Potosí, México
          </p>
          <p className='text-primary font-secondary font-thin text-md md:text-sm mb-6 text-center'>
            El Marqués, Querétaro
          </p>
          <Link
            to={`https://maps.app.goo.gl/j3LeLStahoTZKAn87`}
            target="_blank"
            className="flex justify-center items-center font-secondary text-primary text-md py-3 px-4 md:px-5 md:text-base border-1 hover:bg-bg-primary hover:border-bg-secondary hover:text-white hover:cursor-pointer transition duration-300 rounded max-w-lg font-medium"
          >
            Ver en Google Maps
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Map