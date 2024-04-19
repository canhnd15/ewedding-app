import styled, { css } from "styled-components";

const RowOfBlocks = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

RowOfBlocks.defaultProps = {
  type: "vertical",
};

export default RowOfBlocks;
