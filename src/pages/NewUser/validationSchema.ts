import { FormikErrors } from 'formik';
import * as Yup from 'yup';
import { cpfValidator } from '~/utils/cpfValidator';

export const validationSchema = Yup.object().shape({
  employeeName: Yup.string()
    .matches(
      /^[^\d\s]+.*\s+.*$/,
      'Nome deve conter pelo menos um espaço e não pode começar com um número',
    )
    .required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  cpf: Yup.string()
    .test('cpf-validator', 'CPF inválido', (value) => cpfValidator(value || ''))
    .required('CPF é obrigatório'),
  admissionDate: Yup.date().required('Data de admissão é obrigatória'),
});

export type ValidationSchema = Omit<
  Yup.InferType<typeof validationSchema>,
  'admissionDate'
> & { admissionDate: string };
export type ValidationSchemaErrors = FormikErrors<ValidationSchema>;
