import { useRouter } from 'next/dist/client/router';
import Pagination from '../../components/Pagination';
import Doctors from '../../components/Doctors';

const Doctor = () => {
  const { query } = useRouter();
  return (
    <div>
      <Pagination page={query.page || 1} />
      <Doctors page={query.page || 1} />
    </div>
  );
};
export default Doctor;
