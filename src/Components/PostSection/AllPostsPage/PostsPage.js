import React, { Component } from "react";
import posts from "../../services/post-services";

class PostsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  getPosts = async () => {
    const response = await posts.getPosts();
    console.log(response);
  };

  componentDidMount() {
    this.setState(
      {
        posts: this.getPosts()
      },
      console.log(this.state)
    );
  }

  render() {
    return <div />;
  }
}

export default PostsPage;
