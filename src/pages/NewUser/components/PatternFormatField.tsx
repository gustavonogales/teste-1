import { useField } from "formik";
import { PatternFormat } from "react-number-format";
import { TextField, TextFieldProps } from "~/components/TextField/TextField";
import { ValidationSchema, ValidationSchemaErrors } from "../validationSchema";

type PatternFormatFieldProps = TextFieldProps & {
  name: keyof ValidationSchema;
  errors: ValidationSchemaErrors;
}

export const PatternFormatField = (props: PatternFormatFieldProps) => {
  const [field, , helpers] = useField(props.name);

  return (
    <PatternFormat 
      label={props.label}
      placeholder={props.placeholder}
      format='###.###.###-##'
      value={field.value}
      mask="_"
      valueIsNumericString
      name={props.name}
      error={props.errors[props.name]}
      onValueChange={(change) => helpers.setValue(change.value)}
      customInput={TextField}
    />)
}
