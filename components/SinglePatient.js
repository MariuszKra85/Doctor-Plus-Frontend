import gql from 'graphql-tag';
import { useQuery } from '@apollo/client/react';

const SINGLE_PATIENT_QUERY = gql`
  query SINGLE_PATIENT_QUERY($id: ID!) {
    Patient(where: { id: $id }) {
      name
      surname
      disease
      description
      puls
      bloodTest
      doctor {
        name
      }
    }
  }
`;
export { SINGLE_PATIENT_QUERY };

export default function SinglePatient({ id }) {
  const { data, error, loading } = useQuery(SINGLE_PATIENT_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  const { Patient } = data;
  return (
    <div>
      <h1>{Patient.name}</h1>
      <p>{Patient.surname}</p>
      <p>{Patient.disease}</p>
      <p>{Patient.description}</p>
      <p>{Patient.bloodTest ? 'done!' : 'no data :('}</p>
    </div>
  );
}
