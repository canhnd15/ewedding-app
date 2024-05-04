import Button from "../../components/Button";
import Modal from "../../components/Modal";
import AddGuestForm from "./AddGuestForm";

function AddGuest({ title }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens={"guest-form"}>
          <Button>{title}</Button>
        </Modal.Open>
        <Modal.Window name={"guest-form"}>
          <AddGuestForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddGuest;
