import { GUESTS } from '../utils/guests';
import { useParams } from 'react-router-dom';
import RsvpForm from './RsvpForm';

const RsvpPage = () => {
  const { id: familyKey } = useParams();

  // Check if the familyKey exists in the GUESTS object
  if (!GUESTS[familyKey]) {
    return (
      <div className='flex flex-col justify-center items-center py-20 w-full bg-bg-primary'>
        <div className='flex flex-col justify-center items-center max-w-md w-full px-6'>
          <h2 className='font-abraham text-6xl uppercase mb-3'>RSVP</h2>
          <p className='text-xl md:text-2xl text-center text-secondary mb-6'>Familia no encontrada.</p>
        </div>
      </div>
    );
  }

  // Get the family details from the GUESTS object
  const family = GUESTS[familyKey];

  return (
    <div className='flex flex-col justify-center items-center py-20 w-full h-min-screen bg-bg-primary'>
      <div className='flex flex-col justify-center items-center max-w-md w-full px-6'>
        <h2 className='font-abraham text-6xl uppercase mb-3'>RSVP</h2>
        <p className='text-xl md:text-2xl text-center text-secondary mb-6'>{family.name}</p>
        <p className='mb-10 text-lg md:text-xl'>Por favor confirma tu asistencia.</p>

        <RsvpForm family={family} familyKey={familyKey} />
      </div>
    </div>
  );
};

export default RsvpPage;