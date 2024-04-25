import styled from "styled-components";
import Table from "../../components/Table";
import { formatCurrency } from "../../utils/helpers";

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

function MoneyTopTableRow({ info, t }) {
  return (
    <Table.Row>
      <Cell>
        {info.key === "guests"
          ? t("moneyTableHeaderGuest")
          : t("moneyTableHeaderMoney")}
      </Cell>
      <Cell>
        {info.key === "money" ? formatCurrency(info.family) : info.family}
      </Cell>
      <Cell>
        {info.key === "money" ? formatCurrency(info.friend) : info.friend}
      </Cell>
      <Cell>
        {info.key === "money"
          ? formatCurrency(info.colleagues)
          : info.colleagues}
      </Cell>
      <Cell>
        {info.key === "money" ? formatCurrency(info.relatives) : info.relatives}
      </Cell>
      <Cell>
        {info.key === "money" ? formatCurrency(info.others) : info.others}
      </Cell>
      <Cell>
        {info.key === "money" ? formatCurrency(info.total) : info.total}
      </Cell>
    </Table.Row>
  );
}

export default MoneyTopTableRow;
