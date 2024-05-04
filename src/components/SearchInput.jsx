import { useRef } from "react";
import styled from "styled-components";
import { useKey } from "../hooks/useKey";
import { useSearchParams } from "react-router-dom";
import { SEARCH_KEY_QUERY } from "../utils/constants";

const StyledInput = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.7rem 2rem;
  box-shadow: var(--shadow-sm);
  min-width: 250px;
`;

function Input({ placeholder, onChange, query, setQuery }) {
  const inputEl = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useKey("Enter", function () {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(SEARCH_KEY_QUERY);
    setSearchParams(newParams.toString());

    setQuery("");

    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
  });

  return (
    <StyledInput
      placeholder={placeholder}
      ref={inputEl}
      value={query}
      onChange={onChange}
    ></StyledInput>
  );
}

export default Input;
