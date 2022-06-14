import Link from 'next/link';
import styled from 'styled-components';
import {
  faTasks,
  faBarsProgress,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Task } from './Icon';

const TopPanelWrapper = styled.section`
  background: var(--nave, #2b3f54);
  button {
    background: none;
    border: none;
    font-size: 2.2rem;
    color: var(--offWhite);
  }
  a {
    color: var(--offWhite);
  }
`;

const TopPanel = () => (
  <TopPanelWrapper>
    <button>
      <FontAwesomeIcon icon={faTasks} />
    </button>
    <nav>
      <Link href="/">
        <Task />
      </Link>
      <Link href="/">
        <FontAwesomeIcon icon={faBell} />
      </Link>
      <Link href="/">massage</Link>
      <Link href="/">avatar</Link>
    </nav>
  </TopPanelWrapper>
);
export default TopPanel;
