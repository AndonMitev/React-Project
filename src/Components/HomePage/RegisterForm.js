import React, { Component } from "react";
import Input from "../common/InputForForm";
import Label from "../common/LabelForForm";

import withFormManager from "../../hoc/FromManager";
import model from "../../models/userRegister";

class Register extends Component {
  render() {
    const props = this.props;
    return (
      <div className="container">
        <h3 className="display-4 text-center text-secondary">Sing Up</h3>
        <hr />
        <div className="row text-center">
          <div className="offset-2 col-sm-8">
            <form onSubmit={props.handleFormOnSubmit} className="form-group">
              <Label name="username" labelName="Username" />
              <Input
                name="username"
                type="text"
                onChange={props.handleInputOnChange}
                value={props.username}
                className="form-control"
                placeholder="John"
              />
              <br />
              <Label name="password" labelName="Password" />
              <Input
                name="password"
                type="password"
                onChange={props.handleInputOnChange}
                value={props.password}
                className="form-control"
                placeholder="Your Password"
              />
              <br />
              <Label name="confirmPassword" labelName="Confirm password" />
              <Input
                name="confirmPassword"
                type="password"
                onChange={props.handleInputOnChange}
                value={props.confirmPassword}
                className="form-control"
                placeholder="Your Password"
              />
              <br />
              <Label name="email" labelName="Email" />
              <Input
                name="email"
                type="text"
                onChange={props.handleInputOnChange}
                value={props.email}
                className="form-control"
                placeholder="john@gmail.com"
              />
              <br />
              <Label name="confirmEmail" labelName="Confirm Email" />
              <Input
                name="confirmEmail"
                type="text"
                onChange={props.handleInputOnChange}
                value={props.confirmEmail}
                className="form-control"
                placeholder="john@gmail.com"
              />
              <br />
              <Input
                type="submit"
                value="Sign Up"
                className="btn btn-success mr-1"
              />
              <Input type="reset" value="Reset" className="btn btn-danger " />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withFormManager(Register, model);
