import styled from "styled-components";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import ConfirmDelete from "../../components/ConfirmDelete";
import { MdDeleteForever } from "react-icons/md";

const Cell = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

function GuestRow({ guest }) {
  function deleteGuestByUser({ userId, guestId }) {
    console.log("Delete guest");
  }

  return (
    <Table.Row>
      <Cell>{guest.stt}</Cell>
      <Cell>{guest.name}</Cell>
      <Cell>{guest.nickname}</Cell>
      <Cell>{guest.phone}</Cell>
      <Cell>{guest.address}</Cell>
      <Cell>{guest.note}</Cell>
      <Cell>
        <MdDeleteForever />
      </Cell>
      {/* <Modal>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="guest"
            disabled={true}
            onConfirm={() => deleteGuestByUser({ userId: 1, guestId: 12 })}
          />
        </Modal.Window>
      </Modal> */}
    </Table.Row>
  );
}

export default GuestRow;
