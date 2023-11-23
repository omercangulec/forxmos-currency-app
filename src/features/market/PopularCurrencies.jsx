import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getLatestCurrency } from "../../services/apiCurrencies";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";

const Box = styled.div`
  background-color: var(--color-grey-0);
  padding: 2rem 2.4rem;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const P = styled.p`
  font-size: 2rem;
  margin-top: 1rem;
  color: var(--color-brand-1--light);
`;

function PopularCurrencies({ d }) {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const from = d.from;
  const to = d.to;

  useEffect(
    function () {
      async function getData() {
        setIsLoading(true);
        const data = await getLatestCurrency(from, to);
        setResult(data.rates[to].toFixed(3));
        setIsLoading(false);
      }
      getData();
    },
    [to, from]
  );

  if (isLoading) return <Spinner />;

  return (
    <Box>
      <Heading as="h2">
        {d.from} / {d.to}
      </Heading>
      <P as="h2">{result}</P>
    </Box>
  );
}

export default PopularCurrencies;
