import BackgroundCover from '../assets/images/cover.png'
import Logo from '../assets/icons/logo.svg'
import DownArrow from '../assets/icons/down-arrow.svg'
import CoverSupport from '../assets/images/cover-support.png'

const Hero = () => {
  return (
    <div className='relative'>
      <main
        className='flex flex-col justify-center items-center h-[600px] bg-cover bg-center bg-no-repeat relative'
        style={{ backgroundImage: `url(${BackgroundCover})` }}
      >
        <img src={Logo} alt="Logo" className='w-4/5 mt-[30px] z-10 relative' />
        <img src={DownArrow} alt="Down Arrow" className='w-10 mt-[-50px] z-10 relative' />
      </main>
      <div className='flex justify-center'>
        <img src={CoverSupport} alt="Cover Support" className='w-4/5 -mt-20 z-10' />
      </div>
    </div>
  )
}

export default Hero