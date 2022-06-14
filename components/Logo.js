import styled from 'styled-components';

const StyledLogo = styled.h1`
  font-size: 1.7rem;
  font-weight: 500;
  color: var(--offWhite);
  background: var(--darkgrey);
  padding: 1.2rem;
  margin: 0;
  span {
    font-size: 1rem;
    color: red;
  }
`;
const Logo = () => (
  <StyledLogo>
    Doctor <span>Plus</span>
  </StyledLogo>
);
export default Logo;
