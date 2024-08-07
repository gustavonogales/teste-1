import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

const Styles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.fonts.family};
    background-color: ${(props) => props.theme.colors.bg};
  }
`;

const GlobalStyles = () => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Styles />
  </>
);

export default GlobalStyles;
