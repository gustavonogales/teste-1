import { TextField, IconButton, Button } from '~/components';
import * as S from './styles';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import routes from '~/router/routes';
import { Formik, Field } from 'formik';
import { useRegistrations } from '~/hooks/useRegistrations';
import { PatternFormatField } from './components/PatternFormatField';
import { ValidationSchema, validationSchema } from './validationSchema';
import { formatDate } from '~/utils/formatDate';

const NewUserPage = () => {
  const { create } = useRegistrations();
  const history = useHistory();

  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const handleSubmit = (values: ValidationSchema) => {
    create({
      ...values,
      admissionDate: formatDate(values.admissionDate),
    }).then(() => goToHome());
  };

  return (
    <S.Container>
      <S.Card>
        <IconButton onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <Formik
          initialValues={{
            employeeName: '',
            email: '',
            cpf: '',
            admissionDate: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <S.Form>
              <Field
                as={TextField}
                placeholder="Nome"
                label="Nome"
                name="employeeName"
                error={errors['employeeName']}
              />
              <Field
                as={TextField}
                placeholder="Email"
                label="Email"
                type="email"
                name="email"
                error={errors['email']}
              />
              <PatternFormatField
                name="cpf"
                placeholder="CPF"
                label="CPF"
                errors={errors}
              />
              <Field
                as={TextField}
                label="Data de admissão"
                type="date"
                name="admissionDate"
                error={errors['admissionDate']}
              />
              <Button type="submit" disabled={isSubmitting}>
                Cadastrar
              </Button>
            </S.Form>
          )}
        </Formik>
      </S.Card>
    </S.Container>
  );
};

export default NewUserPage;
