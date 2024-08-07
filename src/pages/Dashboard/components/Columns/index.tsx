import * as S from './styles';
import RegistrationCard from '../RegistrationCard';
import { Registration, RegistrationStatus } from '~/types/Registration';

const allColumns = [
  { status: RegistrationStatus.REVIEW, title: 'Pronto para revisar' },
  { status: RegistrationStatus.APPROVED, title: 'Aprovado' },
  { status: RegistrationStatus.REPROVED, title: 'Reprovado' },
];

type CollumnsProps = {
  registrations?: Registration[];
};

const Columns = ({ registrations }: CollumnsProps) => {
  return (
    <S.Container>
      {allColumns.map((column) => {
        return (
          <S.Column $status={column.status} key={column.title}>
            <>
              <S.TitleColumn $status={column.status}>
                {column.title}
              </S.TitleColumn>
              <S.CollumContent data-testci={`column-${column.status}`}>
                {registrations
                  ?.filter(
                    (registration) => registration.status === column.status,
                  )
                  .map((registration) => {
                    return (
                      <RegistrationCard
                        data={registration}
                        key={registration.id}
                      />
                    );
                  })}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Columns;
