import React from "react";

const Form = props => <form onSubmit={e => props.onSubmit(e)}></form>;

export default Form;
