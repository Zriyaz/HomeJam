import React, { useState } from "react";
import "./index.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import Logo from "../../assets/logo.png";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="hero">
      <Navbar light expand="md" className="container-fluid">
        <NavbarBrand className="p-5" href="/">
          <img src={Logo} className="brand-logo" alt="jam" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="p-5">
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="link-style">
                <i class="fas fa-search"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link-style">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link-style">Help</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link-style">Account</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link-style">
                <i class="fas fa-shopping-bag"></i>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="hero-content">
        <h1>Cari Cari</h1>
        <p>
          Live from their sofa to yours. Get closer to your favorite artists,
          and never miss out.
        </p>
      </div>
      <div className="circleContainer">
        <div className="circle">
          <div className="innerContaint">
            <p className="heart">
              <i class="far fa-heart"></i>
            </p>
            <p>0</p>
            <p>Heart</p>
          </div>
        </div>
        <div className="circle">
          <div className="innerContaint">
            <p className="heart">
              <i class="far fa-heart"></i>
            </p>
            <p>0</p>
            <p>Heart</p>
          </div>
        </div>
        <div className="circle">
          <div className="innerContaint">
            <p className="heart">
              <i class="far fa-heart"></i>
            </p>
            <p>0</p>
            <p>Heart</p>
          </div>
        </div>
        <div className="circle">
          <div className="innerContaint">
            <p className="heart">
              <i class="far fa-heart"></i>
            </p>
            <p>0</p>
            <p>Heart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
