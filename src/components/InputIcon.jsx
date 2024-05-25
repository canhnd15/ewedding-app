import React from "react";
import styled from "styled-components";
import { MdContentCopy } from "react-icons/md";

// Styled input component
const StyledInputIcon = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledInput = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.7rem 1.2rem;
  box-shadow: var(--shadow-sm);
  width: 450px;
`;

// Styled icon button
const IconButton = styled.button`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

// Usage of the input styled component with copy icon button
const InputWithCopyIcon = ({ value }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    alert("Copied to clipboard!");
  };

  return (
    <StyledInputIcon>
      <StyledInput type="text" value={value} readOnly />
      <IconButton onClick={copyToClipboard}>
        <MdContentCopy />
      </IconButton>
    </StyledInputIcon>
  );
};

export default InputWithCopyIcon;
