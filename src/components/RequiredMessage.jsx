import styled from "styled-components";

const StyledRequiredMessage = styled.span`
  color: red;
`;

function RequiredMessage({ children }) {
  return <StyledRequiredMessage>{children}</StyledRequiredMessage>;
}

export default RequiredMessage;
