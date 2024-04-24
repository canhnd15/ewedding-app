import { useCountGuests } from "../features/guests/useCountGuests";
import { useUser } from "../features/authentication/useUser";
import { useTranslation } from "react-i18next";

import GuestLayout from "../features/guests/GuestLayout";
import Row from "../components/Row";
import GuestTable from "../features/guests/GuestTable";
import GuestTableOperations from "../features/guests/GuestTableOperations";
import AddGuest from "../features/guests/AddGuest";
import Spinner from "../components/Spinner";
import GuestFileActions from "../features/guests/GuestFileActions";
import Input from "../components/SearchInput";
import RowOfBlocks from "../components/RowOfBlocks";
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
    notInvitedCount,
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
              <DisplayButton
                text={t("guestScreenHeaderTotal").toUpperCase()}
                number={total}
              />
              <DisplayButton
                text={t("guestScreenHeaderInvited").toUpperCase()}
                number={invitedCount}
              />
              <DisplayButton
                text={t("guestScreenHeaderNotInvited").toUpperCase()}
                number={notInvitedCount}
              />
            </RowOfBlocks>
            <GuestFileActions />
          </Row>
          <Row>
            <GuestLayout counterInfo={counterInfo} />
            <Row type="horizontal">
              <GuestTableOperations />
              <RowOfBlocks type="horizontal">
                <Input
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  placeholder={`${t("guestSearchPlaceholder")}`}
                />
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
