import styled from "styled-components";
import Table from "../../components/Table";
import { useTranslation } from "react-i18next";
import MoneyTopTableRow from "./MoneyTopTableRow";

const StyledMoneyTopLayout = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 1rem;
`;

function MoneyTopTable({ result }) {
  const { t } = useTranslation();

  return (
    <StyledMoneyTopLayout>
      <Table columns="150px 130px 130px 130px 130px 130px 150px">
        <Table.Header>
          <div></div>
          <div>{t("guestFilterFriend")}</div>
          <div>{t("guestFilterFamily")}</div>
          <div>{t("guestFilterColleague")}</div>
          <div>{t("guestFilterRelatives")}</div>
          <div>{t("guestFilterOthers")}</div>
          <div>{t("total")}</div>
        </Table.Header>
        <Table.Body
          data={result}
          render={(info) => (
            <MoneyTopTableRow key={info.key} info={info} t={t} />
          )}
        ></Table.Body>
      </Table>
    </StyledMoneyTopLayout>
  );
}

export default MoneyTopTable;
