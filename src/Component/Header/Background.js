import React from "react";
import "./Background.css";

const Background = props => {
  return (
    <div className={props.class} data-interval={props.sliderData.intervalTime}>
      <div className="main-background w-100 d-flex">
        <div className="d-flex justify-content-between align-items-center p-4 w-100 container">
          <div class="header-content">
            <h4 class="header-title text-left">{props.sliderData.title}</h4>
            <h1 class="header-heading">{props.sliderData.heading}</h1>
            <span class="header-caption text-left">{props.sliderData.caption}</span>
          </div>
          <div className="slider-content"></div>
          <img
            class="w-75"
            src={require("../../media/" + props.sliderData.url)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
