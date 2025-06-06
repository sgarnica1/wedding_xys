import BranchImage from '../assets/images/branch.png'

const SaveTheDate = () => {
  return (
    <section className='flex flex-col items-center justify-center bg-white py-12 md:py-20 px-4 mx-auto max-w-[500px]'>
      <div className='flex flex-col justify-between items-start h-[500px] w-full bg-bg-secondary py-8 px-6 shadow-1xl rounded-3xl relative'>
        <h2 className='text-6xl md:text-7xl w-[50%] font-primary uppercase font-bold leading-[0.8]'>Save The Date</h2>
        <img
          src={BranchImage}
          alt="Decorative Branch"
          className='w-34 sm:w-50 h-auto object-contain mb-6 md:mb-8 absolute right-0 top-14 sm:top-20'
        />
        <div>
          <div className='mb-10 font-secondary'>
            <p className='font-bold uppercase'>Nos complace invitarte a nuestra boda</p>
            <div>
              <p className='font-medium'>30 . 08 . 2025 </p>
              <span className='font-medium'> | </span>
              <p className='font-medium'> 6pm - 1am</p>
            </div>
          </div>
          <div className='font-secondary'>
            <p className='font-bold uppercase'>Hacienda La Gloria</p>
            <p className='font-medium'>37897 San Miguel de Allende, Guanajuato.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default SaveTheDate