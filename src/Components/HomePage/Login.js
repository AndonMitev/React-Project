import React, { Component } from "react";
import Input from "../common/InputForForm";
import Label from "../common/LabelForForm";
import Auth from "../services/user-auth-services";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleOnChangeInput = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  handleOnSubmitForm = event => {
    event.preventDefault();
    Auth.loginUser(this.state)
  };

  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center text-secondary">Sing in</h3>
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

export default Login;
