import FlowersImage from "../assets/images/flowers.png"
import { DRESS_CODE } from '../utils/dress_code'

const DressCode = () => {
  return (
    <div className='flex justify-center items-center py-20 w-full'>
      <div className='max-w-md w-full py-8 relative'>
        {/* Flowers Image with absolute positioning */}
        <div className='absolute left-0 top-0 w-60'>
          <img
            src={FlowersImage}
            alt="Flowers"
            className='w-full max-w-xs object-contain'
          />
        </div>

        <div className='flex flex-row max-w-md w-full'>
          {/* Empty div to maintain space where the flower was */}
          <div className='w-3/10'></div>

          {/* Content Section - 70% on desktop */}
          <div className='w-7/10 flex flex-col p-4 md:p-8'>
            {/* Text content */}
            <div className='flex flex-col justify-center items-end md:items-end '>
              <h2 className='font-abraham text-6xl lg:text-7xl uppercase text-secondary text-right'>Dress Code</h2>

              <div className="relative w-full my-3 md:my-6">
                <div className="absolute right-0 md:right-0 h-8 md:h-14 w-px bg-secondary transform origin-top rotate-90"></div>
              </div>

              <p className='text-secondary text-xl md:text-2xl mb-20'>Garden Party Formal</p>

              <p className='text-secondary text-right text-md md:text-xl'>
                Animamos a nuestros invitados a seguir la siguiente paleta de colores:
              </p>
            </div>
            <div className='grid grid-cols-4 gap-4 md:gap-6 mt-8 justify-items-center'>
              {DRESS_CODE.map((color, index) => (
                <div
                  key={index}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full shrink-0"
                  style={{ backgroundColor: color }}
                  aria-label={`Color suggestion ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DressCode