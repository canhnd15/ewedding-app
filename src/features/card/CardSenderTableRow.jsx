import styled from "styled-components";
import Table from "../../components/Table";
import SwitchButton from "../../components/SwitchButton";
import Checkbox from "../../components/Checkbox";

const RowCover = styled.div`
  padding: 0px 10px;
  :hover {
    background-color: var(--color-grey-300);
    border-radius: var(--border-radius-lg);
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const Cell = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--color-grey-600);
  font-family: "Roboto", sans-serif;

  &:has(button) {
    display: flex;
    justify-content: center;
    gap: 7px;
  }
`;

function CardSenderTableRow({ guest }) {
  return (
    <RowCover>
      <Table.Row>
        <Cell>
          <Checkbox />
        </Cell>
        <Cell>{guest.name}</Cell>
        <Cell>
          <SwitchButton currentInvitedStatus={guest.is_invited} />
        </Cell>
      </Table.Row>
    </RowCover>
  );
}

export default CardSenderTableRow;
