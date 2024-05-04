import { useTranslation } from "react-i18next";
import styled from "styled-components";

import { SiMicrosoftexcel } from "react-icons/si";
import { PiDownloadBold } from "react-icons/pi";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import UploadGuestForm from "./UploadGuestForm";
import { PUBLIC_GUEST_LIST_EXCEL_TEMPLATE } from "../../utils/constants";
import ButtonLink from "../../components/ButtonLink";
import AddGuest from "./AddGuest";

const GuestFileActionBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
`;

const InnerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

function GuestFileActions() {
  const { t } = useTranslation();

  return (
    <GuestFileActionBlock>
      <div>
        <Modal>
          <Modal.Open opens={"guest-upload-form"}>
            <Button variation="excel">
              <InnerButton>
                {t("guestUploadBtn")}
                <SiMicrosoftexcel size={"18px"} />
              </InnerButton>
            </Button>
          </Modal.Open>
          <Modal.Window name={"guest-upload-form"}>
            <UploadGuestForm />
          </Modal.Window>
        </Modal>
      </div>
      <ButtonLink href={PUBLIC_GUEST_LIST_EXCEL_TEMPLATE}>
        <InnerButton>
          {t("guestSampleFileBtn")}
          <PiDownloadBold size={"18px"} />
        </InnerButton>
      </ButtonLink>
      <AddGuest title={t("guestAddMoreBtn")} />
    </GuestFileActionBlock>
  );
}

export default GuestFileActions;
