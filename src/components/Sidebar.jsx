import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { RiMenuFoldLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-100);
  padding: 3.2rem 3rem 1rem 3rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 3.2rem;
`;

const Block1 = styled.div`
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const CloseSidebar = styled.div`
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  padding: 5px;
`;

function Sidebar({ setOpen }) {
  return (
    <StyledSidebar>
      <Block1>
        <Logo />
        <MainNav />
      </Block1>

      <CloseSidebar>
        <RiMenuFoldLine
          size={"24px"}
          cursor={"pointer"}
          onClick={() => setOpen(false)}
        />
      </CloseSidebar>
    </StyledSidebar>
  );
}

export default Sidebar;
