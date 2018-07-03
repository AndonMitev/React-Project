import React, { Component } from "react";
import Input from "../common/InputForForm";
import Label from "../common/LabelForForm";
import Auth from "../services/user-auth-services";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleOnChangeInput = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  handleOnSubmitForm = event => {
    event.preventDefault();
    Auth.createUser(this.state);
  };

  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center text-secondary">Sing Up</h3>
        <hr />
        <div className="row text-center">
          <div className="offset-2 col-sm-8">
            <form onSubmit={this.handleOnSubmitForm} className="form-group">
              <Label name="username" labelName="Username" />
              <Input
                name="username"
                type="text"
                onChange={this.handleOnChangeInput}
                value={this.state.username}
                className="form-control"
              />
              <br />
              <Label name="password" labelName="Password" />
              <Input
                name="password"
                type="password"
                onChange={this.handleOnChangeInput}
                value={this.state.password}
                className="form-control"
              />
              <br />
              <Label name="confirmPassword" labelName="Confirm password" />
              <Input
                name="confirmPassword"
                type="password"
                onChange={this.handleOnChangeInput}
                value={this.state.confirmPassword}
                className="form-control"
              />
              <br />
              <Label name="email" labelName="Email" />
              <Input
                name="email"
                type="text"
                onChange={this.handleOnChangeInput}
                value={this.state.email}
                className="form-control"
              />
              <br />
              <Label name="confirmEmail" labelName="Confirm Email" />
              <Input
                name="confirmEmail"
                type="text"
                onChange={this.handleOnChangeInput}
                value={this.state.confirmEmail}
                className="form-control"
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

export default Register;
