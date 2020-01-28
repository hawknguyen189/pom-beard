import React from "react";
import FilterButton from "../CommonUse/FilterButton"
import FrontPageProducts from "./FrontPageProducts";


const FilterBar = () => {
    return (
        <div>
            <FilterButton/>
            <FrontPageProducts />
        </div>
    );
};
export default FilterBar;