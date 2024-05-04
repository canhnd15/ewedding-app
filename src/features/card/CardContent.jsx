import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";

function CardContent() {
  const { t } = useTranslation();
  return (
    <Form>
      <FormRow label={"Trân trọng kính mời"}>
        <Input />
      </FormRow>
      <FormRow label={"Tên cô dâu và chú rể"}>
        <Input />
      </FormRow>
      <FormRow label={"Tổ chức vào hồi"}>
        <Input />
      </FormRow>
      <FormRow label={"Ngày"}>
        <Input />
      </FormRow>
      <FormRow label={"Tức ngày"}>
        <Input />
      </FormRow>
      <FormRow label={"Tại"}>
        <Input />
      </FormRow>
      <FormRow label={"Địa chỉ"}>
        <Input />
      </FormRow>
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          //   onClick={() => onCloseModal?.()}
        >
          {t("guestInviteMoreFormCancelBtn")}
        </Button>
        <Button>{t("guestInviteMoreFormSaveBtn")}</Button>
      </FormRow>
    </Form>
  );
}

export default CardContent;
