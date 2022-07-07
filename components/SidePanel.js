import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';

const SidePanelWrapper = styled.section`
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--offWhite);

  nav {
    display: flex;
    flex-direction: column;
    a {
      padding-left: 1rem;
      display: flex;
      height: 3rem;
      align-items: center;
      transition: all 0.3s ease-in-out;
      :hover {
        background-color: var(--base);
      }
    }
  }
`;

const SidePanel = () => (
  <SidePanelWrapper>
    <Logo />
    <div>name doctor picture</div>
    <nav>
      <Link href="/">Dashboard</Link>
      <Link href="/doctorsPage/">Doctors</Link>
      <Link href="/patients">Patients</Link>
      <Link href="/appointment">Appointment</Link>
      <Link href="/raport">Raport</Link>
    </nav>
  </SidePanelWrapper>
);
export default SidePanel;
