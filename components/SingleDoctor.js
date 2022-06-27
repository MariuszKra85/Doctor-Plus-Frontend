import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const SINGLE_DOCTOR_QUERY = gql`
  query {
    User(where: { id: "62ac51c7fa7fb30600d02d6a" }) {
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

const Wrapper = styled.div``;
const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 2rem;
`;

const SingleDoctor = () => {
  const { data, error, loading } = useQuery(SINGLE_DOCTOR_QUERY);

  if (loading) return <p>loading...</p>;
  if (error) return <ErrorMessage error={error} />;
  const { User } = data;
  return (
    <div>
      {User.photo ? (
        <Avatar src={User.photo.image.publicUrlTransformed} alt={User.name} />
      ) : (
        <Avatar src="" alt="No image!!" />
      )}
      <p>Doctor Name: {User.name}</p>
      <p>Surname: {User.surname}</p>
      <p>Role: {User.role}</p>
      <p>Email {User.email}</p>
      <p> Outgoing Patients: </p>
      <p>Outgoing Appointment: {User.appointment.name}</p>
    </div>
  );
};

export default SingleDoctor;
