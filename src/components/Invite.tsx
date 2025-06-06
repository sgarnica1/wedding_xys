import { useParams, Link } from 'react-router-dom'
import { GUESTS } from '../utils/guests'
import { FamilyType, GuestsType } from '../utils/types'

const Invite = () => {
  const { id: familyKey } = useParams()
  const guests = GUESTS as GuestsType;

  if (!familyKey) return <></>

  const family: FamilyType = guests[familyKey]
  const familyMembers = family.members || []
  const familyName = family.name || ''

  if (!familyName || familyMembers.length === 0) {
    return <></>
  }

  return (
    <section className='flex flex-col items-center justify-center bg-bg-primary py-30 md:py-20 px-4 mx-auto rounded-br-[16%]'>
      <div className='flex flex-col justify-center items-start bg-bg-primary rounded-br-[16%] max-w-[500px]'>
        <h2 className='text-[3rem] sm:text-6xl font-bold font-primary leading-[0.8] text-primary uppercase mb-6'>{familyName}</h2>
        <p className='text-primary font-secondary font-medium text-md md:text-sm mb-6'>
          Por favor, confirma antes del 30 de junio del 2025
        </p>
        <Link
          to={`/rsvp/${familyKey}`}
          className="flex justify-center items-center font-secondary text-accent text-lg py-3 px-4 md:px-5 md:text-base bg-button border-1 hover:bg-bg-primary hover:border-bg-secondary hover:text-white hover:cursor-pointer transition duration-300 rounded max-w-lg"
        >
          Confirmar asistencia
        </Link>
      </div>
    </section>
  )
}

export default Invite