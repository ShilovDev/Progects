export const etfs = [
  {
    id: 1,
    ticker: "TLT",
    amount: 7,
    testprice: 330.64,
    testyesterdayprice: 300.51,
  },
  {
    id: 2,
    ticker: "QQQ",
    amount: 11,
    testprice: 301.26,
    testyesterdayprice: 300,
  },
  {
    id: 3,
    ticker: "GLD",
    amount: 9,
    testprice: 303.76,
    testyesterdayprice: 300,
  },
  {
    id: 4,
    ticker: "KRE",
    amount: 8,
    testprice: 355.28,
    testyesterdayprice: 345,
  },
  {
    id: 5,
    ticker: "IBIT",
    amount: 8,
    testprice: 528,
    testyesterdayprice: 540,
  },
  {
    id: 6,
    ticker: "SOXS",
    amount: 5,
    testprice: 550.38,
    testyesterdayprice: 650,
  },
  {
    id: 7,
    ticker: "XLV",
    amount: 3,
    testprice: 800.92,
    testyesterdayprice: 801,
  },
  {
    id: 8,
    ticker: "BND",
    amount: 3,
    testprice: 820.62,
    testyesterdayprice: 500,
  },
  {
    id: 9,
    ticker: "SLV",
    amount: 10,
    testprice: 300.83,
    testyesterdayprice: 305,
  },
  {
    id: 10,
    ticker: "TQQQ",
    amount: 15,
    testprice: 330,
    testyesterdayprice: 340,
  },
  {
    id: 11,
    ticker: "TZA",
    amount: 10,
    testprice: 250.05,
    testyesterdayprice: 260.71,
  },
  {
    id: 12,
    ticker: "MUB",
    amount: 14,
    testprice: 287,
    testyesterdayprice: 280,
  },
];

export let portfolioSUM = etfs
  .map((ETF) => ETF.testprice * ETF.amount)
  .reduce((acc, number) => acc + number, 0);
console.log(portfolioSUM);
export let tickerSpace = etfs.map((ETF) =>
  ((ETF.testprice * ETF.amount) / portfolioSUM).toFixed(2)
);
console.log(tickerSpace);
