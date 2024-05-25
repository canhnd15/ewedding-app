import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import Input from "../../components/Input";
import RowOfBlocks from "../../components/RowOfBlocks";
import { BiSend } from "react-icons/bi";
import ButtonIcon from "../../components/ButtonIcon";
import Modal from "../../components/Modal";
import CardSender from "./CardSender";

function CardContent() {
  const { t } = useTranslation();
  return (
    <>
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
      </Form>
      <RowOfBlocks type="horizontal">
        <RowOfBlocks type="horizontal">
          <Button variation="secondary" type="reset">
            Nhập lại
          </Button>
          <Modal>
            <Modal.Open opens={"card-sender"}>
              <Button>GỬI THIỆP</Button>
            </Modal.Open>
            <Modal.Window name={"card-sender"}>
              <CardSender />
            </Modal.Window>
          </Modal>
        </RowOfBlocks>
        <ButtonIcon>
          <BiSend />
        </ButtonIcon>
      </RowOfBlocks>
    </>
  );
}

export default CardContent;
