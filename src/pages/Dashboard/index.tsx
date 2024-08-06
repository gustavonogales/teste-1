import Columns from "./components/Columns";
import SearchBar from "./components/Searchbar";
import * as S from "./styles";
import { Loading } from "./loading";
import { useRegistrations } from "~/hooks/useRegistrations";

const DashboardPage = () => {
  const { isLoading, data } = useRegistrations()

  return (
    <S.Container>
      <SearchBar />
      { isLoading ? <Loading /> : <Columns registrations={data} /> }
    </S.Container>
  );
};
export default DashboardPage;
