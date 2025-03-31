import { Link } from 'react-router-dom'

interface InviteCardProps {
  familyKey: string,
  familyName: string,
  familyMembers: string[]
}

const InviteCard = ({ familyKey, familyName, familyMembers }: InviteCardProps) => {
  return (
    <div className='flex flex-col justify-center items-start mt-14 md:mt-20 mb-8 md:mb-10 p-4 md:p-5 bg-bg-primary shadow-2xl rounded-md mx-auto max-w-md w-full'>
      <h2 className='text-3xl md:text-4xl font-abraham'>{familyName}</h2>
      <div className="relative w-full my-4 md:my-6">
        <div className="absolute left-0 right-0 h-px bg-secondary opacity-70"></div>
      </div>
      {familyMembers && familyMembers.length > 0 &&
        (
          <div className='text-secondary text-base md:text-lg mb-8'>
            {familyMembers.map((member, index) => (
              <span key={index}>{`${member}${index === familyMembers.length - 1 ? "." : ", "}`}</span>
            ))}
          </div>
        )}
      <Link
        to={`/rsvp/${familyKey}`}
        className="flex justify-center items-center text-lg py-3 px-4 md:px-5 md:text-base bg-button hover:bg-primary hover:text-white hover:cursor-pointer transition duration-300 rounded max-w-lg"
      >
        Confirmar asistencia
      </Link>
      <p className='text-secondary text-xs md:text-sm mt-4 text-center'>
        Por favor, confirma antes del 13. 06. 2025
      </p>
    </div>
  )
}

export default InviteCard