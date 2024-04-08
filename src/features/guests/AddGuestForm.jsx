import { useForm } from "react-hook-form";

import Form from "../../components/Form";
import FormRow from "../../components/FormRow";
import FormRowCheckBox from "../../components/FormRowCheckBox";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";

function AddGuestForm({ editedGuest = {}, onCloseModal }) {
  //   const { isCreating, createCabin } = useCreateCabin();
  //   const { isEditing, editCabin } = useEditCabin();

  const isCreating = false;
  const isEditing = false;
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = editedGuest;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
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
      <FormRow label="Tên" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={false}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Tên gọi" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Địa chỉ" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Mình mừng" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRowCheckBox error={errors?.maxCapacity?.message}>
        <Checkbox checked={true} onChange={() => {}} id="breakfast">
          Bạn bè
        </Checkbox>
        <Checkbox checked={false} onChange={() => {}} id="breakfast">
          Gia đình
        </Checkbox>
        <Checkbox checked={false} onChange={() => {}} id="breakfast">
          Đồng nghiệp
        </Checkbox>
        <Checkbox checked={false} onChange={() => {}} id="breakfast">
          Họ hàng
        </Checkbox>
      </FormRowCheckBox>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          HUỶ
        </Button>
        <Button disabled={isWorking}>{isEditSession ? "SỬA" : "MỜI"}</Button>
      </FormRow>
    </Form>
  );
}

export default AddGuestForm;
