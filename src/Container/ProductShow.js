import React from "react";
import Deals from "../Component/Deals/Deals";
import FrontPageProducts from "../Component/Deals/FrontPageProducts";

const ProductShow = () => {
  return (
    <div className="StoreProducts">
      <Deals />
      <FrontPageProducts />
    </div>
  );
};

export default ProductShow;
