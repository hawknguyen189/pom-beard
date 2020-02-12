import React from "react";

const Contact = () => {
  return (
    <div className="col-sm contact-div">
      <div className="contact-info">
        <h3>CONTACT</h3>
        <p>
          <i className="fas fa-home contact-icon mr-2 text-center"></i>
          Montreal, QC
        </p>
        <p>
          <i className="fas fa-mobile-alt contact-icon mr-2 text-center"></i>
          514 872-0311
        </p>
        <p>
          <i className="far fa-envelope contact-icon mr-2 text-center"></i>
          contact@pombeard.com
        </p>
        <p>
          <i className="fas fa-globe-americas contact-icon mr-2 text-center"></i>
          www.pombeard.com
        </p>
      </div>
      <div className="contact-network row">
        <a
          href="https://www.facebook.com/"
          className="rounded-circle network-bg text-center d-inline-block mr-2"
        >
          <i className="fab fa-facebook-f col-sm align-middle"></i>
        </a>
        <a
          href="https://twitter.com/"
          className="rounded-circle network-bg text-center d-inline-block mr-2"
        >
          <i className="fab fa-twitter col-sm"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          className="rounded-circle network-bg text-center d-inline-block mr-2"
        >
          <i className="fab fa-instagram col-sm"></i>
        </a>
        <a
          href="https://www.pinterest.com/"
          className="rounded-circle network-bg text-center d-inline-block mr-2"
        >
          <i className="fab fa-pinterest-p col-sm"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
