import { useQuery } from '@apollo/client/';
import gql from 'graphql-tag';
import styled from 'styled-components';

const ALL_DOCTORS_QUERY = gql`
  query {
    allUsers {
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

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
const StyledPerson = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
  border-bottom: 2px solid var(--base);
`;

const Doctors = () => {
  const { data, error, loading } = useQuery(ALL_DOCTORS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <div>
      <div>Number of doctors: {data ? data.allUsers.length : null}</div>
      {data.allUsers.map((user) => (
        <StyledPerson>
          {user.photo ? (
            <Avatar src={user.photo.image.publicUrl} alt="" />
          ) : (
            <div>No image!!</div>
          )}
          <p>{user.name}</p>
          <p>{user.surname}</p>
        </StyledPerson>
      ))}
    </div>
  );
};

export default Doctors;
