import { describe, it, expect } from 'vitest';
import { Header } from './Header';
import { ThemeProvider } from 'styled-components';
import theme from '~/styles/theme';
import { render } from '~/testUtils';

describe('Header component', () => {
  it('renders the title correctly', () => {
    const title = 'Test Title';
    const component = render(
      <ThemeProvider theme={theme}>
        <Header title={title} />
      </ThemeProvider>,
    );
    const headingElement = component.getByText(title);
    expect(headingElement).toBeInTheDocument();
    expect(headingElement.tagName).toBe('H1');
  });
});
