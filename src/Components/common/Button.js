import React from "react";

const Button = props => (
  <button onClick={e => props.onClick(e)} className={props.className}>
    Delete
  </button>
);

export default Button;
