import React, { Component } from 'react';
import CreatePost from './CreatePost';

class CreatePostPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      post: {}
    }
  }

  getPostData = data => {
    console.log(data);
  }

  render() {
    return (
      <div>
        <CreatePost getPostData={this.getPostData}/>
      </div>
    );
  }
}

export default CreatePostPage;