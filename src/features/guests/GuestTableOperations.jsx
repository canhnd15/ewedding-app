import TableOperations from "../../components/TableOperations";
import Filter from "../../components/Filter";
import Input from "../../components/SearchInput";
import { useTranslation } from "react-i18next";
import {
  COLLEAGUES_TAG,
  FAMILY_TAG,
  FRIEND_TAG,
  RELATIVES_TAG,
} from "../../utils/constants";

function GuestTableOperations() {
  const { t } = useTranslation();

  return (
    <TableOperations>
      <Filter
        filterField="tags"
        options={[
          { value: "all", label: `${t("guestFilterAll")}` },
          { value: FRIEND_TAG, label: `${t("guestFilterFriend")}` },
          { value: FAMILY_TAG, label: `${t("guestFilterFamily")}` },
          { value: COLLEAGUES_TAG, label: `${t("guestFilterColleague")}` },
          { value: RELATIVES_TAG, label: `${t("guestFilterRelatives")}` },
        ]}
      />

      <Input placeholder={`${t("guestSearchPlaceholder")}`} />
    </TableOperations>
  );
}

export default GuestTableOperations;
