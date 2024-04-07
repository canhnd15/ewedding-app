import Block from "./Block";

import { FaUserFriends } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { PiUsersFourLight } from "react-icons/pi";

function GuestBlocks() {
  return (
    <>
      <Block title="Bạn bè" color="blue" icon={<FaUserFriends />} value={35} />
      <Block
        title="Gia đình"
        color="green"
        icon={<MdFamilyRestroom />}
        value={35}
      />
      <Block
        title="Đồng nghiệp"
        color="indigo"
        icon={<ImUserTie />}
        value={35}
      />
      <Block
        title="Họ hàng"
        color="yellow"
        icon={<PiUsersFourLight />}
        value={35}
      />
    </>
  );
}

export default GuestBlocks;
