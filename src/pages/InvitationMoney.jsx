import { useTranslation } from "react-i18next";
import { useUser } from "../features/authentication/useUser";

import Row from "../components/Row";
import Heading from "../components/Heading";
import MoneyTable from "../features/money/MoneyTable";
import Spinner from "../components/Spinner";
import MoneyTopTable from "../features/money/MoneyTopTable";
import RowOfBlocks from "../components/RowOfBlocks";
import Input from "../components/Input";
import Button from "../components/Button";
import styled from "styled-components";
import { FaDownload } from "react-icons/fa6";

const InnerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

function InvitationMoney() {
  const { t } = useTranslation();
  const { user, isLoading: isLoadingUser } = useUser();

  if (isLoadingUser) return <Spinner />;

  return (
    <Row>
      {/* <Heading>TIỀN MỪNG</Heading> */}
      <MoneyTopTable />
      <RowOfBlocks type="horizontal">
        <Input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder={`${t("guestSearchPlaceholder")}`}
        />
        <Button variation="excel">
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

export default InvitationMoney;
