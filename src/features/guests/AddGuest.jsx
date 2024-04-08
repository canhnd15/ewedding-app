import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import AddGuestForm from "./AddGuestForm";

function AddGuest() {
  const { t } = useTranslation();

  return (
    <div>
      <Modal>
        <Modal.Open opens={"guest-form"}>
          <Button>{t("guestAddMoreBtn")}</Button>
        </Modal.Open>
        <Modal.Window name={"guest-form"}>
          <AddGuestForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddGuest;
