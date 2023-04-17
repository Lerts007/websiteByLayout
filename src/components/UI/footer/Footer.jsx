import React from "react";
import logo from "../img/logo-white.png";
import cl from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={cl.footer}>
      <div className={cl.footer1}>
        <img src={logo} alt="iNSTALLA" className={cl.img} />
        <div className={cl.menu}>
          <a href="/">Home</a>
          <a href="/aboutUs">About Us</a>
          <a href="/services">Services</a>
          <a href="Careers">Careers</a>
        </div>
      </div>
      <div className={cl.footer2}>
        <p>
          © Copyright 2021 installamarketing.com – All Rights Reserved | The
          Website Is Owned And Operated By Installa Ltd.
        </p>
        <p>
          Address: Trust company complex, Ajeltake road, Ajeltake Island, Majuro
          Islands MH96960, Marshal Islands; Phone Number:
          <a href="tell:+38517900089"> +38517900089</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
