import React from "react";
import "./FilterButton.css";
import {StoreContext} from "./StoreContext"

const FilterButton = (props) => {
  const [tag,setTag] = React.useContext(StoreContext);
  const handleFilterButton = event => {
    // event.persist(); //without this the event will return only null, this is for react performance purpose
    const filterData = event.target.dataset.filterValue.split("-");
    setTag(filterData);
  };
  return (
    <div className="container text-center">
      <button
        onClick={handleFilterButton}
        data-filter-value="all"
        className="btn btn-outline-info mr-2 ml-2 filter-button"
      >
        All
      </button>
      <button
        onClick={handleFilterButton}
        data-filter-value="fruit-vegie"
        className="btn btn-outline-info mr-2 ml-2 filter-button"
      >
        FRUIT & VEGIES
      </button>
      <button
        onClick={handleFilterButton}
        data-filter-value="juice"
        className="btn btn-outline-info mr-2 ml-2 filter-button"
      >
        JUICE
      </button>
      <button
        onClick={handleFilterButton}
        data-filter-value="processedFood"
        className="btn btn-outline-info mr-2 ml-2 filter-button"
      >
        PROCESSED FOOD
      </button>
      <button
        onClick={handleFilterButton}
        data-filter-value="skinCare"
        className="btn btn-outline-info mr-2 ml-2 filter-button"
      >
        SKIN CARE
      </button>
    </div>
  );
};

export default FilterButton;
