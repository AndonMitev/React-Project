import React, { Component } from "react";
import RenderEditPost from "./RenderEditPost";
import postRequester from "../../services/post-services";

export default class EditPostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      error: ""
    };
  }

  getCurrentPostEdit = () => {
    postRequester
      .get("appdata", "GET", "kinvey", `posts/${this.props.match.params.id}`)
      .then(post => {
        if (post.error) {
          this.setState({ error: "Article was not found! Please try again" });
          return;
        }
        this.setState({ post });
      })
      .catch(error => this.setState({ error }));
  };

  componentDidMount = () => this.getCurrentPostEdit()

  render = () => <RenderEditPost currentPost={this.state.post} />;
}
