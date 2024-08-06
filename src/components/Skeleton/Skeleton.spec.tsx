import { render } from '~/testUtils';
import { Skeleton } from './Skeleton';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';

const theme = {
  gradients: {
    skeleton: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
  },
  colors: {
    primary: '#0070f3',
    onPrimary: '#ffffff',
  },
};

describe('Skeleton component', () => {
  it('renders correctly with default styles', () => {
    render(<Skeleton />, { theme });
    const skeletonElement = screen.getByTestId('skeleton');
    expect(skeletonElement).toBeInTheDocument();
    expect(skeletonElement).toHaveStyleRule('width', '100%');
    expect(skeletonElement).toHaveStyleRule('height', '20px');
    expect(skeletonElement).toHaveStyleRule('background', theme.gradients.skeleton);
    expect(skeletonElement).toHaveStyleRule('border-radius', '4px');
    expect(skeletonElement).toHaveStyleRule('animation', expect.stringContaining('0.8s infinite linear'));
  });

  it('renders correctly with custom width and height', () => {
    render(<Skeleton width="50px" height="50px" />, { theme });
    const skeletonElement = screen.getByTestId('skeleton');
    expect(skeletonElement).toBeInTheDocument();
    expect(skeletonElement).toHaveStyleRule('width', '50px');
    expect(skeletonElement).toHaveStyleRule('height', '50px');
  });
});