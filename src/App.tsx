import Router from "~/router";
import { Header } from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header title="Caju Front Teste"/>
      <Router />
    </ThemeProvider>
  );
}

export default App;
