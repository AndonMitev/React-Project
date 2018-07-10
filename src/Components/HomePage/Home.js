import React, { Component } from "react";
import Register from "./RegisterForm";
import Login from "./LoginForm";
import auth from "../../services/user-auth-services";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      register: {
        username: "",
        password: "",
        email: ""
      },
      login: {
        username: "",
        password: ""
      },
      error: "",
      success: ""
    };
  }

  getRegisterState = state =>
    this.setState({ register: { ...state } }, () =>
      auth
        .post("user", "POST", "basic", "", this.state.register)
        .then(success => {
          if (success.error) {
            this.setState({ error: "Please fill form correct" });
            return;
          }
          auth.saveUserData(success);
          this.setState({ success: "Successful Sign Up" });
          this.props.history.push("/post/all");
        })
        .catch(error => {
          this.setState({ error });
        })
    );

  getLoginState = state =>
    this.setState({ login: { ...state } }, () => {
      const result = auth.loginUser(this.state.login);
      console.log(result);
    });

  render() {
    return (
      <div>
        <Register
          getRegisterState={this.getRegisterState}
          hasError={this.state.error}
          hasSuccess={this.state.success}
        />
        <Login
          getLoginState={this.getLoginState}
          hasError={this.state.error}
          hasSuccess={this.state.success}
        />
      </div>
    );
  }
}

export default Home;

/*
 auth
        .loginUser(this.state.login)
        .then(res => {
          if (res.error) {
            this.setState({ error: "Please fill form correct" });
            return;
          }
          auth.saveUserData(res);
          this.setState({ res: "Successful Sign In" });
          this.props.history.push("/post/all");
        })
        .catch(error => this.setState({ error }))*/
