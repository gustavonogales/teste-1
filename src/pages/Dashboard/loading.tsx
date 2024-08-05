import { Skeleton } from "~/components";
import * as S from "./styles";

export const Loading = () => {
  return (
    <S.LoadingGrid>
      <Skeleton height="80vh" />
      <Skeleton height="80vh" />
      <Skeleton height="80vh" />
    </S.LoadingGrid>
  );
}