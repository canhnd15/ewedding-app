import Heading from "../components/Heading";
import Row from "../components/Row";
import GuestLayout from "../features/guests/GuestLayout";
import GuestTable from "../features/guests/GuestTable";
import GuestTableOperations from "../features/guests/GuestTableOperations";
import Button from "../components/Button";
import AddGuest from "../features/guests/AddGuest";
import { useTranslation } from "react-i18next";

function Guests() {
  const { t } = useTranslation();

  return (
    <>
      <Row type="horizontal">
        <Heading>
          {t("guestScreenHeader")} <span style={{ color: "#b91c1c" }}>140</span>
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
