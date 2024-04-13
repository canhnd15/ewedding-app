import { t } from "i18next";
import { useCountGuests } from "../features/guests/useCountGuests";
import { useUser } from "../features/authentication/useUser";
import { PiUploadSimple } from "react-icons/pi";

import Heading from "../components/Heading";
import GuestLayout from "../features/guests/GuestLayout";
import HeadingSpan from "../components/HeadingSpan";
import Row from "../components/Row";
import GuestTable from "../features/guests/GuestTable";
import GuestTableOperations from "../features/guests/GuestTableOperations";
import AddGuest from "../features/guests/AddGuest";
import Spinner from "../components/Spinner";
import GuestFileActions from "../features/guests/GuestFileActions";

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
            <GuestFileActions />
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
