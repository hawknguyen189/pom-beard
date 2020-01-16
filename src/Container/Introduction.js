import React from "react";
import BusinessDescription from "../Component/BusinessDescription/BusinessDescription";
import BusinessVision from "../Component/BusinessDescription/BusinessVision";
const Introduction = () => {
  return (
    <div className="introduction light-grey">
      <BusinessVision />
      <BusinessDescription />
    </div>
  );
};

export default Introduction;
