import ItineraryTitle from '../assets/icons/itinerary-title.svg';
import ChurchIcon from '../assets/icons/church.svg';
import StarsIcon from '../assets/icons/stars.svg';
import DishesIcon from '../assets/icons/dishes.svg';
import DanceIcon from '../assets/icons/dance.svg';
import ClockIcon from '../assets/icons/clock.svg';
import CoctailIcon from '../assets/icons/coctail.svg';

const Itinerary = () => {

  const ItineraryData = [
    {
      title: 'Recepción',
      time: '4:40 PM',
      icon: StarsIcon
    },
    {
      title: '¡Sí, acepto!',
      time: '5:00 PM',
      icon: ChurchIcon
    },
    {
      title: 'Cóctel',
      time: '6:00 PM',
      icon: CoctailIcon
    },
    {
      title: 'Cena',
      time: '7:00 PM',
      icon: DishesIcon
    },
    {
      title: 'Baile',
      time: '10:30 PM',
      icon: DanceIcon
    },
    {
      title: 'Fin',
      time: '1:00 AM',
      icon: ClockIcon
    },
  ]

  return (
    <section className='flex flex-col justify-center items-center py-10 px-6'>
      <div className='flex flex-col justify-center items-centermax-w-[500px] mx-auto'>
        <img src={ItineraryTitle} alt="Itinerary" className='w-full mb-12' />
        <div className='grid grid-cols-1 gap-8'>
          {ItineraryData.map((item, index) => (
            <div key={index} className='grid grid-cols-[2fr_3fr] gap-10 sm:gap-10'>
              <div className='flex items-end w-full justify-end'>
                <img src={item.icon} alt={item.title} className='w-12 h-12' />
              </div>
              <div className='text-accent uppercase font-primary font-medium flex flex-col justify-center'>
                <p className='text-xl'>{item.time}</p>
                <h3 className='text-md text-black font-light font-secondary'>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Itinerary