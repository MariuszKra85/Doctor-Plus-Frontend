import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const StyledCard = styled.a`
  min-width: 300px;
  height: 10rem;
  width: 20vw;
  background-color: var(--base);
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  margin: 2rem;
  color: var(--offWhite);
  span {
    font-size: 1.8rem;
    margin-right: 2rem;
    transform: translateY(-0.1rem);
  }
  p {
    margin-left: 2rem;
    font-size: 1.2rem;
  }
  :hover {
    background-color: var(--dark);
  }
`;

const Card = ({ name, counter, link }) => (
  <StyledCard href={link}>
    <p>{name}</p>
    <span>{counter}</span>
  </StyledCard>
);
export default Card;

Card.propTypes = {
  name: PropTypes.any,
  counter: PropTypes.any,
  link: PropTypes.any,
};
