import "./Card.css";

export function Card({ imageUrl, price, title, discount }) {
  const priceDiscount = () => {
    return price - price * discount;
  };
  return (
    <div className="card">
      <img className="item-img" src={imageUrl} alt="" />
      <div>
        {discount ? (
          <div>
            <span className="discountedPrice">{priceDiscount()} ₽ </span>
            <span className="oldPrice">{price} ₽ </span>
          </div>
        ) : (
          <span className="currentPrice">{price} ₽</span>
        )}
      </div>
      <p className="">{title}</p>
    </div>
  );
}
