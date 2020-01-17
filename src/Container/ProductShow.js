import React from "react";
import Deals from "../Component/Deals/Deals";
import FrontPageProducts from "../Component/Deals/FrontPageProducts";

const ProductShow = () => {
  return (
    <section className="StoreProducts">
      <Deals />
      <FrontPageProducts />
    </section>
  );
};

export default ProductShow;
