import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import GuestRow from "./GuestRow";
import { useGuests } from "./useGuests";
import Spinner from "../../components/Spinner";
import { useTranslation } from "react-i18next";

function GuestTable({ userId }) {
  const { t } = useTranslation();

  const { guests, isLoading, count } = useGuests(userId);
  if (isLoading) return <Spinner />;

  return (
    <Table columns="30px 150px 150px 150px 250px 150px 100px">
      <Table.Header>
        <div>{t("guestTableHeaderNo")}</div>
        <div>{t("guestTableHeaderName")}</div>
        <div>{t("guestTableHeaderGaveMoney")}</div>
        <div>{t("guestTableHeaderPhone")}</div>
        <div>{t("guestTableHeaderNotes")}</div>
        <div>{t("guestInviteMoreFormTags")}</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={guests}
        render={(guest) => <GuestRow key={guest.id} guest={guest} />}
      />
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default GuestTable;
