import styled, { createGlobalStyle } from 'styled-components';
import { PropTypes } from 'prop-types';
import SidePanel from './SidePanel';
import TopPanel from './TopPannel';
import GlobalStyle from './GlobalStyle';

const PageWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 12rem auto;
`;

const Page = ({ children }) => (
  <PageWrapper>
    <GlobalStyle />
    <SidePanel />
    <div>
      <TopPanel />
      {children}
    </div>
  </PageWrapper>
);

Page.propTypes = {
  children: PropTypes.object,
};

export default Page;
