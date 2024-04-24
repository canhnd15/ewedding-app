import styled from "styled-components";

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

export default Cell;
