import styled from "styled-components";

const StyledFormRowUpload = styled.div`
  display: grid;
  align-items: center;
  gap: 1.5rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
  }
`;

const StarLabel = styled.span`
  color: red;
  font-weight: bold;
`;

const Label = styled.label`
  font-weight: 300;
  color: red;
  font-family: "Roboto";
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRowUpload({ label, error, children }) {
  return (
    <StyledFormRowUpload>
      {label && (
        <Label htmlFor={children.props.id}>
          <StarLabel>*</StarLabel> {label}
        </Label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRowUpload>
  );
}

export default FormRowUpload;
