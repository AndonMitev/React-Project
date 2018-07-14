import React, { Component } from "react";
import postRequester from "../../services/post-services";
import PostForm from "../common/Forms/PostForm";
import { toast } from "react-toastify";

export default class CreatePostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      imageUrl: "",
      createdBy: ""
    };
  }

  getPostState = post => {
    const createdBy = localStorage.getItem("username");
    this.setState({ ...post, createdBy }, () => {
      postRequester
        .createPost({ ...this.state })
        .then(() => {
          toast.success(`Article "${this.state.title}" successful created`, {
            position: toast.POSITION.TOP_RIGHT
          });
          this.props.history.push("/home");
        })
        .catch(err => {
          toast.error(err.error, {
            position: toast.POSITION.TOP_RIGHT
          });
        });
    });
  };

  render() {
    return (
      <div>
        <PostForm getPostState={this.getPostState} name="Create" />
      </div>
    );
  }
}
