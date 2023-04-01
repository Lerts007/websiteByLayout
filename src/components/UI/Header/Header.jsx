import React from "react";
import logo from "../img/logo-black.png";
import Button from "../button/Button";
import cl from "./Header.module.css";

const Header = () => {
  return (
    <div className={cl.header}>
      <img src={logo} alt="iNSTALLA" className={cl.img} />
      <div className={cl.menu}>
        <a href="/">Home</a>
        <a href="/aboutUs">About Us</a>
        <a href="/services">Services</a>
        <a href="Careers">Careers</a>
        <Button value="Contact Us" />
      </div>
    </div>
  );
};

export default Header;
