import { useTranslation } from "react-i18next";
import * as xlsx from "xlsx";
import Form from "../../components/Form";
import FormRowUpload from "../../components/FormRowUpload";
import FileInput from "../../components/FileInput";
import Button from "../../components/Button";
import { useUser } from "../authentication/useUser";
import { useForm } from "react-hook-form";
import { useFileUpload } from "./useFileUpload";
import { useState } from "react";
import { useInsertGuestsByFile } from "./useInsertGuests";

function UploadGuestForm({ onCloseModal }) {
  const { t } = useTranslation();
  const { user, isLoading: isLoadingUser } = useUser();
  const { insertGuestsByFile } = useInsertGuestsByFile();
  const { uploadFile, isUploading } = useFileUpload();
  const { register, handleSubmit, reset } = useForm();
  const [guests, setGuests] = useState([]);

  const onUpload = (data) => {
    const fileExcel =
      typeof data.excel === "string" ? data.excel : data.excel[0];

    if (!isLoadingUser) {
      uploadFile(
        { userId: user.id, file: fileExcel },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();

            const uploadedGuests = convertToGuestsJson(guests);
            insertGuestsByFile({ guests: uploadedGuests, userId: user.id });
          },
        }
      );
    }
  };

  const convertToGuestsJson = (guests) => {
    let convertedGuests = [];
    guests.forEach((guest) => {
      const newGuest = {
        name: guest.GuestName,
        phone: guest.Phone,
        gave_money: guest.GaveMoney,
        notes: guest.Notes,
        tags: guest.Tag,
        user_id: user.id,
      };
      convertedGuests.push(newGuest);
    });

    return convertedGuests;
  };

  const onError = (errors) => {
    throw new Error(errors.message);
  };

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);

        setGuests(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onUpload, onError)}>
      <FormRowUpload label={t("uploadGuestsFileNotes")}>
        <FileInput
          id="excel"
          accept=".xlsx, .xls"
          {...register("excel", {
            required: "This field is required",
          })}
          onChange={readUploadFile}
        />
      </FormRowUpload>
      <FormRowUpload>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          {t("guestInviteMoreFormCancelBtn")}
        </Button>
        <Button disabled={isUploading}>{t("guestUploadBtn")}</Button>
      </FormRowUpload>
    </Form>
  );
}

export default UploadGuestForm;
