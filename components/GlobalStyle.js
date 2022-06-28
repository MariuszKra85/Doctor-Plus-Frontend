import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face{
  font-family: 'radnika_next';
  src: url('/static/radnikanext-medium-webfont.woff2')
  format('woff2');
  font-weight: normal;
  font-style: normal;

}
html{
  --navy: #2b3f54;
  --darkgrey: #2C3438;
  --dark: #171817;
  --base: #009688;
  --offWhite: #c6c6c6;
  --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.1);

  font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.5;
}
body{
  margin: 0;
}
a{
  text-decoration: none;
  color: var(--white)
}
button{
  font-family: 'radnika_next', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
ul{
  list-style: none;
  margin: 0;
}
`;

export default GlobalStyle;
