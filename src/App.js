import React, { Component } from "react";
import Home from "./Components/HomePage/Home";
import AuthenticatedUsersRoutes from "./Components/common/AuthenticatedUsers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToastContainer autoClose={3500} />
        {localStorage.getItem("authtoken") ? (
          <AuthenticatedUsersRoutes />
        ) : (
          <Home />
        )}
      </div>
    );
  }
}

export default App;
