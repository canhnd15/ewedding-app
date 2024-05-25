import Row from "../components/Row";
import Heading from "../components/Heading";
import CardContent from "../features/card/CardContent";
import CardTemplate from "../features/card/CardTemplate";
import { useCards } from "../features/card/useCards";
import Spinner from "../components/Spinner";

function Card() {
  const { isLoading, cards } = useCards();

  if (isLoading) return <Spinner />;

  return (
    <Row>
      <Row>
        <Heading>CHỌN MẪU THIỆP</Heading>
        <CardTemplate cards={cards} />
      </Row>
      <Row>
        <Heading>NỘI DUNG THIỆP</Heading>
        <CardContent />
      </Row>
    </Row>
  );
}

export default Card;
