import React from "react";
import deals from "../Deals/DealsData";

const Deals = () => {
  return (
    <div class="container deal-of-the-day align-items-center justify-content-center">
      <div className="row">
        <div className="product-display col-md-6">
          <img
            src={require("../../media/" + deals[0].productImage)}
            class="img-fluid"
            alt="deal-of-the-day"
          />
          <div className="product-price">
            <a href="">
              <span>-Only-</span>
              <span>£</span>
              <span>{deals[0].productPrice}</span>
            </a>
          </div>
        </div>
        <div className="product-display col-md-6">
          <h1>Deal Of The Day</h1>
          <h5>{deals[0].productName}</h5>
          <p>{deals[0].productDesc}</p>
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Deals;
