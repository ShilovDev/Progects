export const stocks = [
  {
    id: 1,
    ticker: "AAPL",
    amount: 10,
    testprice: 296.02,
    testyesterdayprice: 300.51,
  },
  {
    id: 2,
    ticker: "MSFT",
    amount: 11,
    testprice: 301.26,
    testyesterdayprice: 300,
  },
  {
    id: 3,
    ticker: "TSLA",
    amount: 9,
    testprice: 600.76,
    testyesterdayprice: 590,
  },
  {
    id: 4,
    ticker: "GOOGL",
    amount: 8,
    testprice: 350.28,
    testyesterdayprice: 345,
  },
  {
    id: 5,
    ticker: "AMZN",
    amount: 8,
    testprice: 600.67,
    testyesterdayprice: 540,
  },
  {
    id: 6,
    ticker: "NVDA",
    amount: 5,
    testprice: 500.38,
    testyesterdayprice: 650,
  },
  {
    id: 7,
    ticker: "UNH",
    amount: 3,
    testprice: 900.92,
    testyesterdayprice: 901,
  },
  {
    id: 8,
    ticker: "AVGO",
    amount: 3,
    testprice: 1020.62,
    testyesterdayprice: 500,
  },
  {
    id: 9,
    ticker: "XOM",
    amount: 10,
    testprice: 300.83,
    testyesterdayprice: 305,
  },
  {
    id: 10,
    ticker: "LLY",
    amount: 15,
    testprice: 330.47,
    testyesterdayprice: 260,
  },
  {
    id: 11,
    ticker: "JPM",
    amount: 11,
    testprice: 240.05,
    testyesterdayprice: 250.71,
  },
  {
    id: 12,
    ticker: "V",
    amount: 14,
    testprice: 350,
    testyesterdayprice: 360,
  },
];

export let portfolioSUM = stocks
  .map((stock) => stock.testprice * stock.amount)
  .reduce((acc, number) => acc + number, 0);
console.log(portfolioSUM);
export let tickerSpace = stocks.map((stock) =>
  ((stock.testprice * stock.amount) / portfolioSUM).toFixed(2)
);
console.log(tickerSpace);
