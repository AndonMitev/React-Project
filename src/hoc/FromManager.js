import React, { Component } from "react";

//Generate default props
const getRequestData = (state, defaultState) => {
  const data = {};

  for (let key of Object.keys(defaultState)) {
    data[key] = state[key];
  }

  return data;
};

//Getting correct model so we can use it for more cases
const getCurrentModel = (allModels, currentEntity) => {
  const allEntities = Object.keys(allModels).slice(1);

  /* getLoginState become LoginState
     getRegisterState become RegisterState*/
  currentEntity = currentEntity.substr(3);

  /* compare if validateLoginState.includes(LoginState) || (RegisterState) and so on*/
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

    //Handle input on change
    handleInputOnChange = event => {
      let fieldName = event.target.name;
      let fieldValue = event.target.value;
      this.setState({ [fieldName]: fieldValue });
    };

    //Handle form on change
    handleFormOnSubmit = event => {
      event.preventDefault();

      //Getting correct parrent model and validate correct entities
      const sendToParent = Object.keys(this.props)[0];
      const currentModel = getCurrentModel(model, sendToParent);
      const entityToValidate = getRequestData(this.state, this.dataModel);
      let error = model[currentModel](entityToValidate);
      if (error) {
        this.setState({ error });
        return;
      }

      //Sending to parrent with valid getState function()
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
