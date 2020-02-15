import React from "react";
import brandLogo from "../../media/pom-beard-logo.png";
import NavItem from "../Navigation/NavItem";

const Navbar = () => {
  return (
    // start off navbar
    <nav
      id="navBar"
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
    >
      <a className="navbar-brand" href="#">
        <img src={brandLogo} alt="brand-logo" width="30" height="30" />
        <span>PomBeard</span>
      </a>
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
          <ul className="navbar-nav">
            <NavItem
              navMenu="Home"
              className="active"
              navList={["Home 1", "Home 2", "Home 3"]}
            ></NavItem>
          </ul>
          <ul className="navbar-nav ">
            <NavItem
              navMenu="Pages"
              className=""
              navList={["Pages 1", "Pages 2", "Pages 3"]}
            ></NavItem>
          </ul>
          <ul className="navbar-nav">
            <NavItem
              navMenu="Features"
              className=""
              navList={["Feature 1", "Feature 2", "Feature 3"]}
            ></NavItem>
          </ul>
          <ul className="navbar-nav">
            <NavItem
              navMenu="Shop"
              className=""
              navList={["Shop 1", "Shop 2", "Shop 3"]}
            ></NavItem>
          </ul>
          <ul className="navbar-nav">
            <NavItem
              navMenu="Blog"
              className=""
              navList={["Blog 1", "Blog 2", "Blog 3"]}
            ></NavItem>
          </ul>
          <ul className="navbar-nav">
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
          <div className="row">
            <i class="far fa-heart"></i>
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
