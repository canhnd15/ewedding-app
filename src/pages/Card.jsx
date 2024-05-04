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
      <Heading>MẪU THIỆP MỜI</Heading>
      <CardTemplate cards={cards} />
      <Heading>NỘI DUNG THIỆP MỜI</Heading>
      <CardContent />
    </Row>
  );
}

export default Card;
