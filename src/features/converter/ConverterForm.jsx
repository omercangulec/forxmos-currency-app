import { styled } from "styled-components";
import Heading from "../../ui/Heading";
import { useEffect, useState } from "react";
import { currencyConvert, getCurrencies } from "../../services/apiCurrencies";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";

const Select = styled.select`
  padding: 1rem;
  font-size: 1.6rem;
  background-color: var(--color-grey-100);
  border: none;
  border-radius: var(--border-radius-md);
`;

const Input = styled.input`
  color: var(--color-grey-600);
  padding: 0.7rem 1.1rem;
  border: none;
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

const P = styled.p`
  text-align: center;
  font-size: 2rem;
  padding: 2rem 0;
  border-radius: var(--border-radius-lg);
  background-color: var(--color-grey-100);
`;

function ConverterForm() {
  const [currenciesSymbol, setCurrenciesSymbol] = useState([]);
  const [fromCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState("");

  useEffect(() => {
    async function getCurrenciesName() {
      const data = await getCurrencies();
      setCurrenciesSymbol(Object.keys(data));
    }
    getCurrenciesName();
  }, []);

  useEffect(() => {
    async function getConvert() {
      const data = await currencyConvert(amount, fromCur, toCur);
      setConverted(data.rates[toCur]);
    }
    if (fromCur === toCur) return setConverted(amount);
    if (amount === 0) return setConverted(0);
    getConvert();
  }, [amount, fromCur, toCur]);

  return (
    <>
      <Form>
        <Heading>Currency Converter</Heading>

        <FormRow label="From Cur">
          <Select value={fromCur} onChange={(e) => setFromCur(e.target.value)}>
            {currenciesSymbol.map((from) => (
              <option value={from} key={from}>
                {from}
              </option>
            ))}
          </Select>
        </FormRow>

        <FormRow label="To Cur">
          <Select value={toCur} onChange={(e) => setToCur(e.target.value)}>
            {currenciesSymbol.map((from) => (
              <option value={from} key={from}>
                {from}
              </option>
            ))}
          </Select>
        </FormRow>

        <FormRow label="Amount">
          <Input
            type="text"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
          />
        </FormRow>
      </Form>
      <P>
        {converted} {toCur}
      </P>
    </>
  );
}

export default ConverterForm;
