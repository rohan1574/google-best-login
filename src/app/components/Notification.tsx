import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Notification = () => {
  const notifications = useSelector((state: RootState) => state.inventory.notifications);

  return (
    <div>
      {notifications.map((note, index) => (
        <p key={index} className="text-red-500">{note}</p>
      ))}
    </div>
  );
};

export default Notification;
