import { useTranslation } from "react-i18next";
import { useState } from "react";
import FileSaver from "file-saver";
import * as xlsx from "xlsx";
import { useUser } from "../features/authentication/useUser";
import { FaDownload } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import { SEARCH_KEY_QUERY } from "../utils/constants";
import { useExportGuests } from "../features/money/useExportGuests";

import Row from "../components/Row";
import MoneyTable from "../features/money/MoneyTable";
import Spinner from "../components/Spinner";
import RowOfBlocks from "../components/RowOfBlocks";
import Input from "../components/SearchInput";
import Button from "../components/Button";
import styled from "styled-components";
import MoneyTableOperations from "../features/money/MoneyTableOperations";
import DisplayButton from "../components/DisplayButton";
import MoneyTopTable from "../features/money/MoneyTopTable";
import AddGuest from "../features/guests/AddGuest";

const InnerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

function Money() {
  const { t } = useTranslation();
  const { user, isLoading: isLoadingUser } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();
  const { guests, isLoading: isLoadingExportData } = useExportGuests(user.id);
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState({});

  if (isLoadingUser) return <Spinner />;

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    searchParams.set(SEARCH_KEY_QUERY, searchValue);
    setSearchParams(searchParams);
    setQuery(searchValue);
  };

  const exportToExcel = ({ guests, fileName }) => {
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
            number={total.received}
          />
          <DisplayButton
            text={t("guestScreenHeaderUnreceived").toUpperCase()}
            number={total.unreceived}
          />
        </RowOfBlocks>
        <RowOfBlocks type="horizontal">
          <AddGuest title={t("guestAddMoreLaterBtn")} />
          <Button
            variation="excel"
            disabled={isLoadingExportData}
            onClick={() =>
              exportToExcel({ guests: guests, fileName: user.email })
            }
          >
            <InnerButton>
              {t("guestDownloadBtn")}
              <FaDownload size={"18px"} />
            </InnerButton>
          </Button>
        </RowOfBlocks>
      </Row>
      <MoneyTopTable userId={user.id} setTotal={setTotal} />
      <Row type="horizontal">
        <Input
          onChange={(e) => handleSearch(e)}
          placeholder={`${t("guestSearchPlaceholder")}`}
          query={query}
          setQuery={setQuery}
        />
        <MoneyTableOperations />
      </Row>
      <MoneyTable userId={user.id} />
    </Row>
  );
}

export default Money;
