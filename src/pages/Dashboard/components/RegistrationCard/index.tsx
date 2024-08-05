import { ButtonSmall } from "~/components/Buttons";
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { Registration } from "~/types/Registration";

type RegistrationCardProps = {
  data: Registration;
};

const RegistrationCard = ({ data }: RegistrationCardProps) => {
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
        <ButtonSmall variant="error">Reprovar</ButtonSmall>
        <ButtonSmall variant="success">Aprovar</ButtonSmall>
        <ButtonSmall variant="warning">Revisar novamente</ButtonSmall>
        <HiOutlineTrash />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
