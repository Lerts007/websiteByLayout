import React from "react";
import "./InfoBlock.css";

const InfoBlock = (props) => {
  return (
    <div className="infoBlock">
      <img className="imgInfo" src={props.img} />
      <h4 className="nameInfo">{props.name}</h4>
      <p className="textInfo">{props.text}</p>
    </div>
  );
};

export default InfoBlock;
