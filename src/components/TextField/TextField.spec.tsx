import { describe, expect, it } from 'vitest';
import { TextField } from './TextField';
import { render } from '~/testUtils';
import { screen } from '@testing-library/react';

const theme = {
  colors: {
    bg: '#fff',
    focus: '#007bff',
  },
};

describe('TextField component', () => {
  it('renders with a label', () => {
    render(<TextField label="Name" />);

    const label = screen.getByText(/name/i);
    const input = screen.getByRole('textbox');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('renders an input field with correct attributes', () => {
    render(<TextField id="name" placeholder="Enter your name" />);

    const input = screen.getByPlaceholderText(/enter your name/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'name');
  });

  it('displays error message when error prop is provided', () => {
    render(<TextField error="This field is required" />);

    const errorText = screen.getByText(/this field is required/i);
    expect(errorText).toBeInTheDocument();
    expect(errorText).toHaveStyleRule('font-size', '12px');
    expect(errorText).toHaveStyleRule('color', 'red');
  });

  it('applies focus styles correctly', () => {
    render(<TextField id="name" data-testid="textField" />, { theme });

    const input = screen.getByRole('textbox');
    input.focus();

    expect(input).toHaveStyle(`border: 1px solid ${theme.colors.focus}`);
    expect(input).toHaveStyle(
      `box-shadow: inset 0 0 0 1px ${theme.colors.focus}`,
    );
  });
});
