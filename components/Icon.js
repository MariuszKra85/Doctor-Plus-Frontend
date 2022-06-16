import {
  faTasks,
  faBarsProgress,
  faBell,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BarsProgress = () => <FontAwesomeIcon icon={faBarsProgress} />;

const Bell = () => <FontAwesomeIcon icon={faBell} />;

const Message = () => <FontAwesomeIcon icon={faMessage} />;
const Task = () => <FontAwesomeIcon icon={faTasks} />;
export { Task, Bell, Message, BarsProgress };
