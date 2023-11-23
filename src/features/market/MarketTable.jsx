import { styled } from "styled-components";
import Heading from "../../ui/Heading";
import Table from "../../ui/Table";
import MarketRow from "./MarketRow";
import { useEffect, useState } from "react";
import { getCurrencies } from "../../services/apiCurrencies";

const StyledMarket = styled.div`
  margin: 7rem 0;
`;

const Select = styled.select`
  margin: 2rem 0 0;
  padding: 1rem;
  font-size: 1.6rem;
  background-color: var(--color-grey-100);
  border: none;
  border-radius: var(--border-radius-md);
`;

const P = styled.p`
  font-size: 1.8rem;
  margin: 1rem 0;
`;

const Img = styled.img`
  width: 3rem;
  height: 3rem;
`;

const Country = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-self: start;
`;

function MarketTable() {
  const [currenciesSymbol, setCurrenciesSymbol] = useState([]);

  const [selectedCur, setSelectedCur] = useState("USD");

  useEffect(() => {
    async function getCurrenciesName() {
      const data = await getCurrencies();
      setCurrenciesSymbol(Object.keys(data));
    }
    getCurrenciesName();
  }, []);

  return (
    <StyledMarket>
      <Heading as="h1">Market</Heading>
      <P>
        By selecting the currency you want from the options, you can examine the
        changes in 1 day, 1 week, 1 month, 6 months and 1 year.
      </P>

      <Select
        value={selectedCur}
        onChange={(e) => setSelectedCur(e.target.value)}
      >
        {currenciesSymbol.map((from) => (
          <option value={from} key={from}>
            {from}
          </option>
        ))}
      </Select>

      <Table columns="1.2fr 1.4fr repeat(5,1fr)">
        <Table.Header>
          <Country>
            <Img
              src={`https://hatscripts.github.io/circle-flags/flags/${selectedCur
                .toLowerCase()
                .slice(0, 2)}.svg`}
              alt=""
            />
            {selectedCur} / ...
          </Country>
          <div>Val</div>
          <div>24H</div>
          <div>7D</div>
          <div>1M</div>
          <div>6M</div>
          <div>1Y</div>
        </Table.Header>
        <Table.Body
          data={currenciesSymbol}
          render={(to) => (
            <MarketRow to={to} key={to} selectedCur={selectedCur} />
          )}
        />
      </Table>
    </StyledMarket>
  );
}

export default MarketTable;
