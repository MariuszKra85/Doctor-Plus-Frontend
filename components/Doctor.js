import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
const StyledPerson = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: start;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--base);
  margin-left: 2rem;
  gap: 1rem;
  a {
    font-size: 0.9rem;
    text-align: center;
    max-width: 6rem;
    background-color: var(--base);
    border-radius: 0.3rem;
    padding: 0.2rem 0.8rem;
  }
`;

const Doctor = ({ user }) => (
  <StyledPerson>
    {user.photo ? (
      <Avatar src={user.photo.image.publicUrl} alt={user.name} />
    ) : (
      <Avatar src="" alt="No image!!" />
    )}
    <div>
      <p>{user.name}</p>
      <p>{user.surname}</p>
    </div>
    <Link
      href={{
        pathname: 'update',
        query: {
          id: user.id,
        },
      }}
    >
      Edit
    </Link>
    <Link href={`/doctors/${user.id}`}>More details...</Link>
  </StyledPerson>
);

Doctor.propTypes = {
  user: PropTypes.object,
};

export default Doctor;
