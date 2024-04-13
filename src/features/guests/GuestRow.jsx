import styled from "styled-components";
import Table from "../../components/Table";
import DeleteButton from "../../components/DeleteButton";
import { formatCurrency } from "../../utils/helpers";
import Tag from "../../components/Tag";
import {
  COLLEAGUES_TAG,
  FAMILY_TAG,
  FRIEND_TAG,
  RELATIVES_TAG,
} from "../../utils/constants";
import { useTranslation } from "react-i18next";

const Cell = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--color-grey-600);
  font-family: "Roboto", sans-serif;
`;

function GuestRow({ guest }) {
  const { t } = useTranslation();
  const convertToTags = {
    friend: "blue",
    family: "green",
    colleagues: "indigo",
    relatives: "yellow",
  };

  const convertTagToTagName = function (tag) {
    if (tag === FRIEND_TAG) return `${t("guestFilterFriend")}`;
    else if (tag === FAMILY_TAG) return `${t("guestFilterFamily")}`;
    else if (tag === COLLEAGUES_TAG) return `${t("guestFilterColleague")}`;
    else if (tag === RELATIVES_TAG) return `${t("guestFilterRelatives")}`;
  };

  return (
    <Table.Row>
      {/* <Cell>{guest.id}</Cell> */}
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
      <DeleteButton>Delete</DeleteButton>
    </Table.Row>
  );
}

export default GuestRow;
