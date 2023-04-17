import React from "react";
import cl from "./InfoBlock.module.css";

const InfoBlock = (props) => {
  return (
    <div className={cl.block}>
      <img src={props.img} className={cl.img} />
      <h4 className={cl.name}>{props.name}</h4>
      <p className={cl.text}>{props.text}</p>
    </div>
  );
};

export default InfoBlock;
