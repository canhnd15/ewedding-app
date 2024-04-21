import styled from "styled-components";
import { useState } from "react";
import { useUpdateInvited } from "../features/guests/useUpdateInvited";

// Styled components
const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  width: 50px;
  height: 24px;
  background: #b3b3b3;
  border-radius: 32px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 19px;
    height: 19px;
    border-radius: 35px;
    top: 50%;
    left: 2px;
    background: white;
    transform: translate(0, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: var(--color-blue-700);

    &:before {
      transform: translate(27px, -50%);
    }
  }
`;

function SwitchButton({ currentInvitedStatus, guestId }) {
  const { isUpdating, updateInvitedStatus } = useUpdateInvited();
  const [checked, setChecked] = useState(currentInvitedStatus);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    if (guestId) updateInvitedStatus({ guestId, currentInvitedStatus });
    else currentInvitedStatus = !currentInvitedStatus;
  };

  return (
    <Label>
      <Input
        disabled={isUpdating}
        checked={checked}
        type="checkbox"
        onChange={handleChange}
      />
      <Switch />
    </Label>
  );
}

export default SwitchButton;
