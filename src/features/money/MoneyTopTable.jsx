import styled from "styled-components";
import Table from "../../components/Table";
import { useTranslation } from "react-i18next";
import MoneyTopTableRow from "./MoneyTopTableRow";

const StyledMoneyTopLayout = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 1rem;
`;

const data = [
  {
    key: "guests",
    family: 100,
    friend: 20,
    colleagues: 15,
    relatives: 20,
    others: 20,
  },
  {
    key: "money",
    family: 100000000,
    friend: 2000000,
    colleagues: 15000000,
    relatives: 2000000,
    others: 20000000,
  },
];

function MoneyTopTable() {
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
          data={data}
          render={(info) => (
            <MoneyTopTableRow key={info.key} info={info} t={t} />
          )}
        ></Table.Body>
      </Table>
    </StyledMoneyTopLayout>
  );
}

export default MoneyTopTable;
