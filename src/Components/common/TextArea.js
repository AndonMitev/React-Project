import React from "react";

const TextArea = props => (
  <textarea
    name={props.name}
    cols="30"
    rows="10"
    onChange={e => props.onChange(e)}
    value={props.value}
  />
);

export default TextArea;
