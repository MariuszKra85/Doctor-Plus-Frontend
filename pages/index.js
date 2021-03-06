import gql from 'graphql-tag';
import styled from 'styled-components';
import { useQuery } from '@apollo/client/react';
import Card from '../components/Card';

const ALL_DATA_LENGTH_QUERY = gql`
  query {
    allUsers {
      name
    }
    allPatients {
      name
    }
    allAppointments {
      name
    }
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 2rem;
`;

const Index = () => {
  const { data, error, loading } = useQuery(ALL_DATA_LENGTH_QUERY);

  if (error) return <p>error</p>;
  if (loading) return <p>Loading...</p>;

  const doctorLength = data.allUsers.length;
  const patientLength = data.allPatients.length;
  const appointmentLength = data.allAppointments.length;

  return (
    <CardsWrapper>
      <Card name="Doctors" counter={doctorLength} link="/doctors/" />
      <Card name="Patients" counter={patientLength} link="/patients" />
      <Card
        name="Appointments"
        counter={appointmentLength}
        link="/appointment"
      />
    </CardsWrapper>
  );
};

export default Index;
