import React from "react";
import "./Product.css";
import Puja from "./images/Puja.jpeg";

function SearchResult() {
  return (
    <div className="product">
      <div className="product_info">
        <p>Cutiee</p>
        <p className="product_price">
          <small>₹</small>
          <strong>20</strong>
        </p>
        <div className="product_rating">
          {Array(5)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={Puja} alt="IMAGE" />

      <button>Add to Basket</button>
    </div>
  );
}

export default SearchResult;
