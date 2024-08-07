import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { ModalProvider } from './contexts/ModalContext';
import GlobalStyles from './styles/GlobalStyles';
import ErrorBoundary from './pages/ErrorBoundary';
import { ToastProvider } from './contexts/ToastContext';

const AllTheProviders = ({
  children,
  customTheme = theme,
}: {
  children: React.ReactNode;
  customTheme: Object;
}) => {
  return (
    <ThemeProvider theme={customTheme}>
      <GlobalStyles />
      <ErrorBoundary>
        <ModalProvider>
          <ToastProvider>{children}</ToastProvider>
        </ModalProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & { theme?: any },
) => {
  const { theme: customTheme, ...restOptions } = options || {};
  return render(ui, {
    wrapper: (props) => (
      <AllTheProviders {...props} customTheme={customTheme} />
    ),
    ...restOptions,
  });
};

export { customRender as render };
