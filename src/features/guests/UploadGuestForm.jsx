import { useTranslation } from "react-i18next";
import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import FileInput from "../../components/FileInput";
import Button from "../../components/Button";
import { useUser } from "../authentication/useUser";
import { useForm } from "react-hook-form";
import { useFileUpload } from "./useFileUpload";

function UploadGuestForm({ onCloseModal }) {
  const { t } = useTranslation();
  const { user, isLoading: isLoadingUser } = useUser();
  const { uploadFile, isUploading } = useFileUpload();
  const { register, handleSubmit, reset } = useForm();

  const onUpload = (data) => {
    const fileExcel =
      typeof data.excel === "string" ? data.excel : data.excel[0];

    if (!isLoadingUser) {
      uploadFile(
        { userId: user.id, file: fileExcel },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  };

  const onError = (errors) => {
    throw new Error(errors.message);
  };

  return (
    <Form
      onSubmit={handleSubmit(onUpload, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label={t("guestInviteMoreFormName")}>
        <FileInput
          id="excel"
          accept=".xlsx, .xls"
          {...register("excel", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          {t("guestInviteMoreFormCancelBtn")}
        </Button>
        <Button disabled={isUploading}>{t("guestUploadBtn")}</Button>
      </FormRow>
    </Form>
  );
}

export default UploadGuestForm;
