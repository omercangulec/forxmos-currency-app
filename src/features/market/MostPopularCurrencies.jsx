import { popularCurrencies } from "../../data/data-popularCurrencies";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import PopularCurrencies from "./PopularCurrencies";

function MostPopularCurrencies() {
  const data = popularCurrencies;

  return (
    <Row>
      <Heading as="h1">Most Popular</Heading>
      <Row type="horizontal">
        {data.map((d) => (
          <PopularCurrencies d={d} key={d.id} />
        ))}
      </Row>
    </Row>
  );
}

export default MostPopularCurrencies;
