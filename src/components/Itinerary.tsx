import ChurchIcon from '../assets/icons/church.svg';
import StarsIcon from '../assets/icons/stars.svg';
import DishesIcon from '../assets/icons/dishes.svg';
import DanceIcon from '../assets/icons/dance.svg';
import ClockIcon from '../assets/icons/clock.svg';

const Itinerary = () => {

  const ItineraryData = [
    {
      title: 'Recepción',
      time: '6:00 PM',
      icon: ChurchIcon
    },
    {
      title: 'Ceremonia',
      time: '6:20 PM',
      icon: StarsIcon
    },
    {
      title: 'Cena',
      time: '8:00 PM',
      icon: DishesIcon
    },
    {
      title: 'Baile',
      time: '10:30 PM',
      icon: DanceIcon
    },
    {
      title: 'Bye, Bye',
      time: '1:00 AM',
      icon: ClockIcon
    },
  ]

  return (
    <section className='flex flex-col justify-center items-center bg-white rounded-br-4xl py-20 px-6'>
      <div className='flex flex-col justify-center items-centermax-w-[500px] mx-auto'>
        <h2 className='text-5xl sm:text-6xl font-bold font-primary leading-[0.8] text-secondary text-center uppercase mb-12'>Itinerario</h2>
        <div className='grid grid-cols-1 gap-8'>
          {ItineraryData.map((item, index) => (
            <div key={index} className='grid grid-cols-[30%_70%] gap-15 sm:gap-10'>
              <div className='flex items-end w-full justify-end'>
                <img src={item.icon} alt={item.title} className='w-12 h-12' />
              </div>
              <div className='text-accent uppercase font-secondary flex flex-col justify-center'>
                <p className='text-xl'>{item.time}</p>
                <h3 className='text-lg text-secondary font-medium'>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Itinerary