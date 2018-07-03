import React from "react";

const Label = props => <label htmlFor={props.name} className={props.className}>{props.labelName}</label>;

export default Label;
