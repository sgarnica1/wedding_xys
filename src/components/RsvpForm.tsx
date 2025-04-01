import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, query, where, updateDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase';
import ErrorMessage from './ErrorMessage';
import { FamilyType } from '../utils/types';

interface RsvpProps {
  family: FamilyType;
  familyKey: string;
}

interface RsvpState {
  [key: string]: {
    [member: string]: boolean;
  };
}

interface MemberRsvp {
  name: string;
  attending: boolean;
}

const RsvpForm: React.FC<RsvpProps> = ({ family, familyKey }: RsvpProps) => {
  const [rsvps, setRsvps] = useState<RsvpState>(() => {
    // Initialize the state with members set to 'true' (attending)
    const initialState: RsvpState = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initialState[familyKey] = family.members.reduce((acc: any, member: string) => {
      acc[member] = true; // Default all members to attending
      return acc;
    }, {});
    return initialState;
  });

  const [specialRequest, setSpecialRequest] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [existingRsvpId, setExistingRsvpId] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  const fetchExistingRsvp = async () => {
    setLoading(true);
    try {
      // Create a query to find RSVP with matching id
      const rsvpQuery = query(collection(db, 'rsvps'), where('rsvpData.id', '==', familyKey));
      const querySnapshot = await getDocs(rsvpQuery);

      if (!querySnapshot.empty) {
        // We found an existing RSVP
        const existingRsvp = querySnapshot.docs[0];
        const rsvpData = existingRsvp.data();

        // Update state with the existing RSVP data
        const updatedRsvps: RsvpState = { ...rsvps };
        updatedRsvps[familyKey] = family.members.reduce((acc: any, member: string) => {
          // Find the member in the existing RSVP data
          const memberData = rsvpData.rsvpData.members.find(
            (m: MemberRsvp) => m.name === member
          );

          // Set attending status from existing data or default to true
          acc[member] = memberData ? memberData.attending : true;
          return acc;
        }, {});

        setRsvps(updatedRsvps);
        setSpecialRequest(rsvpData.specialRequest || '');
        setExistingRsvpId(existingRsvp.id);
        setIsUpdating(true);
      }
    } catch (err) {
      console.error("Error fetching existing RSVP:", err);
      setError("Error al cargar datos existentes. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
      setDataLoaded(true);
    }
  };

  // Fetch existing RSVP data if any
  useEffect(() => {
    fetchExistingRsvp();
  }, [familyKey, family.members]);

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Prepare data to send to Firebase
      const rsvpData = {
        id: familyKey,
        familyName: family.name,
        members: family.members.map((member: string) => ({
          name: member,
          attending: rsvps[familyKey][member],
        })),
      };

      const data = {
        rsvpData,
        specialRequest,
      };

      if (isUpdating && existingRsvpId) {
        // Update existing document
        await updateDoc(doc(db, 'rsvps', existingRsvpId), data);
      } else {
        // Create new document
        await addDoc(collection(db, 'rsvps'), data);
      }

      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Hubo un error al enviar tu RSVP. Por favor, intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = (fKey: string, member: string) => {
    setRsvps({
      ...rsvps,
      [fKey]: {
        ...rsvps[fKey],
        [member]: !rsvps[fKey][member],
      },
    });
  };

  const handleUpdateClick = () => {
    setSuccess(false);
    // No need to reset isUpdating or existingRsvpId
  };

  if (success) {
    return (
      <div className="w-full p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-green-600 text-center">
          {isUpdating
            ? '¡Gracias por actualizar tu confirmación!'
            : '¡Gracias por confirmar!'}
        </h3>
        <p className="text-lg text-center">Tu RSVP ha sido {isUpdating ? 'actualizado' : 'enviado'} correctamente.</p>
        <p className="text-lg mt-4 text-center">Esperamos verte en nuestra celebración.</p>
        <button
          className="w-full py-3 px-4 border-2 border-black hover:bg-primary hover:text-white hover:cursor-pointer transition duration-300 rounded text-lg font-medium mt-5"
          onClick={handleUpdateClick}
        >
          Actualizar asistencia
        </button>
      </div>
    );
  }

  if (loading && !dataLoaded) {
    return (
      <div className="w-full p-6 bg-white shadow-lg rounded-lg">
        <p className="text-lg text-center">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleRsvpSubmit}>
        {/* Render members of the selected family */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-secondary">
            {isUpdating ? 'Actualiza tu asistencia' : 'Confirma asistencia'}
          </h3>
          <p className='mb-6 text-md'>Por favor, selecciona a los invitados que asistirán:</p>
          <div className="space-y-4">
            {family.members.map((member: string) => (
              <div key={member} className="flex items-center">
                <input
                  type="checkbox"
                  checked={rsvps[familyKey][member]}
                  onChange={() => handleCheckboxChange(familyKey, member)}
                  id={`${familyKey}-${member}`}
                  className="mr-3 h-5 w-5"
                />
                <label htmlFor={`${familyKey}-${member}`} className="text-lg">
                  {member}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-secondary mb-2">Peticiones especiales o restricciones alimenticias</label>
          <textarea
            className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            rows={4}
          />
        </div>

        {error && <ErrorMessage message={error} />}

        <button
          type="submit"
          className="w-full py-3 px-4 border-2 border-black hover:bg-primary hover:text-white hover:cursor-pointer transition duration-300 rounded text-lg font-medium"
          disabled={loading}
        >
          {loading
            ? 'Enviando...'
            : isUpdating
              ? 'Actualizar Asistencia'
              : 'Confirmar Asistencia'}
        </button>
      </form>
    </div>
  );
};

export default RsvpForm;