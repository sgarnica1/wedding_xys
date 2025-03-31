import { useParams } from 'react-router-dom'
import InviteCardImage from "../assets/images/invite_card.png"
import InviteCard from './InviteCard'
import { GUESTS } from '../utils/guests'

interface FamilyType {
  name: string,
  members: string[]
}

const Invite = () => {
  const { id: familyKey } = useParams()

  if (!familyKey) return <></>

  const family: FamilyType = GUESTS[familyKey]

  console.log(family)

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

        <p className='text-secondary text-xs md:text-sm mt-4 text-center'>
          Hemos decidido que este evento sea <span className='text-primary uppercase font-medium'>sin niños</span>.
          Esperamos esto no sea un impedimento para poder celebrar con nosotros.
        </p>
      </div>
    </section>
  )
}

export default Invite