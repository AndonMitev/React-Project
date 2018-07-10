import React from "react";
import { Link } from "react-router-dom";

const RenderDetails = props => {
  const currentPost = props.currentPost;

  
  if (currentPost.error) {
    return <h1>{currentPost.error}</h1>;
  }

  return (
    <div>
      <h1>{currentPost.post.title}</h1>
      <p>{currentPost.post.description}</p>
      <img src={currentPost.post.imageUrl} alt={currentPost.post.title} />
      <Link to={`/post/edit/${currentPost.post._id}`}>Edit</Link>
      <Link to={`/post/delete/${currentPost.post._id}`}>Delete</Link>
    </div>
  );
};

export default RenderDetails;
