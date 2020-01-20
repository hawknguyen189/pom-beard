import React from "react";
import Deals from "../Component/ProductStore/Deals";
import FrontPageProducts from "../Component/ProductStore/FrontPageProducts";
import SectionTitle from "../Component/CommonUse/SectionTitle";

const ProductShow = () => {
  return (
    <section className="store-products container-fluid">
      <Deals />
      <SectionTitle title="OUR PRODUCTS" desc="-Featured Products-" />
      <FrontPageProducts />
    </section>
  );
};

export default ProductShow;
