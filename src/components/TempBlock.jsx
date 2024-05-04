import styled from "styled-components";
import { FaCrown } from "react-icons/fa";
import RowOfBlocks from "./RowOfBlocks";
import Modal from "./Modal";
import AddGuestForm from "../features/guests/AddGuestForm";
import CardPreview from "../features/card/CardPreview";

const StyledTempBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  height: 250px;
  background-image: ${({ imageURL }) => `url("${imageURL}")`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:hover button {
    opacity: 1;
  }
`;

const PremiumButton = styled.button`
  position: absolute;
  top: 0px;
  left: 0px;

  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-large);
  transition: all 0.2s;
  background-color: #fbbd27;

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;

const PreviewButton = styled.button`
  border: none;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  font-size: 1.2rem;
  padding: 0.8rem 1.2rem;
  font-weight: 600;
  text-align: center;
  color: var(--color-brand-50);
  background-color: var(--color-brand-500);

  &:hover {
    background-color: var(--color-brand-700);
  }
  opacity: 0;
  transition: opacity 1s ease;
`;

function TempBlock({ card }) {
  return (
    <StyledTempBlock imageURL={card.image_url}>
      {card.is_premium && (
        <PremiumButton>
          <FaCrown color="white" />
        </PremiumButton>
      )}
      <RowOfBlocks type="horizontal">
        <Modal>
          <Modal.Open opens={"guest-form"}>
            <PreviewButton> Xem trước </PreviewButton>
          </Modal.Open>
          <Modal.Window name={"guest-form"}>
            <CardPreview card={card} />
          </Modal.Window>
        </Modal>
        <PreviewButton> Lựa chọn </PreviewButton>
      </RowOfBlocks>
    </StyledTempBlock>
  );
}

export default TempBlock;
