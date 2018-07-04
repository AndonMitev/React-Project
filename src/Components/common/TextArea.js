import React from "react";

const TextArea = props => (
  <textarea
    name={props.name}
    cols="50"
    rows="10"
    onChange={e => props.onChange(e)}
    value={props.value}
    className={props.className}
  />
);

export default TextArea;
