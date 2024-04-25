import { useTranslation } from "react-i18next";
import { useUser } from "../features/authentication/useUser";

import Row from "../components/Row";
import MoneyTable from "../features/money/MoneyTable";
import Spinner from "../components/Spinner";
import MoneyTopTable from "../features/money/MoneyTopTable";
import RowOfBlocks from "../components/RowOfBlocks";
import Input from "../components/Input";
import Button from "../components/Button";
import styled from "styled-components";
import { FaDownload } from "react-icons/fa6";
import MoneyTableOperations from "../features/money/MoneyTableOperations";
import DisplayButton from "../components/DisplayButton";
import * as xlsx from "xlsx";
import FileSaver from "file-saver";
import { useExportGuests } from "../features/money/useExportGuests";
import { useMoneyTopTable } from "../features/money/useMoneyTopTable";

const InnerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

function Money() {
  const { t } = useTranslation();
  const { user, isLoading: isLoadingUser } = useUser();
  const {
    result,
    guests,
    isLoading: isLoadingDataTopTable,
  } = useMoneyTopTable(user.id);

  if (isLoadingUser && isLoadingDataTopTable) return <Spinner />;

  const exportToCSV = ({ guests, fileName }) => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const ws = xlsx.utils.json_to_sheet(guests);

    ws["A1"].v = t("guestTableHeaderName");
    ws["B1"].v = t("guestTableHeaderPhone");
    ws["C1"].v = t("guestTableHeaderGaveMoney");
    ws["D1"].v = t("guestTableHeaderNotes");
    ws["E1"].v = t("guestInviteMoreFormTags");
    ws["F1"].v = t("isInvited");
    ws["G1"].v = t("guestTableHeaderTakeMoney");
    ws["H1"].v = t("guestTableHeaderType");

    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = xlsx.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Row>
      <Row type="horizontal">
        <RowOfBlocks type="horizontal">
          <DisplayButton
            text={t("guestScreenHeaderReceived").toUpperCase()}
            number={50}
          />
          <DisplayButton
            text={t("guestScreenHeaderUnreceived").toUpperCase()}
            number={50}
          />
        </RowOfBlocks>
      </Row>
      <MoneyTopTable result={result} />
      <RowOfBlocks type="horizontal">
        <RowOfBlocks type="horizontal">
          <Input
            onChange={(e) => {}}
            placeholder={`${t("guestSearchPlaceholder")}`}
          />
          <MoneyTableOperations />
        </RowOfBlocks>
        <Button
          variation="excel"
          onClick={() => exportToCSV({ guests: guests, fileName: user.email })}
        >
          <InnerButton>
            {t("guestDownloadBtn")}
            <FaDownload size={"18px"} />
          </InnerButton>
        </Button>
      </RowOfBlocks>
      <MoneyTable userId={user.id} />
    </Row>
  );
}

export default Money;
