import { useCountGuests } from "../features/guests/useCountGuests";
import { useUser } from "../features/authentication/useUser";

import GuestLayout from "../features/guests/GuestLayout";
import Row from "../components/Row";
import GuestTable from "../features/guests/GuestTable";
import GuestTableOperations from "../features/guests/GuestTableOperations";
import AddGuest from "../features/guests/AddGuest";
import Spinner from "../components/Spinner";
import GuestFileActions from "../features/guests/GuestFileActions";
import Input from "../components/SearchInput";
import RowOfBlocks from "../components/RowOfBlocks";
import { useTranslation } from "react-i18next";
import DisplayButton from "../components/DisplayButton";

function Guests() {
  const { t } = useTranslation();
  const { user, isLoading: isLoadingUser } = useUser();

  const {
    isLoading: isLoadingGuestsByTags,
    total,
    friendCount,
    familyCount,
    colleaguesCount,
    relativesCount,
    othersCount,
    invitedCount,
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

  if (isLoadingUser && isLoadingGuestsByTags) return <Spinner />;

  return (
    <>
      {!isLoadingUser && !isLoadingGuestsByTags && (
        <>
          <Row type="horizontal">
            <RowOfBlocks type="horizontal">
              {/* <Heading as={"h1"}>
                {t("guestScreenHeader")}
                <HeadingSpan color="red">{total}</HeadingSpan>
              </Heading>
              <Heading as={"h1"}>
                | ĐÃ MỜI:
                <HeadingSpan color="red">{total}</HeadingSpan>
              </Heading> */}
              <DisplayButton>
                KHÁCH MỜI: <span>{total}</span>
              </DisplayButton>
              <DisplayButton>
                ĐÃ MỜI: <span>{invitedCount}</span>
              </DisplayButton>
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
