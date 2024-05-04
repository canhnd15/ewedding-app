import styled from "styled-components";
import Table from "../../components/Table";
import { useTranslation } from "react-i18next";
import MoneyTopTableRow from "./MoneyTopTableRow";
import {
  COLLEAGUES_TAG,
  FAMILY_TAG,
  FRIEND_TAG,
  OTHERS_TAG,
  RELATIVES_TAG,
} from "../../utils/constants";
import Spinner from "../../components/Spinner";
import { useMoneyCounter } from "./useMoneyCounter";

const StyledMoneyTopLayout = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 1rem;
`;

function MoneyTopTable({ userId, setTotal }) {
  const { t } = useTranslation();
  const { results, isLoading } = useMoneyCounter(userId);

  if (isLoading) return <Spinner />;

  let data = [];
  const friend = results.find((res) => res.tags === FRIEND_TAG);
  const family = results.find((res) => res.tags === FAMILY_TAG);
  const colleagues = results.find((res) => res.tags === COLLEAGUES_TAG);
  const relatives = results.find((res) => res.tags === RELATIVES_TAG);
  const others = results.find((res) => res.tags === OTHERS_TAG);
  const total = results.find((res) => res.tags === null);

  console.log(family);

  data.push(
    {
      key: "guests",
      family: family.total_guests ? family.total_guests : 0,
      friend: friend !== undefined ? friend.total_guests : 0,
      colleagues: colleagues !== undefined ? colleagues.total_guests : 0,
      relatives: relatives !== undefined ? relatives.total_guests : 0,
      others: others !== undefined ? others.total_guests : 0,
      total: total !== undefined ? total.total_guests : 0,
    },
    {
      key: "money",
      family: family !== undefined ? family.take_money : 0,
      friend: friend !== undefined ? friend.take_money : 0,
      colleagues: colleagues !== undefined ? colleagues.take_money : 0,
      relatives: relatives !== undefined ? relatives.take_money : 0,
      others: others !== undefined ? others.take_money : 0,
      total: total !== undefined ? total.take_money : 0,
    }
  );

  setTotal(total);

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
