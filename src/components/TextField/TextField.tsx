import { InputHTMLAttributes } from "react";
import { StyledErrorText, StyledInput } from "./TextField.styles";

export type TextFieldProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = (props: TextFieldProps) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <StyledInput {...props} />
      <StyledErrorText>{props.error}</StyledErrorText>
    </div>
  );
};
