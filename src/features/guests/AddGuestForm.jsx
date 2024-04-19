import { useForm } from "react-hook-form";

import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import FormRowCheckBox from "../../components/FormRowCheckBox";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Table from "../../components/Table";
import GuestRow from "./GuestRow";
import Pagination from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SwitchButton from "../../components/SwitchButton";
import SwitchButtonInput from "../../components/SwitchButtonInput";
import { FAMILY_TAG } from "../../utils/constants";
import AddGuestTableRow from "./AddGuestTableRow";
import ConfirmDelete from "../../components/ConfirmDelete";
import toast from "react-hot-toast";
import RowOfBlocks from "../../components/RowOfBlocks";

function AddGuestForm({ onCloseModal }) {
  const { t } = useTranslation();
  const [guests, setGuests] = useState([]);
  const [tags, setTags] = useState(FAMILY_TAG);
  const [isInvited, setIsInvited] = useState(false);

  const isCreating = false;
  const isEditing = false;
  const isWorking = isCreating || isEditing;

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const currId = guests.length + 1;
    const newGuest = { ...data, invited: true, tags: FAMILY_TAG, id: currId };

    setGuests((prevGuests) => [...prevGuests, { ...newGuest }]);
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
            disabled={isWorking}
            {...register("name", {
              required: `${t("requireField")}`,
            })}
          />
        </FormRow>
        <FormRow label={t("guestInviteMoreFormMyGaveMoney")}>
          <Input
            type="number"
            id="gaveMoney"
            disabled={isWorking}
            {...register("gaveMoney")}
          />
        </FormRow>
        <FormRow label={t("guestInviteMoreFormNotes")}>
          <Input
            type="text"
            id="notes"
            disabled={isWorking}
            {...register("notes")}
          />
        </FormRow>
        <FormRow label={t("guestInviteMoreFormPhone")}>
          <Input
            type="text"
            id="phone"
            disabled={isWorking}
            {...register("phone")}
          />
        </FormRow>
        <Input
          type="hidden"
          id="invited"
          disabled={isWorking}
          {...register("invited")}
        />

        <FormRow label={t("isInvited")}>
          <SwitchButtonInput setIsInvited={(e) => setIsInvited(e)} />
        </FormRow>

        <FormRowCheckBox label={t("guestInviteMoreFormTags")}>
          <>
            <Checkbox type="text" id="phone" {...register("tags")}>
              {t("guestFilterFriend")}
            </Checkbox>
            <Checkbox type="text" onChange={() => {}} id="breakfast">
              {t("guestFilterFamily")}
            </Checkbox>
            <Checkbox onChange={() => {}} id="breakfast">
              {t("guestFilterColleague")}
            </Checkbox>
            <Checkbox onChange={() => {}} id="breakfast">
              {t("guestFilterRelatives")}
            </Checkbox>
            <Checkbox onChange={() => {}} id="breakfast">
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
            {t("guestInviteMoreFormClearBtn")}
          </Button>
          <Button disabled={isWorking}>
            {t("guestInviteMoreFormInviteBtn")}
          </Button>
        </FormRow>

        <Table columns="150px 120px 100px 100px 50px 50px 20px">
          <Table.Header>
            <div>{t("guestTableHeaderName")}</div>
            <div>{t("guestTableHeaderGaveMoney")}</div>
            <div>{t("guestTableHeaderPhone")}</div>
            <div>{t("guestTableHeaderNotes")}</div>
            <div>{t("isInvited")}</div>
            <div>{t("guestInviteMoreFormTags")}</div>
            <div></div>
          </Table.Header>

          <Table.Body
            data={guests}
            render={(guest) => (
              <AddGuestTableRow
                key={guest.id}
                guest={guest}
                guests={guests}
                setGuests={setGuests}
              />
            )}
          />
          <Table.Footer>
            <Pagination count={guests.length} />
          </Table.Footer>
        </Table>
      </Form>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          {t("guestInviteMoreFormCancelBtn")}
        </Button>
        <Button disabled={isWorking}>{t("guestInviteMoreFormSaveBtn")}</Button>
      </FormRow>
    </>
  );
}

export default AddGuestForm;
