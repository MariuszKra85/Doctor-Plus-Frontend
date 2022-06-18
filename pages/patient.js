import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

const ALL_PATIENTS_QUERY = gql`
  query {
    allPatients {
      name
      surname
      doctor {
        name
      }
      disease
    }
  }
`;

const StyledHeadrer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1.5fr 1fr;
  border-bottom: 2px solid var(--base);
  padding: 0 2rem;
`;

const StyledPatient = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1.5fr 1fr;
  border-bottom: 1px solid var(--base);
`;

const Patient = () => {
  const { data, error, loading } = useQuery(ALL_PATIENTS_QUERY);
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <div>
      <StyledHeadrer>
        <p>Name</p>
        <p>Surname</p>
        <p>Disease</p>
        <p>Doctor</p>
      </StyledHeadrer>
      {data.allPatients.map((patient) => (
        <StyledPatient key={patient.name}>
          <p>{patient.name}</p>
          <p>{patient.surname}</p>
          <p>{patient.disease}</p>
          <p>{patient.doctor.name}</p>
        </StyledPatient>
      ))}
    </div>
  );
};

export default Patient;
