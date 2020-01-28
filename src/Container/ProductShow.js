import React from "react";
import Deals from "../Component/ProductStore/Deals";
import SectionTitle from "../Component/CommonUse/SectionTitle";
import FilterBar from "../Component/ProductStore/FilterBar";

const ProductShow = () => {
  return (
    <section className="store-products container-fluid">
      <Deals />
      <SectionTitle title="OUR PRODUCTS" desc="-Featured Products-" />
      <FilterBar />
    </section>
  );
};

export default ProductShow;
