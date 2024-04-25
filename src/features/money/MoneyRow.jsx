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
import {
  INVITATION_TYPE_BANK_TRANSFER,
  INVITATION_TYPE_CASH,
  INVITATION_TYPE_NONE,
  INVITATION_TYPE_OTHER,
} from "../../utils/constants";
import { useUpdateInvitationType } from "./useUpdateInvitationType";
import MoneyTypeSelect from "../../components/MoneyTypeSelect";
import UpdateGuestForm from "../guests/UpdateGuestForm";

function MoneyRow({ guest }) {
  const { t } = useTranslation();
  const { deleteGuestById, isDeleting } = useDeleteGuest();
  const { updateInvitationType, isUpdating } = useUpdateInvitationType();

  const options = [
    {
      value: INVITATION_TYPE_NONE,
      label: t("invitationTypeNone"),
    },
    {
      value: INVITATION_TYPE_CASH,
      label: t("invitationTypeCash"),
    },
    {
      value: INVITATION_TYPE_BANK_TRANSFER,
      label: t("invitationTypeBank"),
    },
    {
      value: INVITATION_TYPE_OTHER,
      label: t("invitationTypeOther"),
    },
  ];

  const doUpdateInvitationType = (e) => {
    const invitationType = e.target.value;
    updateInvitationType({
      guestId: guest.id,
      invitationType:
        invitationType === INVITATION_TYPE_NONE ? null : invitationType,
    });
  };

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
      {/* <Cell>
        {Number(guest.gave_money) === 0 ? (
          <span>&mdash;</span>
        ) : (
          formatCurrency(guest.gave_money)
        )}
      </Cell> */}
      <Cell>
        {Number(guest.take_money) === 0 ? (
          <span>&mdash;</span>
        ) : (
          formatCurrency(guest.take_money)
        )}
      </Cell>
      <Cell>
        <MoneyTypeSelect
          options={options}
          onChange={doUpdateInvitationType}
          disabled={isUpdating}
          value={guest.type}
          color={guest.type === null ? INVITATION_TYPE_NONE : guest.type}
        />
      </Cell>
      <Cell>{guest.notes === null ? <span>&mdash;</span> : guest.notes}</Cell>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={`${guest.id}`} />
          <Menus.List id={`${guest.id}`}>
            <Modal.Open opens="update-money-form">
              <Menus.Button icon={<HiMiniPencilSquare color="blue" />}>
                {t("guestTableActionUpdate")}
              </Menus.Button>
            </Modal.Open>

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash color="red" />}>
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
        <Modal.Window name={"update-money-form"}>
          <UpdateGuestForm guest={guest} isMoneyForm={true} />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default MoneyRow;
