import React from "react";
import InputForm from "../components/UI/InputForm/InputForm";

import "../style/ContactUs.css";

import down_arrow from "../img/down-arrow.svg";

// Изображения для заднего фона
import Illustration from "../img/illustration.svg";

import backgroundCircle2 from "../img/background-circle2.svg";

import backgroundArrow from "../img/background-arrow.svg";

import backgroundElement1 from "../img/background-element1.svg";
import backgroundElement2 from "../img/background-element2.svg";

const ContactUs = () => {
  return (
    <div className="contentUs content">
      {/* Секция 1 */}
      <div className="contentUs__section1 content__section1">
        <h3 className="contentUs__section1-h3 h3">Contact Us</h3>
        <div className="contentUs__section1-info info">
          <img
            className="contentUs__section1-info-img"
            src={Illustration}
            alt=""
          />
          <div className="contentUs__section1-info-text">
            <h4 className="contentUs__section1-info-text-h4 h4">
              Ready to take the next step and work together? Let’s do it!
            </h4>
            <p className="content__section1-info-text-p p">
              The digital marketing environment is highly dynamic and
              competitive. Gain a competitive edge and advance your online
              presence by making use of our strategic business planning,
              innovative technology, and in-depth analysis.
              <br />
              <br />
              Do not hesitate to reach out to us by filling out the contact form
              below. Out Team will get in touch with you shortly, so we can
              further discuss your current and further business strategies.
            </p>
            <img
              className="contentUs__section1-info-text-backgroundElement2"
              src={backgroundElement2}
            />
          </div>
        </div>
        <img
          className="content__section1-arrow"
          src={down_arrow}
          alt="Стрелка вниз"
        />

        <img
          className="content__section1-backgroundCircle2"
          src={backgroundCircle2}
        />
        <img
          className="content__section1-backgroundArrow"
          src={backgroundArrow}
        />
        <img
          className="contentUs__section1-backgroundElement1"
          src={backgroundElement1}
        />
      </div>

      {/* Секция 2 */}
      <div className="contentUs__section2">
        <h3 className="contentUs__section2-h3 h3">Let's get in touch.</h3>
        <div className="contentUs__section2-form">
          <InputForm value="Your name*" gridArea={"a"} />
          <InputForm value="Your email*" gridArea={"b"} />
          <InputForm value="Subject*" gridArea={"c"} />
          <InputForm value="Your message*" gridArea={"d"} height={"328px"} />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
