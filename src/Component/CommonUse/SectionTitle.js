import React from "react";
import "./SectionTitle.css"

const SectionTitle = (props) => {
    return (
      <div class="container text-center pt-3 pb-3 section-title">
        <h1 class="font-weight-bold mt-3">{props.title}</h1>
        <h4>{props.desc}</h4>
      </div>
    );
};

export default SectionTitle;