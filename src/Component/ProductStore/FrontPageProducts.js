import React from "react";
import products from "./ProductsData";
import { StoreContext } from "../CommonUse/StoreContext";

const FrontPageProducts = () => {
  const [tag, setTag] = React.useContext(StoreContext);
  let filteredProducts;
  if (tag.includes("all")) {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter(product => {
      let showProduct = false;
      for (let i = 0; i < tag.length; i++) {
        if (product.tag.includes(tag[i])) {
          showProduct = true;
          console.log(tag[i])
          break;
        }
      }
      return showProduct === true;
    });
  }
  return (
    <div className="container mt-3">
      <div className="row product-shelf">
        {filteredProducts.map(product => {
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
                  <p className="text-center">
                    <span>£</span>
                    {product.productPrice}
                  </p>
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
