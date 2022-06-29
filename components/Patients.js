import gql from 'graphql-tag';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

const ALL_PATIENTS_QUERY = gql`
  query {
    allPatients {
      id
      name
      surname
      doctor {
        name
      }
      disease
    }
  }
`;
export { ALL_PATIENTS_QUERY };

const StyledLink = styled.div`
  margin: 1rem 0rem;
  display: flex;
  justify-content: space-between;
  a {
    font-size: 0.8rem;
    text-align: center;
    max-width: 8rem;
    background-color: var(--base);
    border-radius: 0.3rem;
    padding: 0.4rem 0.8rem;
  }
`;

const StyledPatient = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1.5fr 1fr 1.3fr;
  border-bottom: 1px solid var(--base);
`;

export default function Patients() {
  const { data, error, loading } = useQuery(ALL_PATIENTS_QUERY);
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <>
      {data.allPatients.map((patient) => (
        <StyledPatient key={patient.name}>
          <p>{patient.name}</p>
          <p>{patient.surname}</p>
          <p>{patient.disease}</p>
          <p>{patient.doctor?.name}</p>
          <StyledLink>
            <Link href={`/patients/${patient.id}`}>More details</Link>
            <Link
              href={{
                pathname: 'updatePatient',
                query: {
                  id: patient.id,
                },
              }}
            >
              Edit
            </Link>
          </StyledLink>
        </StyledPatient>
      ))}
    </>
  );
}
