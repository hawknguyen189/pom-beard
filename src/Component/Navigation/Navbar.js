import React from "react";
import brandLogo from "../../media/pom-beard-logo.png";
import NavItem from "../Navigation/NavItem";
import "./Navigation.scss"

const Navbar = () => {
  return (
    // start off navbar
    <div className="row sticky-top  navbar-light bg-light">
      <div className="col-sm-3 d-flex align-items-center justify-content-center">
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
      <nav id="navBar" className="navbar navbar-expand-lg col-sm-6">
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
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-2">
              <NavItem
                navMenu="Home"
                className="active"
                navList={["Home 1", "Home 2", "Home 3"]}
              ></NavItem>
            </ul>
            <ul className="navbar-nav  mr-2">
              <NavItem
                navMenu="Pages"
                className=""
                navList={["Pages 1", "Pages 2", "Pages 3"]}
              ></NavItem>
            </ul>
            <ul className="navbar-nav mr-2">
              <NavItem
                navMenu="Features"
                className=""
                navList={["Feature 1", "Feature 2", "Feature 3"]}
              ></NavItem>
            </ul>
            <ul className="navbar-nav mr-2">
              <NavItem
                navMenu="Shop"
                className=""
                navList={["Shop 1", "Shop 2", "Shop 3"]}
              ></NavItem>
            </ul>
            <ul className="navbar-nav mr-2">
              <NavItem
                navMenu="Blog"
                className=""
                navList={["Blog 1", "Blog 2", "Blog 3"]}
              ></NavItem>
            </ul>
            <ul className="navbar-nav mr-2">
              <NavItem
                navMenu="Contact"
                className=""
                navList={["Contact 1", "Contact 2", "Contact 3"]}
              ></NavItem>
            </ul>
            <form className="form-inline my-2 my-lg-0 mr-auto">
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
            </form>
          </div>
        </div>
      </nav>
      <div className="col-sm d-flex align-items-center justify-content-center">
        <i className="fas fa-user-circle nav-icon"></i>
        <i className="far fa-heart nav-icon pl-4"></i>
        <i className="fas fa-shopping-cart nav-icon pl-4"></i>
      </div>
    </div> //end of row
  );
};

export default Navbar;
