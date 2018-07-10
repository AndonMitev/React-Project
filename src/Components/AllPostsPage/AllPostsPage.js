import React, { Component } from "react";
import RenderAllPosts from "./RenderAllPosts";
import postRequester from "../../services/post-services";

export default class AllPostsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: ""
    };
  }

  getAllPosts = () => {
    postRequester
      .getPosts()
      .then(posts => {
        if (posts.length !== 0) {
          this.setState({ posts });
        }
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  componentDidMount() {
    this.getAllPosts();
  }

  render = () => {
    return (
      <div>
        {this.state.posts.map(e => <RenderAllPosts key={e._id} {...e} />)}
      </div>
    );
  };
}
