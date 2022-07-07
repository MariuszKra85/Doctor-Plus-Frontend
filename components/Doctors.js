import { useQuery } from '@apollo/client/';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Doctor from './Doctor';
import { perPage } from '../config';

const ALL_DOCTORS_QUERY = gql`
  query ALL_DOCTORS_QUERY($skip: Int = 0, $first: Int) {
    allUsers(first: $first, skip: $skip) {
      id
      name
      surname
      photo {
        image {
          publicUrl
        }
      }
    }
  }
`;
const AddButton = styled.button`
  background-color: var(--base);
  border: none;
  border-radius: 0.6em;
  padding: 1rem;
  margin: 1rem;
`;

const Doctors = ({ page }) => {
  const { data, error, loading } = useQuery(ALL_DOCTORS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <div>
      <div>Number of doctors: {data ? data.allUsers.length : null}</div>
      <AddButton>+ Add Doctor</AddButton>
      {data.allUsers.map((user) => (
        <Doctor user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Doctors;
