import React from "react";
import Button from "../components/UI/button/Button";
import concept from "../img/concept.svg";
import content from "../img/content.svg";
import creaivity from "../img/creativity.svg";
import down_arrow from "../img/down-arrow.svg";
import section3 from "../img/Installa_section3.gif";
import section4 from "../img/Installa_section4.gif";
import section6 from "../img/Installa_section6.png";
import installa from "../img/Installa.gif";
import management from "../img/management.svg";
import monitor from "../img/monitor.svg";
import research from "../img/research.svg";
import seo from "../img/seo.svg";
import "../style/Home.css";
import InfoBlock from "../components/UI/infoBlock/InfoBlock";

import backgroundCircle from "../img/background-circle.svg";
import backgroundCircle2 from "../img/background-circle2.svg";
import backgroundCircle3 from "../img/background-circle3.svg";
import backgroundCircle4 from "../img/background-circle4.svg";

import backgroundArrow from "../img/background-arrow.svg";
import backgroundElement1 from "../img/background-element1.svg";
import backgroundElement2 from "../img/background-element2.svg";
import backgroundElement3 from "../img/background-element3.svg";

const Home = () => {
  return (
    <div className="content">
      <div className="content__section1">
        <div className="content__section1-info">
          <div className="content__section1-info-text">
            <p>DIGITAL MARKETING AGENCY</p>
            <h3>We Build Your Digital Campaign Performance</h3>
            <p>
              Creating impactful marketing strategies for new business horizons.
            </p>
          </div>
          <img src={installa} />
        </div>
        <img
          className="content__section1-arrow"
          src={down_arrow}
          alt="Стрелка вниз"
        />
        <img
          className="content__section1-backgroundElement2"
          src={backgroundElement2}
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
          className="content__section1-backgroundElement1"
          src={backgroundElement1}
        />
      </div>
      <div className="content__section2">
        <h3 className="content__section2-h3 h3">Services</h3>
        <div className="content__section2-info">
          <InfoBlock
            img={research}
            name={"User & Audience Incsights Analysis"}
            text={
              "Data-rich audience insight reports, segmenting of audience based on their online habits, interests, and keywords."
            }
          />
          <InfoBlock
            img={seo}
            name={"Performance Marketing Campaigns"}
            text={
              "Real-time ROI measurements optimizing KPIs such as customer turnover rate and percentage of sales from new clients."
            }
          />
          <InfoBlock
            img={content}
            name={"Keyword Targeting"}
            text={
              "Contextual targeting with a selection of highly used keywords and topics showing your ads only on relevant platforms."
            }
          />
        </div>
        <img
          className="content__section2-backgroundCircle"
          src={backgroundCircle3}
        />
        <img
          className="content__section2-backgroundArrow"
          src={backgroundArrow}
        />
      </div>
      <div className="content__section3">
        <h3 className="content__section3-h3 h3">The Installa Approach</h3>
        <div className="content__section3-info info">
          <img className="content__section3-info-img" src={section3} alt="" />
          <div className="content__section3-info-text">
            <h4 className="content__section3-info-text-h4 h4">
              Creating Business Growth
            </h4>
            <p className="content__section3-info-text-p p">
              At Installa we offer you a results-driven approach to effectively
              reach your audience, while ensuring your brand’s relevancy on all
              social platforms through our strategic contextual targeting
              concepts. In addition, we optimize key KPIs like customer turnover
              rate and sales percentage of new clients, with the means to enable
              well-informed business decisions regarding the overall direction
              of your business’ current, as well as future projects.
            </p>
            <Button value="Get started now" />
          </div>
        </div>

        <img
          className="content__section3-backgroundCircle4"
          src={backgroundCircle4}
        />
        <img
          className="content__section3-backgroundElement3"
          src={backgroundElement3}
        />
        <img
          className="content__section3-backgroundElement2"
          src={backgroundElement2}
        />
      </div>
      <div className="content__section4">
        <h3 className="content__section4-h3 h3">The Installa Solutions</h3>
        <div className="content__section4-info info">
          <div className="content__section4-info-text">
            <h4 className="content__section4-info-text-h4 h4">
              Tailor-Made Marketing Strategies
            </h4>
            <p className="content__section4-info-text-p p">
              As a business-focused consultancy agency, our aspiration is to
              provide professional advisory services to its clients through
              specialized tailor-made solutions. We aim to offer you
              individually crafted marketing campaigns and audience insights
              analysis, equipping you with data-rich reports and real-time ROI
              measurements.
              <br />
              <br />
              With our work, we strive to provide you with business expansion
              opportunities, an increase of brand recognition, and higher
              customer purchase rates. Moreover, our vast experience in the
              field enables a more personalized, flexible approach when it comes
              to the strategic business planning and marketing strategy set up
              of our client’s companies.
            </p>
            <Button value="More about us" />
          </div>
          <img className="content__section4-img" src={section4} alt="" />
        </div>
        <img
          className="content__section4-arrow"
          src={down_arrow}
          alt="Стрелка вниз"
        />
      </div>
      <div className="content__section5">
        <div className="content__section5-info">
          <InfoBlock
            img={concept}
            name={"Clear Concepts"}
            text={
              "In terms of our strategic business planning, we possess a clear view on how to structure our marketing campaigns, as we heavily rely on in-depth research and analysis."
            }
          />
          <InfoBlock
            img={creaivity}
            name={"Innovative Technology"}
            text={
              "We utilize a unique approach when it comes to keyword research, grouping, as well as discovery. We conduct keyword analysis, considering the intent of searchers and use that to your advantage."
            }
          />
          <InfoBlock
            img={monitor}
            name={"In-depth Analysis"}
            text={
              "We perform extensive research in order to improve or adjust targeting techniques, making sure we translate those efforts throughout all advertising platforms your business makes use of."
            }
          />
          <InfoBlock
            img={management}
            name={"Performance Enhancement"}
            text={
              "We help you breakdown your campaign initiatives and narrow down your targeting towards the people who actively clicking on your ads – we provide filtering by gender, age, placement, and device."
            }
          />
        </div>
      </div>
      <div className="content__section6">
        <h3 className="content__section6-h3 h3">
          Get Your Campaign Performance on Another Level!
        </h3>
        <p className="content__section6-p">
          Further develop your successful online presence and scale up your
          business.
        </p>
        <Button value="Get in touch" />
        <img className="content__section6-img" src={section6} alt="" />
      </div>
    </div>
  );
};

export default Home;
