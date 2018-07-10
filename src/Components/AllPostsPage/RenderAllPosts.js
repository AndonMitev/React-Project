import React from "react";
import { Link } from "react-router-dom";

const posts = props => (
  <ul>
    <h1>{props.error}</h1>
    <li>{props.title}</li>
    <img src={props.imageUrl} alt={props.title} />
    <Link to={`/post/details/${props._id}`}>View Details</Link>
  </ul>
);

export default posts;
