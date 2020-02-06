import React from "react";
import SectionTitle from "../Component/CommonUse/SectionTitle";
import DeliveryBackground from "../Component/Delivery/DeliveryBackground";
import DeliveryProcess from "../Component/Delivery/DeliveryProcess";

const Delivery = () => {
  return (
    <div className="container">
      <div className="row">
        <SectionTitle title="Delivery Process" desc="How To Get Delivered" />
      </div>
      <DeliveryProcess/>
      <DeliveryBackground/>
    </div>
  );
};
export default Delivery;
