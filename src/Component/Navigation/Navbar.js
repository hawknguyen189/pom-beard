import React, { useEffect } from "react";
import brandLogo from "../../media/pom-beard-logo.png";
import NavItem from "../Navigation/NavItem";
import $ from "jquery";

const Navbar = () => {
  // this is for hover menu
  useEffect(() => {
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function() {
      if (this.matchMedia("(min-width: 768px)").matches) {
        console.log("inside useEffect");
        $dropdown.hover(
          function() {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
          },
          function() {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
          }
        );
      } else {
        $dropdown.off("mouseenter mouseleave");
      }
    });
  });

  return (
    // start off navbar
    <div className="row sticky-top navbar-light bg-light">
      <div className="col-3 d-flex align-items-center justify-content-center">
        <a className="" href="#header">
          <img
            src={brandLogo}
            className="img-fluid"
            alt="brand-logo"
            width="30"
            height="30"
          />
          <span>PomBeard</span>
        </a>
      </div>
      <nav id="navBar" className="navbar navbar-expand-lg col-6">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center d-lg-flex"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-2 nav-pills">
            <NavItem
              navMenu="Home"
              className=""
              navList={["Home 1", "Home 2", "Home 3"]}
              path="#mainBackground"
            ></NavItem>
          </ul>
          <ul className="navbar-nav  mr-2 nav-pills">
            <NavItem
              navMenu="Pages"
              className=""
              navList={["Pages 1", "Pages 2", "Pages 3"]}
              path="#sectionIntroduction"
            ></NavItem>
          </ul>
          <ul className="navbar-nav mr-2 nav-pills">
            <NavItem
              navMenu="Deals"
              className=""
              navList={["Deal 1", "Deal 2", "Deal 3"]}
              path="#dealSection"
            ></NavItem>
          </ul>
          <ul className="navbar-nav mr-2 nav-pills">
            <NavItem
              navMenu="Shop"
              className=""
              navList={["Shop 1", "Shop 2", "Shop 3"]}
              path="#storeSection"
            ></NavItem>
          </ul>
          <ul className="navbar-nav mr-2 nav-pills">
            <NavItem
              navMenu="Blog"
              className=""
              navList={["Blog 1", "Blog 2", "Blog 3"]}
              path="#blogSection"
            ></NavItem>
          </ul>
          <ul className="navbar-nav mr-2 nav-pills">
            <NavItem
              navMenu="Contact"
              className=""
              navList={["Contact 1", "Contact 2", "Contact 3"]}
              path="#footer"
            ></NavItem>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0 mr-auto">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form> */}
        </div>
      </nav>
      <div className="col-3 d-flex align-items-center justify-content-center">
        <i className="fas fa-user-circle nav-icon"></i>
        <i className="far fa-heart nav-icon pl-4"></i>
        <i className="fas fa-shopping-cart nav-icon pl-4"></i>
      </div>
    </div> //end of row
  );
};

export default Navbar;
