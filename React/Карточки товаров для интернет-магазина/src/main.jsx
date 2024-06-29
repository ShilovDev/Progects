import ReactDOM from "react-dom/client";
import { products } from "./products";
import "./main.css";
import "./Card.css";

import { CardList } from "./cardList";
import "bootstrap/dist/css/bootstrap.min.css";

const root = document.getElementById("root");
// TODO: Реализовать компонент ProductList
ReactDOM.createRoot(root).render(<CardList products={products} />);
