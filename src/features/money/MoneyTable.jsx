import { useTranslation } from "react-i18next";
import { useGuests } from "../guests/useGuests";
import Spinner from "../../components/Spinner";
import Menus from "../../components/Menus";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import MoneyRow from "./MoneyRow";

function MoneyTable({ userId }) {
  const { t } = useTranslation();
  const { guests, isLoading, count } = useGuests(userId);

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="180px 90px 130px 130px 120px 250px 50px">
        <Table.Header>
          <div>{t("guestTableHeaderName")}</div>
          <div>{t("isInvited")}</div>
          <div>{t("guestTableHeaderGaveMoney")}</div>
          <div>{t("guestTableHeaderTakeMoney")}</div>
          <div>{t("guestTableHeaderType")}</div>
          <div>{t("guestTableHeaderNotes")}</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={guests}
          render={(guest) => <MoneyRow key={guest.id} guest={guest} />}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default MoneyTable;
