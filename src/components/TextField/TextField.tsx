import { InputHTMLAttributes } from "react";
import { StyledErrorText, StyledInput } from "./TextField.styles";

export type TextFieldProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = ({error, ...props}: TextFieldProps) => {
  return (
    <div>
      <label htmlFor={props.id ?? props.name}>{props.label}</label>
      <StyledInput {...props} />
      <StyledErrorText>{error}</StyledErrorText>
    </div>
  );
};
