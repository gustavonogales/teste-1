import { ButtonSmall } from '~/components';
import * as S from './styles';
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from 'react-icons/hi';
import { Registration, RegistrationStatus } from '~/types/Registration';
import { useRegistrations } from '~/hooks/useRegistrations';
import { useModal } from '~/hooks/useModal';

type RegistrationCardProps = {
  data: Registration;
};

const RegistrationCard = ({ data }: RegistrationCardProps) => {
  const {
    approve,
    reprove,
    review,
    delete: deleteMutation,
  } = useRegistrations();
  const { showModal } = useModal();
  const isReview = data.status === RegistrationStatus.REVIEW;
  const canBeReviewed =
    data.status === RegistrationStatus.REPROVED ||
    data.status === RegistrationStatus.APPROVED;

  const handleApprove = (data: Registration) => {
    showModal({
      title: 'Aprovar',
      content: `Tem certeza que deseja aprovar a admissão de ${data.employeeName}?`,
      onConfirm: () => approve(data),
    });
  };

  const handleReprove = (data: Registration) => {
    showModal({
      title: 'Reprovar',
      content: `Tem certeza que deseja reprovar a admissão de ${data.employeeName}?`,
      onConfirm: () => reprove(data),
    });
  };

  const handleReview = (data: Registration) => {
    showModal({
      title: 'Revisar novamente',
      content: `Tem certeza que deseja revisar a admissão de ${data.employeeName}?`,
      onConfirm: () => review(data),
    });
  };

  const handleDelete = (data: Registration) => {
    showModal({
      title: 'Excluir',
      content: `Tem certeza que deseja excluir o registro?`,
      onConfirm: () => deleteMutation(data),
    });
  };

  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{data.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{data.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{data.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        {isReview && (
          <>
            <ButtonSmall variant="error" onClick={() => handleReprove(data)}>
              Reprovar
            </ButtonSmall>
            <ButtonSmall variant="success" onClick={() => handleApprove(data)}>
              Aprovar
            </ButtonSmall>
          </>
        )}
        {canBeReviewed && (
          <ButtonSmall variant="warning" onClick={() => handleReview(data)}>
            Revisar novamente
          </ButtonSmall>
        )}
        <HiOutlineTrash onClick={() => handleDelete(data)} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
