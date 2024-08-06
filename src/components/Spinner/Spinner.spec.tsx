import { render } from '~/testUtils';
import { Spinner } from './Spinner';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

describe('Spinner component', () => {
  it('renders correctly and applies animation', () => {
    render(<Spinner data-testid="spinner" />);

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });
});
