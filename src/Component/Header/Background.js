import React from "react";
import "./Background.css";

const Background = props => {
  return (
    <div className={props.class}>
      <div className="main-background w-100 d-flex">
        <div className="d-flex justify-content-around align-items-center p-5 w-100">
          <p>asdaskjdaskldjkladjkladkakadl</p>
          <div className="slider-content w-100"></div>
          <img
            class="w-100"
            src={require("../../media/" + props.sliderData.url)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
