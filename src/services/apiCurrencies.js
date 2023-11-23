export async function getCurrencies() {
  const res = await fetch("https://api.frankfurter.app/currencies");
  const data = await res.json();
  return data;
}

export async function getLatestCurrency(from, to) {
  const res = await fetch(
    `https://api.frankfurter.app/latest?amount=1&from=${from}&to=${to}`
  );
  const data = await res.json();
  if (from === to) return null;
  return data;
}

export async function getCurrencyChange(startDate, endDate, from, to) {
  const res = await fetch(
    `https://api.frankfurter.app/${startDate}..${endDate}?amount=1&from=${from}&to=${to}`
  );
  const data = await res.json();
  if (from === to) return null;
  return data;
}

export async function currencyConvert(amount, from, to) {
  const res = await fetch(
    `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
  );
  const data = await res.json();
  return data;
}
