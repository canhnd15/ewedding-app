import styled from "styled-components";
import Row from "../../components/Row";
import CardPreview from "./CardPreview";
import Button from "../../components/Button";
import { FaFacebookMessenger } from "react-icons/fa";
import { useUser } from "../authentication/useUser";

import CardSenderTable from "./CardSenderTable";
import InputWithCopyIcon from "../../components/InputIcon";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const card = {
  image_url:
    "https://tkzouaxollvajkmzihrc.supabase.co/storage/v1/object/public/card_preview_temps/preview_temps_02.jpeg",
  image_alt: "Mẫu thiệp mời 02",
  is_premium: true,
  title: "Mẫu thiệp mời 02",
};

const ActionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  padding-top: 30px;
`;

const StyledTextArea = styled.textarea`
  height: 100px;
  padding: 5px;
  border-radius: 5px;
`;

const StyledSendCardBlock = styled.div``;

const recipientId = "100008785595855";
const handleMessengerClick = () => {
  const messengerURI = `https://m.me/${recipientId}`;
  window.open(messengerURI, "_blank");
};

function CardSender() {
  const { t } = useTranslation();
  const { user } = useUser();
  const [isSendCard, setIsSendCard] = useState(false);

  function handleSendCard() {
    setIsSendCard(!isSendCard);
  }

  return (
    <>
      <Row type="horizontal">
        <CardSenderTable userId={user.id} />
        <Row>
          <Row type="horizontal">
            <InputWithCopyIcon
              value={"https://react-icons.github.io/react-icons/search"}
            />
          </Row>
          <CardPreview card={card} />
          <StyledTextArea
            placeholder={t("yourMessageToGuest")}
          ></StyledTextArea>
        </Row>
      </Row>
      <ActionButton>
        <Row>
          <Button onClick={handleSendCard}>{t("generateCard")}</Button>
          {isSendCard && (
            <StyledSendCardBlock>
              <StyledTextArea />
              <Button>Copy</Button>
              <FaFacebookMessenger />
            </StyledSendCardBlock>
          )}
        </Row>
      </ActionButton>
    </>
  );
}

export default CardSender;
