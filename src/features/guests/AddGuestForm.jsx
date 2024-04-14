import { useForm } from "react-hook-form";

import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import FormRowCheckBox from "../../components/FormRowCheckBox";
import Input from "../../components/SearchInput";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Table from "../../components/Table";
import GuestRow from "./GuestRow";
import Pagination from "../../components/Pagination";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function AddGuestForm({ editedGuest = {}, onCloseModal }) {
  const { t } = useTranslation();
  //   const { isCreating, createCabin } = useCreateCabin();
  //   const { isEditing, editCabin } = useEditCabin();
  const [guests, setGuests] = useState([
    {
      name: "Nguyen Van A",
      phone: "0357664013",
      myGaveMoney: "300000",
      note: "hàng xóm",
    },
    {
      name: "Nguyen Van B",
      phone: "0357664013",
      myGaveMoney: "200000",
      note: "hàng xóm",
    },
    {
      name: "Nguyen Van C",
      phone: "0357664013",
      myGaveMoney: "500000",
      note: "bạn mẫu giáo",
    },
    {
      name: "Nguyen Van A",
      phone: "0357664013",
      myGaveMoney: "300000",
      note: "hàng xóm",
    },
    {
      name: "Nguyen Van B",
      phone: "0357664013",
      myGaveMoney: "200000",
      note: "hàng xóm",
    },
    {
      name: "Nguyen Van C",
      phone: "0357664013",
      myGaveMoney: "500000",
      note: "bạn mẫu giáo",
    },
  ]);

  const isCreating = false;
  const isEditing = false;
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = editedGuest;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {}

  function onError(errors) {
    console.log(errors);
  }

  return (
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
          disabled={false}
          {...register("name", {
            required: `${t("requireField")}`,
          })}
        />
      </FormRow>

      <FormRow
        label={t("guestInviteMoreFormMyGaveMoney")}
        error={errors?.maxCapacity?.message}
      >
        <Input type="number" id="maxCapacity" disabled={isWorking} />
      </FormRow>

      <FormRow
        label={t("guestInviteMoreFormNotes")}
        error={errors?.maxCapacity?.message}
      >
        <Input type="number" id="maxCapacity" disabled={isWorking} />
      </FormRow>

      <FormRow
        label={t("guestInviteMoreFormPhone")}
        error={errors?.maxCapacity?.message}
      >
        <Input type="number" id="maxCapacity" disabled={isWorking} />
      </FormRow>

      <FormRowCheckBox error={errors?.maxCapacity?.message}>
        <Checkbox checked={true} onChange={() => {}} id="breakfast">
          {t("guestFilterFriend")}
        </Checkbox>
        <Checkbox checked={false} onChange={() => {}} id="breakfast">
          {t("guestFilterFamily")}
        </Checkbox>
        <Checkbox checked={false} onChange={() => {}} id="breakfast">
          {t("guestFilterColleague")}
        </Checkbox>
        <Checkbox checked={false} onChange={() => {}} id="breakfast">
          {t("guestFilterRelatives")}
        </Checkbox>
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
          {isEditSession ? "SỬA" : `${t("guestInviteMoreFormInviteBtn")}`}
        </Button>
      </FormRow>

      <Table type={"small"} columns="150px 130px 130px 120px 50px 50px">
        <Table.Header>
          <div>{t("guestTableHeaderName")}</div>
          <div>{t("guestTableHeaderGaveMoney")}</div>
          <div>{t("guestTableHeaderPhone")}</div>
          <div>{t("guestTableHeaderNotes")}</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={guests}
          render={(guest) => <GuestRow key={guest.id} guest={guest} />}
        />
        <Table.Footer>
          <Pagination count={guests.length} />
        </Table.Footer>
      </Table>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          {t("guestInviteMoreFormCancelBtn")}
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "SỬA" : `${t("guestInviteMoreFormSaveBtn")}`}
        </Button>
      </FormRow>
    </Form>
  );
}

export default AddGuestForm;
