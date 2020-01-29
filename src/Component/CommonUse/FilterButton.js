import React from "react";
import "./FilterButton.css";

const FilterButton = (props) => {
  return (
    <div className="container text-center">
      <button
        onClick={props.handleClick}
        data-filter-value="all"
        className="btn btn-outline-info mr-2 ml-2 filter-button"
      >
        All
      </button>
      <button
        data-filter-value="fruit-vegies"
        className="btn btn-outline-info mr-2 ml-2 filter-button"
      >
        FRUIT & VEGIES
      </button>
      <button
        data-filter-value="juice"
        className="btn btn-outline-info mr-2 ml-2 filter-button"
      >
        JUICE
      </button>
      <button
        data-filter-value="processedFood"
        className="btn btn-outline-info mr-2 ml-2 filter-button"
      >
        PROCESSED FOOD
      </button>
      <button
        data-filter-value="skinCare"
        className="btn btn-outline-info mr-2 ml-2 filter-button"
      >
        SKIN CARE
      </button>
    </div>
  );
};

export default FilterButton;
