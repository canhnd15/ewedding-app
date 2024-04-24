import { useTranslation } from "react-i18next";
import { useDeleteGuest } from "../guests/useDeleteGuest";
import { formatCurrency } from "../../utils/helpers";
import { HiMiniPencilSquare, HiTrash } from "react-icons/hi2";

import Table from "../../components/Table";
import Cell from "../../components/Cell";
import Modal from "../../components/Modal";
import Menus from "../../components/Menus";
import ConfirmDelete from "../../components/ConfirmDelete";
import SwitchButton from "../../components/SwitchButton";

function MoneyRow({ guest }) {
  const { t } = useTranslation();
  const { deleteGuestById, isDeleting } = useDeleteGuest();

  return (
    <Table.Row>
      <Cell>{guest.name}</Cell>
      <Cell>
        {guest.is_invited === false ? (
          <SwitchButton currentInvitedStatus={false} guestId={guest.id} />
        ) : (
          <SwitchButton currentInvitedStatus={true} guestId={guest.id} />
        )}
      </Cell>
      <Cell>
        {Number(guest.gave_money) === 0 ? (
          <span>&mdash;</span>
        ) : (
          formatCurrency(guest.gave_money)
        )}
      </Cell>
      <Cell>
        {Number(guest.take_money) === 0 ? (
          <span>&mdash;</span>
        ) : (
          formatCurrency(guest.take_money)
        )}
      </Cell>
      <Cell>
        <select>
          <option>
            <span>&mdash;</span>
          </option>
          <option>Phong bi</option>
          <option>Chuyen khoan</option>
        </select>
        {/* {guest.type} */}
      </Cell>
      <Cell>{guest.notes === null ? <span>&mdash;</span> : guest.notes}</Cell>

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

export default MoneyRow;
