import Block from "./Block";
import { FaUserFriends } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { PiUsersFourLight } from "react-icons/pi";
import { FaPeopleLine } from "react-icons/fa6";

import { useTranslation } from "react-i18next";

function GuestBlocks({ counterInfo }) {
  const { t } = useTranslation();

  return (
    <>
      <Block
        title={t("guestFriend")}
        color="blue"
        icon={<FaUserFriends />}
        value={counterInfo.friendCount}
      />
      <Block
        title={t("guestFamily")}
        color="green"
        icon={<MdFamilyRestroom />}
        value={counterInfo.familyCount}
      />
      <Block
        title={t("guestCollege")}
        color="indigo"
        icon={<ImUserTie />}
        value={counterInfo.colleaguesCount}
      />
      <Block
        title={t("guestRelatives")}
        color="yellow"
        icon={<PiUsersFourLight />}
        value={counterInfo.relativesCount}
      />
      <Block
        title={t("guestOthers")}
        color="red"
        icon={<FaPeopleLine />}
        value={counterInfo.othersCount}
      />
    </>
  );
}

export default GuestBlocks;
