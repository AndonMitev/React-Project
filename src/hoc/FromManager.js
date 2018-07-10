import React, { Component } from "react";

const withFormManager = (Form, model) => {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        error: "",
        ...model.defaultState
      };
    }

    handleInputOnChange = event => {
      let fieldName = event.target.name;
      let fieldValue = event.target.value;

      this.setState({ [fieldName]: fieldValue });
    };

    handleFormOnSubmit = event => {
      event.preventDefault();
      let error = model.validateLogin(this.state);
      if (error) {
        this.setState({ error });
        return;
      }
      this.setState({ error: "" }, () => this.props.getLoginState(this.state));
    };

    render = () => (
      <Form
        handleFormOnSubmit={this.handleFormOnSubmit}
        handleInputOnChange={this.handleInputOnChange}
        {...this.props}
        {...this.state}
      />
    );
  };
};

export default withFormManager;
