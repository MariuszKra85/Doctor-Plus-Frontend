import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import Link from 'next/link';

const StyledCard = styled.div`
  min-width: 300px;
  height: 6rem;
  width: 30%;
  background-color: var(--base);
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  margin: 2rem;
  color: var(--offWhite);
  div {
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 0.4fr;
    p {
      margin-left: 2rem;
      font-size: 1.2rem;
    }
  }

  :hover {
    background-color: var(--dark);
    height: 7rem;
  }
`;

const Card = ({ name, counter, link }) => (
  <StyledCard>
    <Link href={link}>
      <div>
        <p>{name}</p>
        <p>{counter}</p>
      </div>
    </Link>
  </StyledCard>
);
export default Card;

Card.propTypes = {
  name: PropTypes.any,
  counter: PropTypes.any,
  link: PropTypes.any,
};
