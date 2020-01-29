import React, { useState, createContext } from "react";
import FilterButton from "../CommonUse/FilterButton";
import FrontPageProducts from "./FrontPageProducts";
const ContextStore = createContext();
const FilterBar = () => {
  const [tag, setTag] = useState("all");
  const handleFilterButton = event => {
    // event.persist(); //without this the event will return only null, this is for react performance purpose
    const filterData = event.target.dataset.filterValue;
    console.log(filterData);
    setTag(filterData);
    console.log("this is useState ", tag);
  };
  const store = {
    tag: [tag, setTag]
  };
  
  return (
    <ContextStore.Provider value={store}>
      <div>
        <FilterButton handleClick={handleFilterButton} />
        <FrontPageProducts />
      </div>
    </ContextStore.Provider>
  );
};
export default FilterBar;
