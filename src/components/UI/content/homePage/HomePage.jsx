import React from "react";
import down_arrow from "../../img/down-arrow.svg";
import installa from "../../img/Installa.gif";
import content_1 from "../../img/content.svg";
import seo from "../../img/seo.svg";
import research from "../../img/research.svg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="content">
      <div className="content__section1">
        <div className="content__section1-info">
          <div>
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
      <div className="content__section2 h3">
        <h3>Services</h3>
        <div className="content__section2-info">
          <div>
            <img src={research} />
            <h4>User & Audience Incsights Analysis</h4>
            <p>
              Data-rich audience insight reports, segmenting of audience based
              on their online habits, interests, and keywords.
            </p>
          </div>
          <div>
            <img src={seo} />
            <h4>Performance Marketing Campaigns</h4>
            <p>
              Real-time ROI measurements optimizing KPIs such as customer
              turnover rate and percentage of sales from new clients.
            </p>
          </div>
          <div>
            <img src={content_1} />
            <h4>Keyword Targeting</h4>
            <p>
              Contextual targeting with a selection of highly used keywords and
              topics showing your ads only on relevant platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;