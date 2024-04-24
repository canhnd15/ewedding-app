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
import Modal from "../../components/Modal";
import ConfirmDelete from "../../components/ConfirmDelete";
import Menus from "../../components/Menus";
import SwitchButton from "../../components/SwitchButton";
import { useDeleteGuest } from "./useDeleteGuest";

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

function GuestRow({ guest }) {
  const { t } = useTranslation();
  const { deleteGuestById, isDeleting } = useDeleteGuest();

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
        {guest.is_invited === false ? (
          <SwitchButton currentInvitedStatus={false} guestId={guest.id} />
        ) : (
          <SwitchButton currentInvitedStatus={true} guestId={guest.id} />
        )}
      </Cell>
      <Cell>
        <Tag type={convertToTags[`${guest.tags}`.toLowerCase()]}>
          {convertTagToTagName(`${guest.tags}`)}
        </Tag>
      </Cell>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={`${guest.id}`} />
          <Menus.List id={`${guest.id}`}>
            <Menus.Button
              icon={<HiMiniPencilSquare />}
              onClick={() => {
                console.log("updating");
              }}
            >
              {t("guestTableActionUpdate")}
            </Menus.Button>

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>
                {t("guestTableActionDelete")}
              </Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName={t("deleteGuestConfirmResource")}
            disabled={isDeleting}
            onConfirm={() => {
              deleteGuestById({ guestId: guest.id });
            }}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default GuestRow;
