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
import SwitchButton from "../../components/SwitchButton";
import { HiTrash } from "react-icons/hi2";

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

const TruncatedText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function AddGuestTableRow({ guest, guests, setGuests }) {
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

  function handleDeleteGuest(guestId) {
    const updatedGuests = guests
      .slice()
      .filter((guest) => guest.id !== guestId);

    setGuests(updatedGuests);
  }

  return (
    <Table.Row>
      <Cell>{guest.name}</Cell>
      <Cell>
        {Number(guest.gaveMoney) === 0 ? (
          <span>&mdash;</span>
        ) : (
          `${formatCurrency(`${guest.gaveMoney}`)}`
        )}
      </Cell>
      <Cell>{guest.phone === "" ? <span>&mdash;</span> : guest.phone}</Cell>
      <Cell>
        {guest.notes === "" ? (
          <span>&mdash;</span>
        ) : (
          <TruncatedText>{guest.notes}</TruncatedText>
        )}
      </Cell>
      <Cell>
        <SwitchButton currentInvitedStatus={guest.invited} />
      </Cell>
      <Cell>
        <Tag type={convertToTags[`${guest.tags}`.toLowerCase()]}>
          {convertTagToTagName(`${guest.tags}`)}
        </Tag>
      </Cell>
      <Cell>
        <HiTrash
          color="red"
          cursor={"pointer"}
          size={"24px"}
          onClick={() => handleDeleteGuest(guest.id)}
        />
      </Cell>
    </Table.Row>
  );
}

export default AddGuestTableRow;
