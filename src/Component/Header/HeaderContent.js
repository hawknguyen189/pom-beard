import React from "react";
import Background from "./Background";
import SlidingProducts from "./SlidingShowData";

let className = "";
const HeaderContent = () => {
  return (
    <div className="header-sliding-show jumbotron p-0">
      <div id="headerCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators pomegranate">
          <li
            data-target="#headerCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#headerCarousel" data-slide-to="1"></li>
          <li data-target="#headerCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          {SlidingProducts.map((value, index) => {
            if (index === 0) {
              className = "carousel-item active";
            } else {
              className = "carousel-item";
            }
            return <Background className={className} sliderData={value} />;
          })}
        </div>
        {/* carousel indicator */}
        <div className="arrow-control-carousel">
          <a
            className="carousel-control-prev carousel-arrow"
            href="#headerCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon pomegranate"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next carousel-arrow"
            href="#headerCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon pomegranate"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
