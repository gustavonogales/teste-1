import { StyledSkeleton } from './Skeleton.styles';

export interface SkeletonProps {
  width?: string;
  height?: string;
}

export const Skeleton = ({ width, height }: SkeletonProps) => {
  return <StyledSkeleton width={width} height={height} />;
};
