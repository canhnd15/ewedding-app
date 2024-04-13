import Button from "../../components/Button";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Modal from "../../components/Modal";
import UploadGuestForm from "./UploadGuestForm";

const GuestFileActionBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 10px;
`;

function GuestFileActions() {
  const { t } = useTranslation();

  const handleDownload = () => {};

  return (
    <GuestFileActionBlock>
      <div>
        <Modal>
          <Modal.Open opens={"guest-upload-form"}>
            <Button>{t("guestUploadBtn")}</Button>
          </Modal.Open>
          <Modal.Window name={"guest-upload-form"}>
            <UploadGuestForm />
          </Modal.Window>
        </Modal>
      </div>
      <Button onClick={handleDownload}>{t("guestSampleFileBtn")}</Button>
    </GuestFileActionBlock>
  );
}

export default GuestFileActions;
