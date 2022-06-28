import UpdateDoctor from '../components/UpdateDoctor';

export default function UpdatePage({ query }) {
  return (
    <div>
      <UpdateDoctor id={query.id} />
    </div>
  );
}
