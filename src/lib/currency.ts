import currency from "currency.js";

const USD = (value: currency.Any) => currency(value, {
  symbol: '$',
  precision: 2,
  separator: ',',
  decimal: '.'
}).format();

export { USD }