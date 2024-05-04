import styled from "styled-components";
import TempBlock from "./TempBlock";
import Pagination from "./Pagination";

const StyledTempMoneyLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  padding: 20px;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  align-content: center;
`;

const Actions = styled.div`
  align-content: center;
`;

function TempMoneyLayout({ cards }) {
  return (
    <>
      <StyledTempMoneyLayout>
        {cards.map((card) => (
          <TempBlock card={card} />
        ))}
      </StyledTempMoneyLayout>
      <Actions type="horizontal">
        <Pagination />
      </Actions>
    </>
  );
}

export default TempMoneyLayout;
