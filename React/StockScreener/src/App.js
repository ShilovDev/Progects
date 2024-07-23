import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { stocks } from "./components/stocks.js";
import { StockList } from "./components/stockList.jsx";
import { ETFlist } from "./components/ETFlist.jsx";
import { etfs } from "./components/etfs.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <div className="section">
            <nav className="navMenu">
              <Link to={"/"}>Stocks</Link>
              <Link to={"/ETFs"}>ETFs</Link>
            </nav>
            <div className="content">
              <h1 className="h1">Stock screener</h1>
              <Routes>
                <Route path="/" element={<StockList stocks={stocks} />} />
                <Route path="/ETFs" element={<ETFlist etfs={etfs} />} />
              </Routes>
            </div>
          </div>
          <div className="descriptionBox">
            <div className="descColors">
              <div
                style={{ backgroundColor: "rgb(246, 53, 56)" }}
                className="description"
              >
                -3%
              </div>
              <div
                style={{ backgroundColor: "rgb(191, 64, 69)" }}
                className="description"
              >
                -2%
              </div>
              <div
                style={{ backgroundColor: "rgb(139, 68, 78)" }}
                className="description"
              >
                -1%
              </div>
              <div
                style={{ backgroundColor: "rgb(65, 69, 84)" }}
                className="description"
              >
                0%
              </div>
              <div
                style={{ backgroundColor: "rgb(53, 118, 84)" }}
                className="description"
              >
                1%
              </div>
              <div
                style={{ backgroundColor: "rgb(47, 158, 79)" }}
                className="description"
              >
                2%
              </div>
              <div
                style={{ backgroundColor: "rgb(48, 204, 90)" }}
                className="description"
              >
                3%
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
