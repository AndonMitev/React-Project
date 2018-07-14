import React from "react";
import Navbar from "./Navbar";
import CurrentViewComponent from "./CurrentViewComponent";

//If user is authenticated render selected view component 
const AuthenticatedUsers = () => (
  <div>
    <Navbar />
    <CurrentViewComponent />
  </div>
);

export default AuthenticatedUsers;
