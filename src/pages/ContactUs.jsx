import React from "react";
import "../style/ContactUs.css";

import Illustration from "../img/illustration.svg";
import backgroundCircle2 from "../img/background-circle2.svg";
import backgroundArrow from "../img/background-arrow.svg";
import backgroundElement1 from "../img/background-element1.svg";

const ContactUs = () => {
  return (
    <div className="contentUs content">
      <div className="contentUS__section1 content__section1">
        <h3 className="contentUS__section1-h3 h3">Contact Us</h3>
        <div className="contentUS__section1-info info">
          <img
            className="contentUS__section1-info-img"
            src={Illustration}
            alt=""
          />
          <div className="contentUS__section1-info-text">
            <h4 className="contentUS__section1-info-text-h4 h4">
              Creating Business Growth
            </h4>
            <p className="content__section1-info-text-p p">
              At Installa we offer you a results-driven approach to effectively
              reach your audience, while ensuring your brand’s relevancy on all
              social platforms through our strategic contextual targeting
              concepts. In addition, we optimize key KPIs like customer turnover
              rate and sales percentage of new clients, with the means to enable
              well-informed business decisions regarding the overall direction
              of your business’ current, as well as future projects.
            </p>
          </div>
        </div>
        <img
          className="content__section1-backgroundCircle2"
          src={backgroundCircle2}
        />
        <img
          className="content__section1-backgroundArrow"
          src={backgroundArrow}
        />
        <img
          className="content__section1-backgroundElement1"
          src={backgroundElement1}
        />
      </div>
    </div>
  );
};

export default ContactUs;
