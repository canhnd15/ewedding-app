import styled from "styled-components";
import GuestBlocks from "./GuestBlocks";

const StyledGuestLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 2rem;
`;

function GuestLayout({ counterInfo }) {
  return (
    <StyledGuestLayout>
      <GuestBlocks counterInfo={counterInfo} />
    </StyledGuestLayout>
  );
}

export default GuestLayout;
