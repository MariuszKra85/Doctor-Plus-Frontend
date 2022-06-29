import UpdatePatient from '../components/UpdatePatient';

export default function UpdatePatientPage({ query }) {
  console.log('???');
  return <UpdatePatient id={query.id} />;
}
