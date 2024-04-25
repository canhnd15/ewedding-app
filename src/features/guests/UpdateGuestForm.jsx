import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import Button from "../../components/Button";
import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";
import FormRowCheckBox from "../../components/FormRowCheckBox";
import Checkbox from "../../components/Checkbox";
import { useState } from "react";
import {
  COLLEAGUES_TAG,
  FAMILY_TAG,
  FRIEND_TAG,
  INVITATION_TYPE_BANK_TRANSFER,
  INVITATION_TYPE_CASH,
  INVITATION_TYPE_NONE,
  INVITATION_TYPE_OTHER,
  OTHERS_TAG,
  RELATIVES_TAG,
} from "../../utils/constants";
import { useUpsertGuest } from "./useUpsertGuest";
import MoneyTypeSelect from "../../components/MoneyTypeSelect";
import SelectInput from "../../components/SelectInput";

function UpdateGuestForm({ onCloseModal, guest, isMoneyForm = false }) {
  const { t } = useTranslation();

  const { isUpdating, upsertGuest } = useUpsertGuest();

  const [isInvited, setIsInvited] = useState(guest.is_invited);
  const [tags, setTags] = useState(guest.tags);
  const [type, setType] = useState(guest.type !== null ? guest.type : null);

  const { register, handleSubmit, getValues, formState, reset } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

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

  function onSubmit(data) {
    const updatedGuest = {
      id: guest.id,
      name: data.name,
      notes: data.notes !== "" ? data.notes : null,
      gave_money: data.gaveMoney !== "" ? data.gaveMoney : null,
      take_money: data.takeMoney !== "" ? data.takeMoney : null,
      type: type,
      phone: data.phone !== "" ? data.phone : null,
      is_invited: isInvited,
      tags: tags,
      updated_at: new Date().toISOString(),
    };

    upsertGuest(updatedGuest, {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit, onError)}
        type={onCloseModal ? "modal" : "regular"}
      >
        <FormRow
          label={t("guestInviteMoreFormName")}
          error={errors?.name?.message}
        >
          <Input
            type="text"
            id="name"
            defaultValue={guest.name}
            disabled={isUpdating}
            {...register("name", {
              required: `${t("requireField")}`,
            })}
          />
        </FormRow>
        <FormRow label={t("guestTableHeaderGaveMoney")}>
          {/* <Input
            type="number"
            id="gaveMoney"
            defaultValue={guest.gave_money}
            disabled={isUpdating}
            {...register("gaveMoney")}
          /> */}
          <SelectInput defaultValue={guest.gave_money} />
        </FormRow>
        {isMoneyForm && (
          <FormRow label={t("guestTableHeaderTakeMoney")}>
            {/* <Input
              type="number"
              id="takeMoney"
              defaultValue={guest.take_money}
              disabled={isUpdating}
              {...register("takeMoney")}
            /> */}
            <SelectInput defaultValue={guest.take_money} />
          </FormRow>
        )}
        {isMoneyForm && (
          <FormRow label={t("guestTableHeaderType")}>
            <MoneyTypeSelect
              options={options}
              onChange={(e) => {
                const invitationValue = e.target.value;
                setType(
                  invitationValue === INVITATION_TYPE_NONE
                    ? null
                    : invitationValue
                );
              }}
              disabled={isUpdating}
              value={guest.type}
              color={guest.type === null ? INVITATION_TYPE_NONE : type}
            />
          </FormRow>
        )}
        <FormRow label={t("guestInviteMoreFormNotes")}>
          <Input
            type="text"
            id="notes"
            defaultValue={guest.notes}
            disabled={isUpdating}
            {...register("notes")}
          />
        </FormRow>
        <FormRow label={t("guestInviteMoreFormPhone")}>
          <Input
            type="text"
            id="phone"
            defaultValue={guest.phone}
            disabled={isUpdating}
            {...register("phone")}
          />
        </FormRow>

        <FormRowCheckBox label={t("isInvited")} disabled={isUpdating}>
          <Checkbox
            type="text"
            id="tags"
            checked={isInvited === true ? true : false}
            onChange={(e) => {
              if (e.target.checked === true) setIsInvited(true);
              else setIsInvited(false);
            }}
          />
        </FormRowCheckBox>
        <FormRowCheckBox
          label={t("guestInviteMoreFormTags")}
          disabled={isUpdating}
        >
          <>
            <Checkbox
              type="text"
              id="tags"
              checked={tags === FRIEND_TAG ? true : false}
              onChange={(e) => {
                if (e.target.checked === true) setTags(FRIEND_TAG);
              }}
            >
              {t("guestFilterFriend")}
            </Checkbox>
            <Checkbox
              type="text"
              id="tags"
              checked={tags === FAMILY_TAG ? true : false}
              onChange={(e) => {
                if (e.target.checked === true) setTags(FAMILY_TAG);
              }}
            >
              {t("guestFilterFamily")}
            </Checkbox>
            <Checkbox
              type="tex"
              id="tags"
              checked={tags === COLLEAGUES_TAG ? true : false}
              onChange={(e) => {
                if (e.target.checked === true) setTags(COLLEAGUES_TAG);
              }}
            >
              {t("guestFilterColleague")}
            </Checkbox>
            <Checkbox
              type="tex"
              id="tags"
              checked={tags === RELATIVES_TAG ? true : false}
              onChange={(e) => {
                if (e.target.checked === true) setTags(RELATIVES_TAG);
              }}
            >
              {t("guestFilterRelatives")}
            </Checkbox>
            <Checkbox
              type="tex"
              id="tags"
              checked={tags === OTHERS_TAG ? true : false}
              onChange={(e) => {
                if (e.target.checked === true) setTags(OTHERS_TAG);
              }}
            >
              {t("guestFilterOthers")}
            </Checkbox>
          </>
        </FormRowCheckBox>

        <FormRow>
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            {t("guestInviteMoreFormCancelBtn")}
          </Button>
          <Button disabled={isUpdating}>
            {t("guestInviteMoreFormSaveBtn")}
          </Button>
        </FormRow>
      </Form>
    </>
  );
}

export default UpdateGuestForm;
