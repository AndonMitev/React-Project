import React, { Component } from "react";
import postServices from "../../services/post-services";
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

  //Getting data from new created post and fetch it again
  editCurrentPost = data => {
    const createdBy = data.createdBy.createdBy;
    const postId = this.props.match.params.id;
    const { title, description, imageUrl } = data;
    this.setState({ title, description, imageUrl, createdBy }, () => {
      postServices
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
