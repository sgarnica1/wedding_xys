import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
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

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Prepare data to send to Firebase
      const rsvpData = {
        familyName: family.name,
        members: family.members.map((member: string) => ({
          name: member,
          attending: rsvps[familyKey][member],
        })),
      };

      // Add to Firebase using v9 syntax
      await addDoc(collection(db, 'rsvps'), {
        rsvpData,
        specialRequest,
      });
      setSuccess(true);
    } catch (err) {
      console.log(err);
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

  if (success) {
    return (
      <div className="w-full p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-green-600">¡Gracias por confirmar!</h3>
        <p className="text-lg">Tu RSVP ha sido enviado correctamente.</p>
        <p className="text-lg mt-4">Esperamos verte en nuestra celebración.</p>
      </div>
    );
  }

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleRsvpSubmit}>
        {/* Render members of the selected family */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-secondary">Confirma asistencia</h3>
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
          {loading ? 'Enviando...' : 'Confirmar Asistencia'}
        </button>
      </form>
    </div>
  );
};

export default RsvpForm;