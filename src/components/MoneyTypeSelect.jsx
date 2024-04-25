import styled, { css } from "styled-components";

const colors = {
  DEFAULT: css`
    color: var(--color-gray-300);
  `,
  NONE: css`
    color: var(--color-red-700);
  `,
  CASH: css`
    color: var(--color-blue-700);
  `,
  BANK_TRANSFER: css`
    color: var(--color-green-700);
  `,
  OTHER: css`
    color: var(--color-yellow-700);
  `,
};

const StyledMoneyTypeSelect = styled.select`
  font-size: 1.4rem;
  padding: 5px;
  border: 1px solid var(--color-grey-300);
  ${(props) => colors[props.color]}
  ${(props) =>
    props.type === "white" ? "var(--color-grey-100)" : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 400;
  box-shadow: var(--shadow-sm);
`;

function MoneyTypeSelect({
  options,
  value,
  selectedValue,
  onChange,
  ...props
}) {
  return (
    <StyledMoneyTypeSelect onChange={onChange} {...props} defaultValue={value}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledMoneyTypeSelect>
  );
}

export default MoneyTypeSelect;
