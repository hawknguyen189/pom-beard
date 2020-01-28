import React from "react";
import "./FilterButton.css"

const FilterButton = () => {
    return (
      <div class="container text-center">
        <a href="" class="btn btn-outline-info mr-2 ml-2 filter-button">All</a>
        <a href="" class="btn btn-outline-info mr-2 ml-2 filter-button">FRUIT & VEGIES</a>
        <a href="" class="btn btn-outline-info mr-2 ml-2 filter-button">JUICE</a>
        <a href="" class="btn btn-outline-info mr-2 ml-2 filter-button">PROCESSED FOOD</a>
        <a href="" class="btn btn-outline-info mr-2 ml-2 filter-button">SKIN CARE</a>
      </div>
    );
};

export default FilterButton;