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
    <section className='flex flex-col items-center justify-center py-10 md:py-10 px-4 mx-auto'>
      <div className='flex flex-col justify-center items-start bg-bg-primary rounded-lg w-[90%] max-w-[500px] py-10 px-6'>
        <h2 className='text-[2rem] sm:text-4xl font-thin font-primary leading-[0.8] text-primary uppercase mb-6'>{familyName}</h2>
        <p className='text-primary font-secondary font-thin text-md md:text-sm mb-6'>
          Por favor, confirma antes del
        </p>
        <p className='text-primary font-secondary font-semibold text-md md:text-sm mb-6'>
          14 de agosto del 2025
        </p>
        <Link
          to={`/rsvp/${familyKey}`}
          className="flex justify-center items-center font-secondary text-primary text-md py-3 px-4 md:px-5 md:text-base border-1 hover:bg-bg-primary hover:border-bg-secondary hover:text-white hover:cursor-pointer transition duration-300 rounded max-w-lg"
        >
          Confirmar asistencia
        </Link>
      </div>
    </section>
  )
}

export default Invite