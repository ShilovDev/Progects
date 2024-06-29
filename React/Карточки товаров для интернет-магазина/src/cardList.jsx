import { Card } from "./Card";

export const CardList = (props) => {
  return (
    <div className="container">
      <div className="row ">
        {props.products.map((card) => (
          <div className="col-3 gx-2 gy-2 mb-2" key={card.id}>
            <Card
              title={card.title}
              price={card.price}
              discount={card.discount}
              imageUrl={card.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
