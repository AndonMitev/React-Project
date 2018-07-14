import React, { Component } from "react";
import Navbar from "./Navbar";
import CurrentViewComponent from "./CurrentViewComponent";

const AuthenticatedUsers = () => (
  <div>
    <Navbar />
    <CurrentViewComponent />
  </div>
);

export default AuthenticatedUsers;
