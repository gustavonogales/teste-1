import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { Loading } from "./loading";
import { useRegistrations } from "~/hooks/useRegistrations";

const DashboardPage = () => {
  const {data, isLoading, refetch, isRefetching } =  useRegistrations()

  return (
    <S.Container>
      <SearchBar isRefetching={isRefetching} onRefetch={() => refetch()} />
      { isLoading ? <Loading /> : <Collumns registrations={data} /> }
    </S.Container>
  );
};
export default DashboardPage;
