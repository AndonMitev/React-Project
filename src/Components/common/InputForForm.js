import React from "react";

const Input = props => (
  <input
    name={props.name}
    type={props.type}
    onChange={e => props.onChange(e)}
    value={props.value}
    className={props.className}
    placeholder={props.placeholder}
  />
);

export default Input
