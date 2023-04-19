import React from "react";
import Button from "../components/UI/button/Button";
import concept from "../img/concept.svg";
import content from "../img/content.svg";
import creaivity from "../img/creativity.svg";
import down_arrow from "../img/down-arrow.svg";
import section3 from "../img/Installa_section3.gif";
import section4 from "../img/Installa_section4.gif";
import installa from "../img/Installa.gif";
import management from "../img/management.svg";
import monitor from "../img/monitor.svg";
import research from "../img/research.svg";
import seo from "../img/seo.svg";
import "../style/Home.css";
import InfoBlock from "../components/UI/infoBlock/InfoBlock";

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
    </div>
  );
};

export default Home;
