import Block from "./Block";
import { FaUserFriends } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { PiUsersFourLight } from "react-icons/pi";
import { useCountGuests } from "./useCountGuests";
import Spinner from "../../components/Spinner";
import { useTranslation } from "react-i18next";

function GuestBlocks() {
  const { t } = useTranslation();
  const {
    isLoading,
    friendCount,
    familyCount,
    colleaguesCount,
    relativesCount,
  } = useCountGuests();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Block
        title={t("guestFriend")}
        color="blue"
        icon={<FaUserFriends />}
        value={friendCount}
      />
      <Block
        title={t("guestFamily")}
        color="green"
        icon={<MdFamilyRestroom />}
        value={familyCount}
      />
      <Block
        title={t("guestCollege")}
        color="indigo"
        icon={<ImUserTie />}
        value={colleaguesCount}
      />
      <Block
        title={t("guestRelatives")}
        color="yellow"
        icon={<PiUsersFourLight />}
        value={relativesCount}
      />
    </>
  );
}

export default GuestBlocks;
