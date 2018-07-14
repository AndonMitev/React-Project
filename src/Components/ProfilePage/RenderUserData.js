import React, { Component } from "react";
import { Link } from "react-router-dom";
import withLoading from "../../hoc/withLoading";
import userServices from "../../services/user-services";

const RenderUserData = props => {
  const userData = props.data;
  return (
    <div className="container">
      <h1>{userData.username}' Profile</h1>
      <div className="text-justify row">
        <ul className="list-group">
          <li className="list-group-item">
            Username: <strong>{userData.username}</strong>
          </li>
          <li className="list-group-item">
            Age: <strong>{userData.age}</strong>
          </li>
          <li className="list-group-item">
            Email: <strong>{userData.email}</strong>
          </li>
          <li className="list-group-item">
            From: <strong>{userData.city}</strong>
          </li>
          <li className="list-group-item">
            <img
              className="rounded-circle float-right"
              src="http://www.georeferencer.com/static/img/person.png"
              alt=""
            />
          </li>
        </ul>
      </div>
      {localStorage.getItem("userId") === userData._id ||
      userServices.isAdmin() ? (
        <div>
          <Link
            to={`/user/edit/${userData._id}`}
            className="btn btn-success mr-2"
          >
            Edit Profile
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default withLoading(RenderUserData, userServices.myProfile);
