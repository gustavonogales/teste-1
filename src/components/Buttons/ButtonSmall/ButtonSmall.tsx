import { StyledButtonSmall } from "./ButtonSmall.styles";

export type ButtonSmallProps = {
  variant: 'error' | 'success' | 'warning'
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonSmall = (props: ButtonSmallProps) => {
  return <StyledButtonSmall  {...props}  />
}