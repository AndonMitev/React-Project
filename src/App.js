import React, { Component } from "react";
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";
import AppRoutes from "./Components/routes/AppRoutes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    );
  }
}

export default App;
