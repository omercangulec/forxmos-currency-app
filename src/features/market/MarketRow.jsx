import { useEffect, useState } from "react";
import { getLatestCurrency } from "../../services/apiCurrencies";
import Table from "../../ui/Table";
import CurrencyChange from "./CurrencyChange";
import { styled } from "styled-components";

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

function MarketRow({ to, selectedCur }) {
  const [result, setResult] = useState("");
  const times = [2, 7, 30, 181, 30 * 12];

  useEffect(
    function () {
      async function getData() {
        const data = await getLatestCurrency(selectedCur, to);
        setResult(data.rates[to].toFixed(3));
      }
      getData();
    },
    [to, selectedCur]
  );

  if (selectedCur === to) return null;

  return (
    <Table.Row>
      <Country>
        <Img
          src={`https://hatscripts.github.io/circle-flags/flags/${to
            .toLowerCase()
            .slice(0, 2)}.svg`}
          alt=""
        />
        <span>
          {selectedCur} / {to}
        </span>
      </Country>
      <div>
        {result} {selectedCur}
      </div>
      {times.map((time) => (
        <CurrencyChange
          selectedCur={selectedCur}
          to={to}
          key={time}
          time={time}
        />
      ))}
    </Table.Row>
  );
}

export default MarketRow;
