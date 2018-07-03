import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = props => (
  <nav>
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/login">Login</NavLink>
  </nav>
);

export default Navbar;
