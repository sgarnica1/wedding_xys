import { useParams } from 'react-router-dom'
import InviteCardImage from "../assets/images/invite_card.png"
import InviteCard from './InviteCard'
import { GUESTS } from '../utils/guests'
import { FamilyType, GuestsType } from '../utils/types'

const Invite = () => {
  const { id: familyKey } = useParams()
  const guests = GUESTS as GuestsType;

  if (!familyKey) return <></>

  const family: FamilyType = guests[familyKey]

  return (
    <section className='bg-white py-12 md:py-20 px-4 md:px-6 flex flex-col items-center mx-auto pb-20'>
      <div className='w-full max-w-md'>
        <img
          src={InviteCardImage}
          alt="Invite Card Details"
          className='w-full h-auto object-contain mb-6 md:mb-8'
        />

        <InviteCard
          familyKey={familyKey}
          familyName={family.name}
          familyMembers={family.members}
        />

        <p className='text-secondary text-md mt-4 px-2'>
          Hemos decidido que este evento sea <span className='text-primary uppercase font-bold'>sin niños</span>.
          Esperamos esto no sea un impedimento para poder celebrar con nosotros.
        </p>
      </div>
    </section>
  )
}

export default Invite