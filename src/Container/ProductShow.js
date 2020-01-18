import React from "react";
import Deals from "../Component/ProductStore/Deals";
import FrontPageProducts from "../Component/ProductStore/FrontPageProducts";

const ProductShow = () => {
  return (
    <section className="store-products container-fluid">
      <Deals />
      <FrontPageProducts />
    </section>
  );
};

export default ProductShow;
