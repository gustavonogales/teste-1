import { render } from '~/testUtils';
import { IconButton } from './IconButton';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

describe('IconButton component', () => {
  it('renders correctly with default styles', () => {
    render(<IconButton>Test Button</IconButton>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyleRule('cursor', 'pointer');
    expect(buttonElement).toHaveStyleRule('border-radius', '24px');
    expect(buttonElement).toHaveStyleRule('background-color', 'transparent');
  });

  it('applies theme colors correctly', () => {
    const theme = {
      colors: {
        primary: '#007BFF',
      },
    };
    render(<IconButton>Test Button</IconButton>, { theme });
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyleRule('border', `2px solid ${theme.colors.primary}`);
    expect(buttonElement).toHaveStyleRule('color', theme.colors.primary, {
      modifier: 'svg',
    });
  });
});