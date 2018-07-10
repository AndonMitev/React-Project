import React, { Component } from "react";
import RenderDetails from "./RenderDetails";
import postRequest from "../../services/post-services";

export default class DetailsPostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      error: ""
    };
  }

    
  componentDidMount = () => {
    const postId = this.props.match.params.id;
    postRequest
      .getSinglePost(postId)
      .then(post => {
        if (post.error) {
          this.setState({ error: "Article was not found! Please try again" });
          return;
        }
        this.setState({ post });
      })
      .catch(error => this.setState({ error }));
  };

  render = () => <RenderDetails currentPost={this.state} />;
}
