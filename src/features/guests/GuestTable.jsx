import { t } from "i18next";
import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import GuestRow from "./GuestRow";
import { useGuests } from "./useGuests";
import Spinner from "../../components/Spinner";

function GuestTable() {
  const { guests, isLoading, count } = useGuests();

  if (isLoading) return <Spinner />;

  return (
    <Table columns="30px 150px 150px 150px 250px 150px 1rem">
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
