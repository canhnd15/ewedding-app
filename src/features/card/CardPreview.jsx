function CardPreview({ card }) {
  return (
    <div>
      <img src={card.image_url} alt={card.image_alt} />
    </div>
  );
}

export default CardPreview;
