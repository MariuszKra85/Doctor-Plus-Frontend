import UpdateDoctor from '../components/UpdateDoctor';

export default function UpdateDoctorPage({ query }) {
  return (
    <div>
      <UpdateDoctor id={query.id} />
    </div>
  );
}
