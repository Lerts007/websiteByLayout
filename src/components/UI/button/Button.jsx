import React from "react";
import cl from "./Button.module.css";

const Button = ({ value }) => {
  return <button className={cl.myBtn}>{value}</button>;
};

export default Button;
