import { t } from "i18next";
import { useCountGuests } from "../features/guests/useCountGuests";
import { useUser } from "../features/authentication/useUser";

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
  const {
    isLoading: isLoadingGuestCounters,
    total,
    friendCount,
    familyCount,
    colleaguesCount,
    relativesCount,
  } = useCountGuests(user.id);

  const counterInfo = {
    userId: user.id,
    total: total,
    friendCount: friendCount,
    familyCount: familyCount,
    colleaguesCount: colleaguesCount,
    relativesCount: relativesCount,
  };

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
            <GuestLayout counterInfo={counterInfo} />
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
