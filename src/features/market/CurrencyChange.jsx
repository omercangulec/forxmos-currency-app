import { useEffect, useState } from "react";
import { getCurrencyChange } from "../../services/apiCurrencies";
import { setTimeRange } from "../../utils/helpers";
import { css, styled } from "styled-components";

const StyledCur = styled.div`
  ${(props) =>
    props.sign === "true" &&
    css`
      color: var(--color-green-100);
    `}
  ${(props) =>
    props.sign === "false" &&
    css`
      color: var(--color-red-700);
    `};
`;

function CurrencyChange({ selectedCur, to, time }) {
  const [firstValue, setFirstValue] = useState("");
  const [lastValue, setLastValue] = useState("");

  const startDate = setTimeRange(time);
  const endDate = setTimeRange(1);

  function changeValue(lastValue, firstValue) {
    const change = ((lastValue - firstValue) * 100) / firstValue;
    return change;
  }

  const change = changeValue(lastValue, firstValue);

  useEffect(() => {
    async function getChanges() {
      try {
        const data = await getCurrencyChange(
          startDate,
          endDate,
          selectedCur,
          to
        );
        if (selectedCur === to) return null;
        setFirstValue(data.rates[startDate][to]);
        setLastValue(data.rates[endDate][to]);
      } catch (err) {
        console.log(err);
      }
    }
    getChanges();
  }, [startDate, endDate, to, selectedCur]);

  return (
    <StyledCur sign={(change >= 0).toString()}>
      {isNaN(change)
        ? "No data"
        : change > 0
        ? "+" + change.toFixed(2) + "%"
        : change.toFixed(2) + "%"}
    </StyledCur>
  );
}

export default CurrencyChange;
