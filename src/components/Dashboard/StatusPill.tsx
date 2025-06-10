import { RsvpStatus } from '../../utils/types';

interface StatusPillProps {
  status: RsvpStatus;
}

const StatusPill: React.FC<StatusPillProps> = ({ status }: StatusPillProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'assists':
        return 'bg-green-100 text-green-800 border border-green-300';
      case 'no assist':
        return 'bg-red-100 text-red-800 border border-red-300';
      default:
        return 'bg-yellow-100 text-yellow-800 border border-yellow-300';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'assists':
        return 'Asistirá';
      case 'no assist':
        return 'No Asistirá';
      default:
        return 'Pendiente';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${getStatusStyles()}`}>
      {getStatusText()}
    </span>
  );
};

export default StatusPill;