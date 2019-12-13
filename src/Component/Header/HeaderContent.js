import React from "react";
import Background from "./Background";
import SlidingProducts from "./SlidingShowData";

let className = "";
const HeaderContent = () => {
  return (
    <div className="header-sliding-show jumbotron p-0">
      <div id="headerCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators pomegranate">
          <li
            data-target="#headerCarousel"
            data-slide-to="0"
            class="active"
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
            return <Background class={className} sliderData={value} />;
          })}
        </div>
        {/* carousel indicator */}

        <a
          class="carousel-control-prev"
          href="#headerCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            class="carousel-control-prev-icon pomegranate"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#headerCarousel"
          role="button"
          data-slide="next"
        >
          <span
            class="carousel-control-next-icon pomegranate"
            aria-hidden="true"
          ></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default HeaderContent;
