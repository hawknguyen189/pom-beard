import React from "react";
import ImpressionLogo from "../../media/business-description.png";

const BusinessVision = () => {
  return (
    <section class="container-fluid">
      <img
        src={ImpressionLogo}
        alt="business-impression"
        class="mx-auto d-block pb-5 pt-5"
      />
      <div className="d-flex justify-content-center">
        <h4 class="header-content col-sm-4 pb-5 pt-5">
          We are <strong>Online Market</strong> of fresh fruits & vegetables.
          You can also find organic & healthy juice, processed food as well as
          gentle skin care at our store.
        </h4>
      </div>
    </section>
  );
};

export default BusinessVision;
