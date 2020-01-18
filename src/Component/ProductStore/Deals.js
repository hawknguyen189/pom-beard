import React from "react";
import deals from "./DealsData";
import "./ProductStore.css";

const Deals = () => {
  return (
    <div class="container-fluid deal-background deal-of-the-day align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="product-display col-md-6 d-flex">
            <img
              src={require("../../media/" + deals[0].productImage)}
              class="img-fluid"
              alt="deal-of-the-day"
            />
            <div className="product-price align-self-center position-absolute align-items-center justify-content-center d-flex main-font">
              <a href="" class="text-center text-reset">
                <span>-Only-</span>

                <span>
                  {" "}
                  <span>£</span>
                  {deals[0].productPrice}
                </span>
              </a>
            </div>
          </div>
          <div className="product-display col-md-6 align-self-center main-font">
            <h1 class="font-weight-bolder deal-product-header">
              DEAL OF THE DAY
            </h1>
            <h5 class="pb-4 deal-product-name">{deals[0].productName}</h5>
            <p class="pb-4">{deals[0].productDesc}</p>
            <button className="btn btn-primary add-to-cart align-self-center">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
