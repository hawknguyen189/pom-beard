import React from "react";
import ImpressionLogo from "../../media/business-description.png";
import IntroductionWho from "../../media/who.png";
import IntroductionHow from "../../media/how.png";
import IntroductionWhat from "../../media/what.png";

const BusinessDescription = () => {
  return (
    <section class="container-fluid">
      <img
        src={ImpressionLogo}
        alt="business-impression"
        class="mx-auto d-block pb-5 pt-5"
      />
      <div className="d-flex justify-content-center">
        <h4 class="header-content col-sm-6 pb-5 pt-5">
          We are <strong>Online Market</strong> of fresh fruits & vegetables.
          You can also find organic & healthy juice, processed food as well as
          gentle skin care at our store.
        </h4>
      </div>
      <div className="introduction d-flex justify-content-center pt-5 pb-5">
        <div className="who col-sm-3">
          <img src={IntroductionWho} alt="" />
          <h6 className="text-content">
            Understanding the sometimes harmful methods of modern agriculture,
            we started a niche for quality organic produce grown.
          </h6>
        </div>
        <div className="how col-sm-3">
          <img src={IntroductionHow} alt="" />
          <h6 className="text-content">
            We believe it’s the best way to inspire our community to relish in
            the taste of real, seasonal produce and keep connected to the land.
          </h6>
        </div>
        <div className="what col-sm-3">
          <img src={IntroductionWhat} alt="" />
          <h6 className="text-content">
            We take special care to select and grow specific crop varieties
            where exceptional flavor is the focus, with a determination to bring
            the best-tasting produce.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default BusinessDescription;
