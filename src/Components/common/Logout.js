import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

export default class Logout extends Component {
  logout = () => {
    toast.success("Successful logout", {
      position: toast.POSITION.TOP_RIGHT
    });
    localStorage.clear();
  };

  render() {
    this.logout();
    return <Redirect to="/" />;
  }
}
