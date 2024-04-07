import styled from "styled-components";
import Table from "../../components/Table";

const Cell = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

function GuestRow({ guest }) {
  return (
    <Table.Row>
      <Cell>{guest.stt}</Cell>
      <Cell>{guest.name}</Cell>
      <Cell>{guest.nickname}</Cell>
      <Cell>{guest.phone}</Cell>
      <Cell>{guest.address}</Cell>
      <Cell>{guest.note}</Cell>
    </Table.Row>
  );
}

export default GuestRow;
