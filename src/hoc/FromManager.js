import React, { Component } from "react";

const getRequestData = (state, defaultState) => {
  const data = {};

  for (let key of Object.keys(defaultState)) {
    data[key] = state[key];
  }

  return data;
};

const getCurrentModel = (allModels, currentEntity) => {
  const allEntities = Object.keys(allModels).slice(1);

  currentEntity = currentEntity.substr(3);

  for (let validateEntity of allEntities) {
    if (validateEntity.includes(currentEntity)) {
      return validateEntity;
    }
  }
};

const withFormManager = (Form, model) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.dataModel = {
        ...model.defaultState,
        ...this.props.extraState
      };

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

      const sendToParent = Object.keys(this.props)[0];
      const currentModel = getCurrentModel(model, sendToParent);
      const entityToValidate = getRequestData(this.state, this.dataModel);
      let error = model[currentModel](entityToValidate);
      if (error) {
        this.setState({ error });
        return;
      }

      this.setState({ error: "" }, () => this.props[sendToParent](this.state));
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
