import { StyledSkeleton } from './Skeleton.styles';

export type SkeletonProps = {
  width?: string;
  height?: string;
};

export const Skeleton = ({ width, height }: SkeletonProps) => {
  return (
    <StyledSkeleton width={width} height={height} data-testid="skeleton" />
  );
};
