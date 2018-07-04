import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = props => (
  <nav>
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/post/all">View All</NavLink>
    <NavLink to="/post/create">Create Post</NavLink>
  </nav>
);

export default Navbar;
