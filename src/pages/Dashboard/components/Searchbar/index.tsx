import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { IconButton, Button } from "~/components/Buttons";
import { TextField } from "~/components/TextField";
import routes from "~/router/routes";
import * as S from "./styles";
import { Spinner } from "~/components";
import { useRegistrations } from "~/hooks/useRegistrations";
import { PatternFormat } from "react-number-format";
import { cpfValidator } from "~/utils/cpfValidator";

const SearchBar = () => {
  const { refetch, search, isRefetching } = useRegistrations()
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const handleSearch = (value: string) => {
    if(cpfValidator(value) || !value.length) {
      search(value)
    }
  }
  
  return (
    <S.Container>
      <div>
        <PatternFormat 
          format='###.###.###-##'
          label="Pesquisar por CPF"
          mask="_"
          valueIsNumericString
          customInput={TextField}
          onValueChange={(change) => handleSearch(change.value)}
        />
        {isRefetching && <Spinner/>}
      </div>
      <S.Actions>
        <IconButton aria-label="refetch" onClick={refetch}>
          <HiRefresh />
        </IconButton>
        <Button onClick={goToNewAdmissionPage}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBar