import styled from "styled-components";

const StyledDeleteButton = styled.button`
  font-size: 1.2rem;
  width: fit-content;
  padding: 0.4rem 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  color: var(--color-red-100);
  background-color: var(--color-red-300);

  &:hover {
    background-color: var(--color-red-800);
  }
`;

function DeleteButton({ children }) {
  return <StyledDeleteButton>{children}</StyledDeleteButton>;
}

export default DeleteButton;
