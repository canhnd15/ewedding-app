import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import { useTranslation } from "react-i18next";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  const { t } = useTranslation();

  return (
    <StyledConfirmDelete>
      <Heading as="h3">
        {t("guestTableActionDelete")} {resourceName}
      </Heading>
      <p>
        {t("deleteGuestConfirmMessage").replace("resource", `${resourceName}`)}
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          {t("guestInviteMoreFormCancelBtn")}
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          {t("guestTableActionDelete")}
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
