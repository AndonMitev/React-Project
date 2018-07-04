import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";
import Auth from "../services/user-auth-services";

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
      }
    };
  }

  getRegisterState = state => this.setState({ register: { ...state } });

  getLoginState = state => this.setState({ login: { ...state } });

  
  render() {
    return (
      <div>
        <Register getRegisterState={this.getRegisterState} />
        <Login getLoginState={this.getLoginState} />
      </div>
    );
  }
}

export default Home;
