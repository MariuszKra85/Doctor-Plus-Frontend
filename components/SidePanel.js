import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';

const SidePanelWrapper = styled.section`
  height: 100vh;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  nav {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
`;

const SidePanel = () => (
  <SidePanelWrapper>
    <Logo />
    <div>name doctor picture</div>
    <nav>
      <Link href="/">Dashboard</Link>
      <Link href="/">Doctor</Link>
      <Link href="/">Patient</Link>
      <Link href="/">Appointment</Link>
      <Link href="/">Raport</Link>
    </nav>
  </SidePanelWrapper>
);
export default SidePanel;
