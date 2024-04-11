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
import { useUser } from "../features/authentication/useUser";
import Spinner from "../components/Spinner";

function Guests() {
  const { user, isLoading: isLoadingUser } = useUser();
  const { total, isLoading: isLoadingGuestCounters } = useCountGuests();

  if (isLoadingUser && isLoadingGuestCounters) return <Spinner />;

  return (
    <>
      {!isLoadingUser && !isLoadingGuestCounters && (
        <>
          <Row type="horizontal">
            <Heading>
              {t("guestScreenHeader")}
              <HeadingSpan color="red">{total}</HeadingSpan>
            </Heading>
            <Button>{t("guestUploadBtn")}</Button>
          </Row>
          <Row>
            <GuestLayout userId={user.id} />
            <Row type="horizontal">
              <AddGuest />
              <GuestTableOperations />
            </Row>
            <GuestTable userId={user.id} />
          </Row>
        </>
      )}
    </>
  );
}

export default Guests;
