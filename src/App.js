import React, { Component } from "react";
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";
import Routes from "./Components/routes/AppRoutes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
