import React, { Component } from "react";
import Input from "../common/InputForForm";
import Label from "../common/LabelForForm";
import TextArea from "../common/TextArea";

export default class RenderEditPost extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      post: {}
    };
  }

  componentWillReceiveProps(post) {
    this.setState({post}, () => console.log(this.state.post.currentPost.title));
  }
  
  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center text-secondary">
          Edit your story
        </h3>
        <hr />
        <div className="row text-center">
          <div className="offset-2 col-sm-8">
            <form onSubmit={this.handleOnSubmitForm} className="form-group">
              <Label name="title" labelName="Title" />
              <Input
                type="text"
                name="title"
                onChange={this.handleOnChangeInput}
                value={this.state.post.currentPost.title}
                className="form-control"
              />
              <br />
              <Label name="imageUrl" labelName="Image Link" />
              <Input
                type="text"
                name="imageUrl"
                onChange={this.handleOnChangeInput}
                value={this.state.imageUrl}
                className="form-control"
              />
              <br />
              <Label name="description" labelName="Description" />
              <TextArea
                name="description"
                onChange={this.handleOnChangeInput}
                value={this.state.description}
                className="form-control"
              />
              <br />
              <Input
                type="submit"
                value="Create"
                className="btn btn-success mr-1"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

/* 


class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      imageUrl: ""
    };
    console.log(this.props);
  }

  handleOnChangeInput = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  handleOnSubmitForm = event => {
    event.preventDefault();
    this.props.collectPostDataFromChildren(this.state);
  };

  
}

export default CreatePost;


*/
