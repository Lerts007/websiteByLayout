import React from "react";
import "./InputForm.css";

const InputForm = (props) => {
  return (
    <div style={{ gridArea: `${props.gridArea}` }}>
      <input
        className="inputForm"
        type="text"
        style={{
          width: `${props.width}`,
          height: `${props.height}`,
        }}
        placeholder={props.value}
      />
    </div>
  );
};

export default InputForm;
