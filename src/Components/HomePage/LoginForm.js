import React, { Component } from "react";
import Input from "../common/InputForForm";
import Label from "../common/LabelForForm";
import withFormManager from "../../hoc/FromManager";
import model from "../../models/user";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.error}</h1>
        <h1>{this.props.hasSuccess}</h1>
        <h3 className="display-4 text-center text-secondary">Sing in</h3>
        <hr />
        <div className="row text-center">
          <div className="offset-2 col-sm-8">
            <form
              onSubmit={this.props.handleFormOnSubmit}
              className="form-group"
            >
              <Label name="username" labelName="Username" />
              <Input
                name="username"
                type="text"
                onChange={this.props.handleInputOnChange}
                value={this.props.username}
                className="form-control"
              />
              <br />
              <Label name="password" labelName="Password" />
              <Input
                name="password"
                type="password"
                onChange={this.props.handleInputOnChange}
                value={this.props.password}
                className="form-control"
              />
              <br />
              <Input
                className="btn btn-success mr-1"
                type="submit"
                value="Sing In"
              />
              <Input className="btn btn-danger" type="reset" value="Reset" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withFormManager(Login, model);
