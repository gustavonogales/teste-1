import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { IconButton, Button } from "~/components/Buttons";
import { TextField } from "~/components/TextField";
import routes from "~/router/routes";
import * as S from "./styles";
import { Spinner } from "~/components";

type SearchBarProps = {
  onRefetch: () => void;
  isRefetching: boolean;
}

export const SearchBar = ({ onRefetch, isRefetching }: SearchBarProps) => {
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };
  
  return (
    <S.Container>
      <div>
        <TextField placeholder="Digite um CPF válido" />
        {isRefetching && <Spinner/>}
      </div>
      <S.Actions>
        <IconButton aria-label="refetch" onClick={onRefetch}>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
