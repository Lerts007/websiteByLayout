import React from "react";
import down_arrow from "../img/down-arrow.svg";
import installa from "../img/Installa.gif";
import content from "../img/content.svg";
import seo from "../img/seo.svg";
import research from "../img/research.svg";
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
        <h3>Services</h3>
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
    </div>
  );
};

export default Home;
