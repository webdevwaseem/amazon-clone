import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  if (title !== "CUTIE") {
    return (
      <div className="product">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>

        <img src={image} alt="IMAGE" />

        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    );
  } else {
    return (
      <div id="hidden">
        <div className="product">
          <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
              <small>₹</small>
              <strong>{price}</strong>
            </p>
            <div className="product_rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
          </div>

          <img src={image} alt="IMAGE" />

          <button onClick={addToBasket}>Add to Basket</button>
        </div>
      </div>
    );
  }
}

export default Product;
