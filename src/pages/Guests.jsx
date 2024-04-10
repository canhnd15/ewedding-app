import Heading from "../components/Heading";
import HeadingSpan from "../components/HeadingSpan";
import Row from "../components/Row";
import { t } from "i18next";
import GuestLayout from "../features/guests/GuestLayout";
import GuestTable from "../features/guests/GuestTable";
import GuestTableOperations from "../features/guests/GuestTableOperations";
import Button from "../components/Button";
import AddGuest from "../features/guests/AddGuest";
import { useCountGuests } from "../features/guests/useCountGuests";

function Guests() {
  const { total } = useCountGuests();

  return (
    <>
      <Row type="horizontal">
        <Heading>
          {t("guestScreenHeader")}
          <HeadingSpan color="red">{total}</HeadingSpan>
        </Heading>
        <Button>{t("guestUploadBtn")}</Button>
      </Row>
      <Row>
        <GuestLayout />
        <Row type="horizontal">
          <AddGuest />
          <GuestTableOperations />
        </Row>
        <GuestTable />
      </Row>
    </>
  );
}

export default Guests;
