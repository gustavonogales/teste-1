import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { IconButton, Button } from "~/components/Buttons";
import { TextField } from "~/components/TextField";
import routes from "~/router/routes";
import * as S from "./styles";
import { Spinner } from "~/components";
import { useRegistrationsContext } from "~/contexts/RegistrationsContext";


const SearchBar = () => {
  const { refetch, search, isRefetching } = useRegistrationsContext()
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };
  
  return (
    <S.Container>
      <div>
        <TextField placeholder="Digite um CPF válido" onChange={e => search(e.target.value)} />
        {isRefetching && <Spinner/>}
      </div>
      <S.Actions>
        <IconButton aria-label="refetch" onClick={refetch}>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBar