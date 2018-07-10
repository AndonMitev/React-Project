import React, { Component } from "react";
import CreatePost from "./CreatePost";
import postRequester from "../../services/post-services";

class CreatePostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      error: "",
      success: ""
    };
  }

  collectPostDataFromChildren = post =>
    this.setState({ post }, () =>
      postRequester
        .post("appdata", "POST", "kinvey", "posts", this.state.post)
        .then(success => {
          if (success.error) {
            this.setState({ error: "Please fill form correct" });
            return;
          }
          this.setState({ Success: success });
          this.props.history.push("/post/all");
        })
        .catch(error => {
          this.setState({ error });
        })
    );

  render() {
    return (
      <div>
        <CreatePost
          collectPostDataFromChildren={this.collectPostDataFromChildren}
        />
      </div>
    );
  }
}

export default CreatePostPage;
