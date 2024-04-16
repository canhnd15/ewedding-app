import Pagination from "../../components/Pagination";
import Table from "../../components/Table";
import GuestRow from "./GuestRow";
import { useGuests } from "./useGuests";
import Spinner from "../../components/Spinner";
import { useTranslation } from "react-i18next";
import Menus from "../../components/Menus";

function GuestTable({ userId }) {
  const { t } = useTranslation();
  const { guests, isLoading, count } = useGuests(userId);

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table type={"normal"} columns="230px 150px 150px 300px 100px 50px">
        <Table.Header>
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
    </Menus>
  );
}

export default GuestTable;
