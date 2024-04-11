import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.7rem 2rem;
  box-shadow: var(--shadow-sm);
`;

function Input({ placeholder }) {
  return <StyledInput placeholder={placeholder}></StyledInput>;
}

export default Input;
