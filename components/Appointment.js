import gql from 'graphql-tag';
import { useQuery } from '@apollo/client/react/hooks';
import Link from 'next/link';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const ALL_APPOINTMENTS_QUERY = gql`
  query {
    allAppointments {
      id
      name
      room
      doctor {
        name
      }
    }
  }
`;

const Wrapper = styled.div`
  margin-left: 1rem;
  a {
    font-size: 0.8rem;
    text-align: center;
    max-width: 8rem;
    background-color: var(--base);
    border-radius: 0.3rem;
    padding: 0.4rem 0.8rem;
  }
  div {
    margin-bottom: 1rem;
  }
`;

export default function Appointments() {
  const { data, error, loading } = useQuery(ALL_APPOINTMENTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorMessage error={error} />;
  console.log(data);
  return (
    <Wrapper>
      <h1>Appointments:</h1>
      {data.allAppointments.map((ap) => (
        <div>
          <h2>{ap.name}</h2>
          <p>{ap.room}</p>
          <p>{ap.doctor?.name}</p>

          <Link href={`/updateAppointment/${ap.id}`}>Edit...</Link>
        </div>
      ))}
      <Link href="/createAppointment"> + add Appointment</Link>
    </Wrapper>
  );
}
