import MostPopularCurrencies from "../features/market/MostPopularCurrencies";
import MarketTable from "../features/market/MarketTable";
import Row from "../ui/Row";

function Market() {
  return (
    <Row>
      <MostPopularCurrencies />
      <MarketTable />
    </Row>
  );
}

export default Market;
