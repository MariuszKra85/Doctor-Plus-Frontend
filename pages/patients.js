import styled from 'styled-components';
import Link from 'next/link';
import Patients from '../components/Patients';

const StyledHeadrer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1.5fr 1fr 1.3fr;
  border-bottom: 2px solid var(--base);
  padding: 0 2rem;
`;
const StyledLink = styled.div`
  margin: 2rem 1rem;
  a {
    font-size: 0.9rem;
    text-align: center;
    max-width: 8rem;
    background-color: var(--base);
    border-radius: 0.3rem;
    padding: 0.4rem 0.8rem;
  }
`;

const Patient = () => (
  <div>
    <StyledHeadrer>
      <p>Name</p>
      <p>Surname</p>
      <p>Disease</p>
      <p>Doctor</p>
      <p>Action</p>
    </StyledHeadrer>
    <Patients />
    <StyledLink>
      <Link href="/createPatient">+ Add Patient</Link>
    </StyledLink>
  </div>
);

export default Patient;
