import PlantImage from "../assets/images/plant.png"

const Gifts = () => {
  return (
    <div className='flex justify-center items-center py-20 w-full bg-white'>
      <div className='max-w-md w-full py-8 relative'>

        <div className='flex flex-row max-w-md w-full'>
          {/* Content Section - 70% on desktop */}
          <div className='w-8/10 flex flex-col p-4 md:p-8'>
            {/* Text content */}
            <h2 className='font-secondary text-5xl lg:text-7xl uppercase text-secondary text-left mb-5'>Mesa <br /> De <br /> Regalos</h2>
            <p className='text-secondary text-xl md:text-2xl mb-5'>Si está en tu corazón darnos algún presente, agradecemos mucho que sea por este medio.</p>
            <p className='text-primary text-xl md:text-2xl mb-20'>¡Muchas gracias por tu generosidad!</p>
            <p className='text-primary text-left text-2xl md:text-4xl'>Liverpool.</p>
            <p className='text-secondary text-left text-2xl mb-5'>
              No. de evento: 51643735
            </p>
            <a
              href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51643735"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center text-xl py-3 px-4 md:px-5 md:text-base border-2 border-black hover:bg-primary hover:text-white hover:cursor-pointer transition duration-300 rounded max-w-lg"
            >
              Visitar
            </a>

          </div>

          {/* Empty div to maintain space where the flower was */}
          <div className='w-3/10'></div>

        </div>

        {/* Flowers Image with absolute positioning */}
        <div className='absolute right-0 top-0 w-60'>
          <img
            src={PlantImage}
            alt="Flowers"
            className='w-full max-w-xs object-contain'
          />
        </div>

      </div>
    </div>
  )
}

export default Gifts