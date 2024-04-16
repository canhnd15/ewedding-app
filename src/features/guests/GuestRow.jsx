import styled from "styled-components";
import Table from "../../components/Table";
import { formatCurrency } from "../../utils/helpers";
import Tag from "../../components/Tag";
import {
  COLLEAGUES_TAG,
  FAMILY_TAG,
  FRIEND_TAG,
  OTHERS_TAG,
  RELATIVES_TAG,
} from "../../utils/constants";
import { useTranslation } from "react-i18next";
import { HiTrash, HiMiniPencilSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

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

const ActionButton = styled.button`
  background: none;
  border: none;

  & svg {
    color: var(---color-grey-400);
    transition: all 0.3s;
  }
`;

function GuestRow({ guest }) {
  const { t } = useTranslation();

  const convertToTags = {
    friend: "blue",
    family: "green",
    colleagues: "indigo",
    relatives: "yellow",
    others: "red",
  };

  const convertTagToTagName = function (tag) {
    if (tag === FRIEND_TAG) return `${t("guestFilterFriend")}`;
    else if (tag === FAMILY_TAG) return `${t("guestFilterFamily")}`;
    else if (tag === COLLEAGUES_TAG) return `${t("guestFilterColleague")}`;
    else if (tag === RELATIVES_TAG) return `${t("guestFilterRelatives")}`;
    else if (tag === OTHERS_TAG) return `${t("guestFilterOthers")}`;
  };

  return (
    <Table.Row>
      <Cell>{guest.name}</Cell>
      <Cell>
        {Number(guest.gave_money) === 0 ? (
          <span>&mdash;</span>
        ) : (
          formatCurrency(guest.gave_money)
        )}
      </Cell>
      <Cell>{guest.phone === null ? <span>&mdash;</span> : guest.phone}</Cell>
      <Cell>{guest.notes === null ? <span>&mdash;</span> : guest.notes}</Cell>
      <Cell>
        <Tag type={convertToTags[`${guest.tags}`.toLowerCase()]}>
          {convertTagToTagName(`${guest.tags}`)}
        </Tag>
      </Cell>

      <Cell>
        <ActionButton>
          <HiMiniPencilSquare size={"20px"} />
        </ActionButton>
        <ActionButton>
          <HiTrash size={"20px"} />
        </ActionButton>
      </Cell>
    </Table.Row>
  );
}

export default GuestRow;
