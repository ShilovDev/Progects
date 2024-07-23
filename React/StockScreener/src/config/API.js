import React from "react";
import Plot from "react-plotly.js";

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      stonks: [],
    };
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = "LrrlLJaT2J7GI5Zm0zJkVdQyHXOgj4do";
    // const API_KEY = "38dbb0cf0dda4dd687498990e7239427";
    let StockSymbol = "META";
    // 936b151fdef4449b8cd2be17c0f34cbfml

    // https://api.finazon.io/latest?apikey=YOUR_API_KEY
    // https://api.twelvedata.com/analyst_ratings/us_equities?symbol=AAPL&apikey=your_api_key
    let API_Call = ` https://financialmodelingprep.com/api/v3/historical-price-full/${StockSymbol}?apikey=${API_KEY}`;
    // let API_Call = `https://financialmodelingprep.com/api/v3/quote/${StockSymbol}?apikey=${API_KEY}`;
    // let API_Call = `https://api.twelvedata.com/analyst_ratings/us_equities?symbol=${StockSymbol}&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    let stonksFunction = [];

    fetch(API_Call)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (let key in data["historical"]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(data["historical"][key]["open"]);

          stonksFunction.push(data["historical"][key]["open"]);
        }

        console.log(price);

        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction,
          stonks: stonksFunction,
        });
      });

    let price = stonksFunction[0];
    //   fetch(API_Call)
    //     .then(function (response) {
    //       return response.json();
    //     })
    //     .then(function (data) {
    //       console.log(data);

    //       for (let key in data["historical"]) {
    //         stonks.push(key);
    //         stonks.push(data["historical"][key]["open"]);
    //       }

    //       // console.log(stockChartXValuesFunction);
    //       pointerToThis.setState({
    //         stonks: stonksFunction,
    //       });
    //     });
  }

  render() {
    return (
      <div>
        <h1>Stock Market</h1>

        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
          ]}
          layout={{ width: 720, height: 440, title: "A Fancy Plot" }}
        />
      </div>
    );
  }
}

export default Stock;

// class Stock extends React.Component {
//   state = {
//     data: [],
//   };

//   componentDidMount() {
//     this.backFunc();
//   }

//   backFunc = async () => {
//     const API_KEY = "LrrlLJaT2J7GI5Zm0zJkVdQyHXOgj4do";
//     let StockSymbol = "META";
//     const res = await fetch(
//       `https://evilinsult.com/generate_insult.php?lang=en&type=json`
//     );
//     const data = await res.json();
//     this.setState({ data });
//   };

//   render() {
//     return (
//       <div className="App">
//         <Plot data={this.state.data} />
//       </div>
//     );
//   }
// }

// export default Stock;
