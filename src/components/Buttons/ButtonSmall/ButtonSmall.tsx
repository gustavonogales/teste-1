import { StyledButtonSmall } from "./ButtonSmall.styles";

export type Variant = 'error' | 'success' | 'warning' 

type ButtonSmallProps = {
  variant: Variant
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonSmall = ({variant, ...props}: ButtonSmallProps) => {
  return <StyledButtonSmall  {...props} $variant={variant}  />
}