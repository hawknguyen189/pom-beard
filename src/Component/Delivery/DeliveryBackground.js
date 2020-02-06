import React from "react";
import "./DeliveryBackground.css";

const DeliveryBackground = () => {
  return (
    <div className="delivery-background">
      
      <img
        src={require("../../media/delivery-background.png")}
        alt=""
        className="img-fluid mx-auto d-block"
      />
    </div>
  );
};
export default DeliveryBackground;
