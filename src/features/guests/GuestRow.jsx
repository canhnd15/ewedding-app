import styled from "styled-components";
import Table from "../../components/Table";
import DeleteButton from "../../components/DeleteButton";
import { formatCurrency } from "../../utils/helpers";

const Cell = styled.div`
  font-size: 1.6rem;
  font-weight: 100;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

function GuestRow({ guest }) {
  function deleteGuestByUser({ userId, guestId }) {
    console.log("Delete guest");
  }

  return (
    <Table.Row>
      <Cell>{guest.id}</Cell>
      <Cell>{guest.name}</Cell>
      <Cell>
        {Number(guest.gave_money) === 0 ? "" : formatCurrency(guest.gave_money)}
      </Cell>
      <Cell>{guest.phone}</Cell>
      <Cell>{guest.notes}</Cell>
      <Cell>{guest.tags}</Cell>
      <DeleteButton>Delete</DeleteButton>
    </Table.Row>
  );
}

export default GuestRow;
