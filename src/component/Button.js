import React from "react";

export const Button = (props) => (
  <button onClick={props.action} className={props.class}>
    {props.label}
  </button>
);

