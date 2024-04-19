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
import Input from "../components/SearchInput";
import RowOfBlocks from "../components/RowOfBlocks";
import { useTranslation } from "react-i18next";

function Guests() {
  const { t } = useTranslation();
  const { user, isLoading: isLoadingUser } = useUser();
  const {
    isLoading: isLoadingGuestCounters,
    total,
    friendCount,
    familyCount,
    colleaguesCount,
    relativesCount,
    othersCount,
  } = useCountGuests(user.id);

  const counterInfo = {
    userId: user.id,
    total: total,
    friendCount: friendCount,
    familyCount: familyCount,
    colleaguesCount: colleaguesCount,
    relativesCount: relativesCount,
    othersCount: othersCount,
  };

  if (isLoadingUser && isLoadingGuestCounters) return <Spinner />;

  return (
    <>
      {!isLoadingUser && !isLoadingGuestCounters && (
        <>
          <Row type="horizontal">
            <RowOfBlocks type="horizontal">
              <Heading as={"h2"}>
                {t("guestScreenHeader")}
                <HeadingSpan color="red">{total}</HeadingSpan>
              </Heading>
              <Heading as={"h2"}>
                | ĐÃ MỜI:
                <HeadingSpan color="red">{total}</HeadingSpan>
              </Heading>
            </RowOfBlocks>
            <GuestFileActions />
          </Row>
          <Row>
            <GuestLayout counterInfo={counterInfo} />
            <Row type="horizontal">
              <GuestTableOperations />
              <RowOfBlocks type="horizontal">
                <Input placeholder={`${t("guestSearchPlaceholder")}`} />
                <AddGuest />
              </RowOfBlocks>
            </Row>
            <GuestTable userId={user.id} />
          </Row>
        </>
      )}
    </>
  );
}

export default Guests;
