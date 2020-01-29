import React from "react";
import products from "./ProductsData";

const FrontPageProducts = () => {
  const context = React.useContext(ContextStore);
  return (
    <div className="container mt-3">
      <div></div>
      <div className="row product-shelf">
        {products.map(product => {
          const productLink = product.productName
            .toLowerCase()
            .replace(/ /g, "-");
          return (
            <div className="col-sm-3 pr-2 pl-2 pb-2 pt-2">
              <div className="card">
                <div className="product-thumb ">
                  <a href={"#" + productLink} className=" text-center">
                    <img
                      src={require("../../media/products/" +
                        productLink +
                        ".jpg")}
                      alt=""
                      className="card-img-top rounded"
                    />
                  </a>
                </div>
                <div className="product-desc card-body">
                  <a href={"#" + productLink} className=" text-center">
                    <p>{product.productName}</p>
                  </a>
                  <p className="text-center">{product.productPrice}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrontPageProducts;
