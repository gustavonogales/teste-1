import Collumns from "./components/Columns";
import SearchBar from "./components/Searchbar";
import * as S from "./styles";
import { Loading } from "./loading";
import { useRegistrationsContext } from "~/contexts/RegistrationsContext";

const DashboardPage = () => {
  const { isLoading, data } = useRegistrationsContext()

  return (
    <S.Container>
      <SearchBar />
      { isLoading ? <Loading /> : <Collumns registrations={data} /> }
    </S.Container>
  );
};
export default DashboardPage;
