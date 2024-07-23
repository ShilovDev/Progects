import React, { Component, createRef, refComponent, useEffect } from "react";

// import { stocks } from "./stocks";
import "./stock.css";

import { portfolioSUM } from "./stocks";

// import ref from "../App";

export class Stock extends Component {
  constructor(id, amount, testprice, testyesterdayprice, space) {
    super(id, amount, testprice, testyesterdayprice, space);
    this.state = {
      id,
      amount,
      testprice,
      testyesterdayprice,
      space,
      data: {},
    };
    // this.myRef = React.createRef();
  }

  changeStyle() {
    let change =
      ((this.props.testprice - this.props.testyesterdayprice) /
        this.props.testyesterdayprice) *
      100;
    return {
      backgroundColor:
        change >= 0 && change < 1
          ? "rgb(65, 69, 84)"
          : change >= 1 && change < 2
          ? "rgb(53, 118, 84)"
          : change >= 2 && change < 3
          ? "rgb(47, 158, 79)"
          : change > 3
          ? "rgb(48, 204, 90)"
          : change <= 0 && change > -1
          ? "rgb(65, 69, 84)"
          : change <= -1 && change > -2
          ? "rgb(139, 68, 78)"
          : change <= -2 && change > -3
          ? "rgb(191, 64, 69)"
          : change < -3
          ? "rgb(246, 53, 56)"
          : "rgb(1, 1, 1)",

      height: `${
        ((this.props.testprice * this.props.amount) / portfolioSUM) * 1500
      }px`,
    };
  }

  changePrice() {
    let change = (this.props.testprice - this.props.testyesterdayprice).toFixed(
      0
    );
    return change > 0 ? "+" + change + " " : change + " ";
  }

  changePercentPrice() {
    let changePercent =
      ((this.props.testprice - this.props.testyesterdayprice) /
        this.props.testyesterdayprice) *
      100;

    return changePercent > 0
      ? "+" + changePercent.toFixed(2) + "%"
      : changePercent.toFixed(2) + "%";
  }

  componentDidMount() {
    // const API_KEY = "LrrlLJaT2J7GI5Zm0zJkVdQyHXOgj4do";
    // const url = `https://financialmodelingprep.com/api/v3/quote/${this.props.ticker}?apikey=${API_KEY}`;
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({
    //       data: data[0],
    //     });
    //   });
  }

  render() {
    return (
      <div id="1" className="tickerBox" style={this.changeStyle()}>
        <div className="ticker">{this.props.ticker}</div>
        <div className="price">
          {/* this.state.data.price */}
          {this.props.testprice}
        </div>
        {/* {this.hidePrice()} */}
        <span className="change">
          {/* {this.hidePrice()} */}
          {/* {document.getElementsByClassName("tickerBox").offsetHeight < 2000
            ? this.changePrice() && this.changePercentPrice()
            : " "} */}
          {this.changePrice()}({this.changePercentPrice()})
        </span>
      </div>
    );
  }
}
