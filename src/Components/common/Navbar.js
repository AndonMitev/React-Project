import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = props => (
  <div className="container-fluid color">
    <ul className="nav nav-pills justify-content-start bg-dark bg-transparent mb-2">
      <li className="nav-item m-2">
        <NavLink to={"/home"} className="nav-link text-dark">
          Home
        </NavLink>
      </li>
      <li className="nav-item  m-2">
        <NavLink to="/post/create" className="nav-link text-dark">
          Create Post
        </NavLink>
      </li>
      <li className="nav-item m-2">
        <NavLink
          to={`/user/${localStorage.getItem("userId")}`}
          className="nav-link text-dark"
        >
          Hello, {localStorage.getItem("username")}!
        </NavLink>
      </li>
      <li className="nav-item m-2">
        <NavLink to="/logout" className="nav-link text-dark">
          Logout
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
