import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Head from 'next/head';
import ErrorMessage from './ErrorMessage';

const SINGLE_DOCTOR_QUERY = gql`
  query SINGLE_DOCTOR_QUERY($id: ID!) {
    User(where: { id: $id }) {
      id
      name
      surname
      patient {
        name
      }
      appointment {
        name
      }
      email
      role

      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  margin-left: 2rem;
`;
const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 2rem;
`;

const SingleDoctor = ({ id }) => {
  console.log(id);
  const { data, error, loading } = useQuery(SINGLE_DOCTOR_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>loading...</p>;
  if (error) return <ErrorMessage error={error} />;
  const { User } = data;
  console.log(User);
  return (
    <Wrapper>
      <Head>
        <title>Doctor | {User.name}</title>
      </Head>
      {User.photo ? (
        <Avatar src={User.photo.image.publicUrlTransformed} alt={User.name} />
      ) : (
        <Avatar src="" alt="No image!!" />
      )}
      <p>Doctor Name: {User.name}</p>
      <p>Surname: {User.surname}</p>
      <p>Role: {User.role}</p>
      <p>Email {User.email}</p>
      <p>
        {' '}
        Outgoing Patients:{' '}
        {User.patient?.map((e) => (
          <p>{e.name}</p>
        ))}
      </p>
      <p>Outgoing Appointment: {User.appointment?.name}</p>
    </Wrapper>
  );
};

export default SingleDoctor;
