import React, { Component } from "react";
import postRequest from "../../services/post-services";
import RenderEditPost from "./RenderEditPost";
import { toast } from "react-toastify";

export default class EditPostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      imageUrl: "",
      createdBy: ""
    };
  }

  editCurrentPost = data => {
    const createdBy = data.createdBy.createdBy;
    const postId = this.props.match.params.id;
    const { title, description, imageUrl, youtubeUrl } = data;
    this.setState({ title, description, imageUrl, youtubeUrl, createdBy }, () => {
      postRequest
        .editPost(postId, this.state)
        .then(() => {
          toast.success(`Article "${this.state.title}" successful edited`, {
            position: toast.POSITION.TOP_RIGHT
          });
          this.props.history.push(`/post/details/${postId}`);
        })
        .catch(err => {
          toast.error(err.error, {
            position: toast.POSITION.TOP_RIGHT
          });
        });
    });
  };

  render = () => (
    <RenderEditPost
      editCurrentPost={this.editCurrentPost}
      {...this.props}
      name="Edit"
    />
  );
}
