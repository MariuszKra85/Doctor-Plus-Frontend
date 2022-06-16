import styled from 'styled-components';
import { BarsProgress, Bell, Message, Task } from './Icon';

const TopPanelWrapper = styled.section`
  background: var(--navy);
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4rem;
  button {
    background: none;
    border: none;
    margin-left: 0.2rem;
    font-size: 2.2rem;
    color: var(--offWhite);
    transition: all 0.5s;
  }
  button:hover {
    background-color: #f9f9f9;
    border-radius: 10%;
    color: var(--navy);
  }
  nav {
    display: flex;
  }
  a {
    color: var(--offWhite);
    font-size: 1.6rem;
    margin-right: 0.4rem;
    svg {
      margin-top: 0.8rem;
    }

    span {
      display: flex;
      margin-top: 0.2rem;
      color: var(--darkgrey);
      font-size: 1rem;
      padding: 0.6rem 0.4rem;
      border-radius: 60%;
      background-color: var(--offWhite);
    }
  }
`;

const buttonFun = () => console.log('click');

const TopPanel = () => (
  <TopPanelWrapper>
    <button type="button" onClick={buttonFun}>
      <Task />
    </button>
    <nav>
      <a href="/task">
        <BarsProgress />
      </a>

      <a href="/doctor">
        <Bell />
      </a>
      <a href="/message">
        <Message />
      </a>
      <a href="/">
        <span>MK</span>
      </a>
    </nav>
  </TopPanelWrapper>
);
export default TopPanel;
