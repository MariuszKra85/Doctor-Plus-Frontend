import styled from 'styled-components';
import PropTypes from 'prop-types';

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 2rem;
`;
const StyledPerson = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--base);
`;

const Doctor = ({ user }) => (
  <StyledPerson>
    {user.photo ? (
      <Avatar src={user.photo.image.publicUrl} alt="" />
    ) : (
      <Avatar src="" alt="No image!!" />
    )}
    <div>
      <p>{user.name}</p>
      <p>{user.surname}</p>
    </div>
  </StyledPerson>
);

Doctor.propTypes = {
  user: PropTypes.object,
};

export default Doctor;
