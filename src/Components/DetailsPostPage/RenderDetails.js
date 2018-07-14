import React, { Component } from "react";
import { Link } from "react-router-dom";
import withLoading from "../../hoc/withLoading";
import postServices from "../../services/post-services";
import Button from "../common/Button";
import isAdmin from "../../services/user-services";
import "./RenderDetails.css";
import { toast } from "react-toastify";

class RenderDetails extends Component {

  //Delete post and redirect
  deleteItem = () => {
    const postId = this.props.match.params.id;
    postServices
      .deletePost(postId)
      .then(() => {
        toast.success("Article successful deleted.", {
          position: toast.POSITION.TOP_RIGHT
        });
        this.props.history.push("/home");
      })
      .catch(err =>
        toast.success(err.error, {
          position: toast.POSITION.TOP_RIGHT
        })
      );
  };

  render() {
    const currentPost = this.props.data;
    return (
      <div className="container">
        <div className="text-center">
          <img
            src={currentPost.imageUrl}
            alt={currentPost.title}
            className="img-fluid fixImg"
          />
          <h1 className="display-4 text-center">{currentPost.title}</h1>
          <hr />
          <p className="text-justify">
            <strong>Content: </strong>
            {currentPost.description}
          </p>
          {localStorage.getItem("userId") === currentPost._acl.creator ||
          isAdmin.isAdmin() ? (
            <div>
              <Link
                to={`/post/edit/${currentPost._id}`}
                className="mr-2 btn btn-warning"
              >
                Edit
              </Link>
              <Button onClick={this.deleteItem} className="btn btn-danger" />
            </div>
          ) : null}
          <hr />
        </div>
      </div>
    );
  }
}

export default withLoading(RenderDetails, postServices.getSinglePost);
