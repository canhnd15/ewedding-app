import { useCountGuests } from "../features/guests/useCountGuests";
import { useUser } from "../features/authentication/useUser";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import GuestLayout from "../features/guests/GuestLayout";
import Row from "../components/Row";
import GuestTable from "../features/guests/GuestTable";
import GuestTableOperations from "../features/guests/GuestTableOperations";
import Spinner from "../components/Spinner";
import GuestFileActions from "../features/guests/GuestFileActions";
import Input from "../components/SearchInput";
import RowOfBlocks from "../components/RowOfBlocks";
import DisplayButton from "../components/DisplayButton";
import { useState } from "react";
import { SEARCH_KEY_QUERY } from "../utils/constants";

function Guests() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
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

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    searchParams.set(SEARCH_KEY_QUERY, searchValue);
    setSearchParams(searchParams);
    setQuery(searchValue);
  };

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
              <Input
                onChange={(e) => handleSearch(e)}
                placeholder={`${t("guestSearchPlaceholder")}`}
                query={query}
                setQuery={setQuery}
              />
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
