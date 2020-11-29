import React from "react";

export function Movie(props) {
  return (
    <div>
      <p>
        <img src={props.src} alt={props.title}></img>
      </p>
      <p>{props.title}</p>
    </div>
  );
}

