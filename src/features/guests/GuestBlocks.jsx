import Block from "./Block";

import { FaUserFriends } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { PiUsersFourLight } from "react-icons/pi";
import { useTranslation } from "react-i18next";

function GuestBlocks() {
  const { t } = useTranslation();

  return (
    <>
      <Block
        title={t("guestFriend")}
        color="blue"
        icon={<FaUserFriends />}
        value={35}
      />
      <Block
        title={t("guestFamily")}
        color="green"
        icon={<MdFamilyRestroom />}
        value={35}
      />
      <Block
        title={t("guestCollege")}
        color="indigo"
        icon={<ImUserTie />}
        value={35}
      />
      <Block
        title={t("guestRelatives")}
        color="yellow"
        icon={<PiUsersFourLight />}
        value={35}
      />
    </>
  );
}

export default GuestBlocks;
