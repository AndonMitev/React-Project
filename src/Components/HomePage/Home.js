import React, { Component } from "react";
import Register from "../common/Forms/RegisterForm";
import Login from "../common/Forms/LoginForm";
import userServices from "../../services/user-services";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { withRouter } from "react-router";

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
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  //Fetching register state
  getRegisterState = state =>
    this.setState({ register: { ...state } }, () =>
      userServices
        .createUser(this.state.register)
        .then(res => {
          if (res.error) {
            return toast.error(res.error, {
              position: toast.POSITION.TOP_RIGHT
            });
          }
          userServices.saveUserData(res);
          toast.success(
            `Hello for first time, ${this.state.register.username}`,
            {
              position: toast.POSITION.TOP_RIGHT
            }
          );
          const { history } = this.props;
          history.push("/home");
        })
        .catch(err => {
          toast.error(err.error, {
            position: toast.POSITION.TOP_RIGHT
          });
        })
    );

  //Fetching Login state
  getLoginState = state =>
    this.setState({ login: { ...state } }, () =>
      userServices
        .loginUser(this.state.login)
        .then(res => {
          if (res.error) {
            return toast.error(res.error, {
              position: toast.POSITION.TOP_RIGHT
            });
          }
          userServices.saveUserData(res);
          toast.success(`Welcome back, ${this.state.login.username}`, {
            position: toast.POSITION.TOP_RIGHT
          });
          const { history } = this.props;
          history.push("/home");
        })
        .catch(err => {
          toast.error(err.error, {
            position: toast.POSITION.TOP_RIGHT
          });
        })
    );

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center ">Welcome to my react app</h1>
        <h4 className="text-center mb-5 text-secondary">
          <strong>Note:</strong> Please create account if you dont have one or u
          can login if you already have.
        </h4>
        <Login getLoginState={this.getLoginState} {...this.props} />
        <Register getRegisterState={this.getRegisterState} {...this.props} />
      </div>
    );
  }
}

export default withRouter(Home);
