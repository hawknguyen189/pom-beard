import React, { useEffect } from "react";
import brandLogo from "../../media/pom-beard-logo.png";
import NavDropdown from "./NavDropdown";
import { _debounce } from "../CommonUse/Utils";
import "./Navigation.scss";

const NavbarMobile = () => {
  useEffect(() => {
    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      const navbarMobile = document.getElementsByClassName(
        "navbar-mobile-header"
      )[0].classList;
      document.documentElement.dataset.scroll = window.scrollY;
      if (parseInt(document.documentElement.dataset.scroll) !== 0) {
        navbarMobile.remove("navbar-mobile--top");
        navbarMobile.add("navbar-mobile--not-top");
      } else {
        navbarMobile.remove("navbar-mobile--not-top");
        navbarMobile.add("navbar-mobile--top");
      }
    };

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener("scroll", _debounce(storeScroll), {
      passive: true
    });

    // Update scroll position for first time
    storeScroll();
  });
  return (
    <header
      id="headerNavbarMobile"
      className="d-lg-none sticky-top navbar-mobile-header navbar-mobile--top"
    >
      <div className="navbar-mobile container">
        <div tabIndex="0" className="navigation-header row mx-0">
          <div className="col-6 mobile-brand d-flex justify-content-end align-items-center">
            <span className="nav-mobile-header">Pom Beard</span>
          </div>
          <div className="nav-mobile-icon col-6 d-flex align-items-center justify-content-end">
            <i className="fas fa-user-circle nav-icon pr-4"></i>
            <i className="far fa-heart nav-icon pr-4"></i>
            <i className="fas fa-shopping-cart nav-icon pr-4"></i>
          </div>
        </div>
        <div id="nav-container">
          <div className="bg"></div>
          <div className="button" tabIndex="0">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </div>
          <div id="nav-content" tabIndex="0">
            <ul>
              <li>
                <a href="#mainBackground">Home</a>
              </li>
              <li>
                <a href="#0">Services</a>
              </li>
              <li>
                <a href="#blogSection">Blog</a>
              </li>
              <li>
                <a href="#0">About</a>
              </li>
              <li>
                <a href="#0">Contact</a>
              </li>
              <li className="small">
                <a href="#0">Facebook</a>
                <a href="#0">Instagram</a>
              </li>
            </ul>
          </div>
          {/* nav contaienr div  */}
        </div>
        {/* nav mobile div */}
      </div>
    </header>
  );
};

export default NavbarMobile;
