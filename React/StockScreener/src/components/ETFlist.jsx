import Masonry from "react-masonry-css";
import { Etf } from "./ETF.jsx";
import "./stock.css";

const breakpoints = { default: 3, 1100: 3, 700: 3 };
document.body.style.backgroundColor = "rgb(54, 58, 70)";
export const ETFlist = (props) => {
  return (
    <div className="box">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {props.etfs.map((ETF) => (
          <div className="block" key={ETF.id}>
            <Etf
              ticker={ETF.ticker}
              amount={ETF.amount}
              testprice={ETF.testprice}
              testyesterdayprice={ETF.testyesterdayprice}
              price={ETF.price}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};
