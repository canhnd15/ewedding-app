import styled from "styled-components";

const StyledDisplayButton = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 5px 9px;
  border: 2px solid;
  border-color: var(--color-grey-100);
  border-radius: 10px;
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  align-content: center;
  font-weight: 300;
  background-color: var(--color-grey-0);
  gap: 5px;
`;

const NumberBlock = styled.span`
  color: var(--color-red-700);
  font-weight: 600;
`;

function DisplayButton({ text, number }) {
  return (
    <StyledDisplayButton>
      {text} <NumberBlock>{number}</NumberBlock>
    </StyledDisplayButton>
  );
}

export default DisplayButton;
