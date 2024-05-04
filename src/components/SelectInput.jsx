import React, { useState } from "react";
import styled from "styled-components";
import { formatCurrency } from "../utils/helpers";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.7rem 1.2rem;
  box-shadow: var(--shadow-sm);
  width: 100%;
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 100%;
  height: 120px;
  overflow-y: auto;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0;
  margin: 0;
  list-style-type: none;
  z-index: 1;
`;

const OptionItem = styled.li`
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const defaultOptions = [
  {
    key: formatCurrency(100000),
    value: 100000,
  },
  {
    key: formatCurrency(200000),
    value: 200000,
  },
  {
    key: formatCurrency(300000),
    value: 300000,
  },
  {
    key: formatCurrency(500000),
    value: 500000,
  },
  {
    key: formatCurrency(1000000),
    value: 1000000,
  },
  {
    key: formatCurrency(2000000),
    value: 2000000,
  },
  {
    key: formatCurrency(5000000),
    value: 5000000,
  },
  {
    key: formatCurrency(10000000),
    value: 10000000,
  },
];

const SelectInput = ({ defaultValue, setGaveMoney, setTakeMoney, type }) => {
  const [value, setValue] = useState(defaultValue);
  const [options] = useState(defaultOptions);
  const [isSelecting, setIsSelecting] = useState(false);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setIsSelecting(true);

    if (type === "GAVE") setGaveMoney(e.target.value);
    if (type === "TAKE") setTakeMoney(e.target.value);
  };

  const handleSelectOption = (option) => {
    setValue(option.value);
    setIsSelecting(false);

    if (type === "GAVE") setGaveMoney(option.value);
    if (type === "TAKE") setTakeMoney(option.value);
  };

  return (
    <Wrapper>
      <Input
        type="number"
        value={value}
        onChange={handleInputChange}
        onFocus={() => setIsSelecting(true)}
        onBlur={() => setTimeout(() => setIsSelecting(false), 200)}
      />
      {isSelecting && (
        <OptionsList>
          {options.map((option, index) => (
            <OptionItem key={index} onClick={() => handleSelectOption(option)}>
              {option.key}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </Wrapper>
  );
};

export default SelectInput;
