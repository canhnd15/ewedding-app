import { useTranslation } from "react-i18next";
import Filter from "../../components/Filter";
import TableOperations from "../../components/TableOperations";
import { ALL_OPTION, RECEIVED, UNRECEIVED } from "../../utils/constants";

function MoneyTableOperations() {
  const { t } = useTranslation();
  return (
    <TableOperations>
      <Filter
        filterField="taken"
        options={[
          { value: ALL_OPTION, label: `${t("guestFilterAll")}` },
          { value: RECEIVED, label: `${t("isReceived")}` },
          { value: UNRECEIVED, label: `${t("notReceived")}` },
        ]}
      ></Filter>
    </TableOperations>
  );
}

export default MoneyTableOperations;
