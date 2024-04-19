import styled from "styled-components";
import Heading from "./Heading";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      {/* <Heading>E-WEDDING</Heading> */}
      <Img src="/logo.png" alt="logo" />
    </StyledLogo>
  );
}

export default Logo;
