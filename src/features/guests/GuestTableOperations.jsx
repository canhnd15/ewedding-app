import TableOperations from "../../components/TableOperations";
import Filter from "../../components/Filter";
import { useTranslation } from "react-i18next";
import {
  COLLEAGUES_TAG,
  FAMILY_TAG,
  FRIEND_TAG,
  INVITED,
  NOT_INVITED,
  OTHERS_TAG,
  RELATIVES_TAG,
} from "../../utils/constants";
import RowOfBlocks from "../../components/RowOfBlocks";

function GuestTableOperations() {
  const { t } = useTranslation();

  return (
    <RowOfBlocks type="horizontal">
      <TableOperations>
        <Filter
          filterField="invited"
          options={[
            { value: INVITED, label: `${t("isInvited")}` },
            { value: NOT_INVITED, label: `${t("notInvited")}` },
          ]}
        ></Filter>
      </TableOperations>
      <TableOperations>
        <Filter
          filterField="tags"
          options={[
            { value: "all", label: `${t("guestFilterAll")}` },
            { value: FRIEND_TAG, label: `${t("guestFilterFriend")}` },
            { value: FAMILY_TAG, label: `${t("guestFilterFamily")}` },
            { value: COLLEAGUES_TAG, label: `${t("guestFilterColleague")}` },
            { value: RELATIVES_TAG, label: `${t("guestFilterRelatives")}` },
            { value: OTHERS_TAG, label: `${t("guestFilterOthers")}` },
          ]}
        />
      </TableOperations>
    </RowOfBlocks>
  );
}

export default GuestTableOperations;
