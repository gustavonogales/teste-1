import { render } from '~/testUtils'
import { ButtonSmall, Variant } from './ButtonSmall';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

const theme = {
  colors: {
    error: '#FF0000',
    success: '#00FF00',
    warning: '#FFFF00',
    fg: '#FFFFFF',
  },
};

describe('ButtonSmall component', () => {
  const variants: Variant[] = ['error', 'success', 'warning'];

  variants.forEach((variant) => {
    it(`renders correctly with ${variant} variant`, () => {
      render(<ButtonSmall variant={variant}>Test</ButtonSmall>, { theme });
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveStyleRule('background-color', theme.colors[variant]);
      expect(buttonElement).toHaveStyleRule('color', theme.colors.fg);
      expect(buttonElement).toHaveStyleRule('font-size', '12px');
      expect(buttonElement).toHaveStyleRule('border-radius', '4px');
    });
  });
});
