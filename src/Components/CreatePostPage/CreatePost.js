import React, { Component } from "react";
import Input from "../common/InputForForm";
import Label from "../common/LabelForForm";
import TextArea from "../common/TextArea";

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

  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center text-secondary">
          Share your awesome story with us
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
                value={this.state.title}
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

export default CreatePost;
