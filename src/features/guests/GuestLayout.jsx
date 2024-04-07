import styled from "styled-components";
import GuestBlocks from "./GuestBlocks";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 2rem;
`;

function GuestLayout() {
  return (
    <StyledDashboardLayout>
      <GuestBlocks />
    </StyledDashboardLayout>
  );
}

export default GuestLayout;
