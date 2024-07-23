import Masonry from "react-masonry-css";
import { Stock } from "./Stock.jsx";

import "./stock.css";

const breakpoints = { default: 4, 1100: 4, 700: 4 };
document.body.style.backgroundColor = "rgb(54, 58, 70)";
export const StockList = (props) => {
  return (
    <div className="box">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.stocks.map((stock) => (
          <div className="block" key={stock.id}>
            <Stock
              ticker={stock.ticker}
              amount={stock.amount}
              testprice={stock.testprice}
              testyesterdayprice={stock.testyesterdayprice}
              price={stock.price}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};
