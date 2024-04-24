import styled from "styled-components";
import { RiMenuUnfoldLine } from "react-icons/ri";

const StyledMiniSidebar = styled.aside`
  background-color: var(--color-grey-100);
  padding: 2rem 1rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-content: center;
`;

function MiniSidebar({ setOpen }) {
  return (
    <StyledMiniSidebar>
      <RiMenuUnfoldLine
        size={"24px"}
        cursor={"pointer"}
        onClick={() => setOpen(true)}
      />
    </StyledMiniSidebar>
  );
}

export default MiniSidebar;
