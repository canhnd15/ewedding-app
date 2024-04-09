import TableOperations from "../../components/TableOperations";
import Filter from "../../components/Filter";
import Input from "../../components/Input";
import { useTranslation } from "react-i18next";

function GuestTableOperations() {
  const { t } = useTranslation();

  return (
    <TableOperations>
      <Filter
        filterField="tags"
        options={[
          { value: "all", label: `${t("guestFilterAll")}` },
          { value: "friends", label: `${t("guestFilterFriend")}` },
          { value: "family", label: `${t("guestFilterFamily")}` },
          { value: "colleagues", label: `${t("guestFilterColleague")}` },
          { value: "relatives", label: `${t("guestFilterRelatives")}` },
        ]}
      />

      <Input placeholder={`${t("guestSearchPlaceholder")}`} />
    </TableOperations>
  );
}

export default GuestTableOperations;
