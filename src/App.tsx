import Router from "~/router";
import { Header } from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RegistrationsProvider } from "./contexts/RegistrationsContext";
import ErrorBoundary from "./pages/ErrorBoundary";
import { ModalProvider } from "./contexts/ModalContext";

export const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary>
        <Header title="Caju Front Teste"/>
        <QueryClientProvider client={queryClient}>
          <RegistrationsProvider>
            <ModalProvider>
              <Router />
            </ModalProvider>
          </RegistrationsProvider>
          {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
