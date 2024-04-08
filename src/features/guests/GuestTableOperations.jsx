import TableOperations from "../../components/TableOperations";
import Filter from "../../components/Filter";
import Input from "../../components/Input";
import { useTranslation } from "react-i18next";

function GuestTableOperations() {
  const { t } = useTranslation();

  return (
    <TableOperations>
      <Filter
        filterField="type"
        options={[
          { value: "all", label: <p>{t("guestFilterAll")}</p> },
          { value: "friends", label: <p>{t("guestFilterFriend")}</p> },
          { value: "family", label: <p>{t("guestFilterFamily")}</p> },
          { value: "colleagues", label: <p>{t("guestFilterColleague")}</p> },
          { value: "relatives", label: <p>{t("guestFilterRelatives")}</p> },
        ]}
      />

      <Input placeholder={"Tìm kiếm..."} />
    </TableOperations>
  );
}

export default GuestTableOperations;
