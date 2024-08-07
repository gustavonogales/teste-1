import { render } from '~/testUtils';
import { Button } from './Button';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

const theme = {
  colors: {
    primary: '#007BFF',
    onPrimary: '#FFFFFF',
  },
  shadows: {
    button: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

describe('Button component', () => {
  it('renders correctly with theme styles', () => {
    render(<Button>Test</Button>, { theme });
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Test');
    expect(buttonElement).toHaveStyleRule(
      'background-color',
      theme.colors.primary,
    );
    expect(buttonElement).toHaveStyleRule('color', theme.colors.onPrimary);
    expect(buttonElement).toHaveStyleRule('box-shadow', theme.shadows.button);
    expect(buttonElement).toHaveStyleRule('border-radius', '36px');
    expect(buttonElement).toHaveStyleRule('padding', '8px 32px');
    expect(buttonElement).toHaveStyleRule('height', '56px');
    expect(buttonElement).toHaveStyleRule('font-size', '16px');
    expect(buttonElement).toHaveStyleRule('font-weight', '600');
    expect(buttonElement).toHaveStyleRule('cursor', 'pointer');
    expect(buttonElement).toHaveStyleRule('display', 'flex');
    expect(buttonElement).toHaveStyleRule('align-items', 'center');
    expect(buttonElement).toHaveStyleRule('border', 'none');
  });
});
