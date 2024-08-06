
import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import { Registration, RegistrationStatus } from "~/types/Registration";
import * as React from "react";

const allColumns = [
  { status: RegistrationStatus.REVIEW, title: "Pronto para revisar" },
  { status: RegistrationStatus.APPROVED, title: "Aprovado" },
  { status: RegistrationStatus.REPROVED, title: "Reprovado" },
];

type CollumnsProps = {
  registrations?: Registration[];
};

const Collumns = ({registrations}: CollumnsProps) => {
  return (
    <S.Container>
      {allColumns.map((column) => {
        return (
          <S.Column $status={column.status} key={column.title}>
            <>
              <S.TitleColumn $status={column.status}>
                {column.title}
              </S.TitleColumn>
              <S.CollumContent>
                {registrations?.filter(registration => registration.status === column.status).map((registration) => {
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
export default React.memo(Collumns);
