import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import AddGuestTableRow from "./AddGuestTableRow";
import { useInsertGuestsManually } from "./useInsertGuests";
import { useUser } from "../authentication/useUser";

import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import FormRowCheckBox from "../../components/FormRowCheckBox";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import {
  COLLEAGUES_TAG,
  FAMILY_TAG,
  FRIEND_TAG,
  OTHERS_TAG,
  RELATIVES_TAG,
} from "../../utils/constants";
import SelectInput from "../../components/SelectInput";

function AddGuestForm({ onCloseModal }) {
  const { t } = useTranslation();
  const { user } = useUser();
  const { isCreating, insertGuestsManually } = useInsertGuestsManually();

  const [displayedGuests, setDisplayedGuests] = useState([]);
  const [savedGuests, setSavedGuests] = useState([]);
  const [tags, setTags] = useState(null);
  const [isInvited, setIsInvited] = useState(false);
  const [gaveMoney, setGaveMoney] = useState("");

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const currId = displayedGuests.length + 1;
    const newDisplayedGuest = {
      ...data,
      invited: isInvited,
      tags: tags,
      id: currId,
    };
    setDisplayedGuests((prevGuests) => [
      ...prevGuests,
      { ...newDisplayedGuest },
    ]);

    const newSavedGuest = {
      name: data.name,
      phone: data.phone !== "" ? data.phone : null,
      gave_money: gaveMoney !== "" ? gaveMoney : null,
      notes: data.notes,
      tags: tags,
      is_invited: isInvited,
      user_id: user.id,
    };
    setSavedGuests((prevGuests) => [...prevGuests, { ...newSavedGuest }]);
  }

  function onError(errors) {
    console.log(errors);
  }

  function handleSaveGuestsManually() {
    insertGuestsManually({ guests: savedGuests, userId: user.id });
    if (!isCreating) {
      setDisplayedGuests([]);
      setSavedGuests([]);
    }
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
            disabled={isCreating}
            {...register("name", {
              required: `${t("requireField")}`,
            })}
          />
        </FormRow>
        <FormRow label={t("guestInviteMoreFormMyGaveMoney")}>
          {/* <Input
            type="number"
            id="gaveMoney"
            disabled={isCreating}
            {...register("gaveMoney")}
          /> */}
          <SelectInput
            defaultValue={gaveMoney}
            setGaveMoney={setGaveMoney}
            type={"GAVE"}
          />
        </FormRow>
        <FormRow label={t("guestInviteMoreFormNotes")}>
          <Input
            type="text"
            id="notes"
            disabled={isCreating}
            {...register("notes")}
          />
        </FormRow>
        <FormRow label={t("guestInviteMoreFormPhone")}>
          <Input
            type="text"
            id="phone"
            disabled={isCreating}
            {...register("phone")}
          />
        </FormRow>

        <FormRowCheckBox label={t("isInvited")}>
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

        <FormRowCheckBox label={t("guestInviteMoreFormTags")}>
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
            {t("guestInviteMoreFormClearBtn")}
          </Button>
          <Button disabled={isCreating}>
            {t("guestInviteMoreFormInviteBtn")}
          </Button>
        </FormRow>

        <Table columns="130px 90px 100px 100px 70px 100px 30px">
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
            data={displayedGuests}
            render={(guest) => (
              <AddGuestTableRow
                key={guest.id}
                guest={guest}
                guests={displayedGuests}
                setGuests={setDisplayedGuests}
              />
            )}
          />
          <Table.Footer>
            <Pagination count={displayedGuests.length} />
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
        <Button
          disabled={isCreating || displayedGuests.length === 0}
          onClick={handleSaveGuestsManually}
        >
          {t("guestInviteMoreFormSaveBtn")}
        </Button>
      </FormRow>
    </>
  );
}

export default AddGuestForm;
