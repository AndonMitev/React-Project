import React, { Component } from "react";
import Input from "../common/InputForForm";
import Label from "../common/LabelForForm";
import TextArea from "../common/TextArea";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }

  handleOnChangeInput = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  handleOnSubmitForm = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmitForm}>
          <Label name="title" labelName="Username" />
          <Input
            type="text"
            name="title"
            onChange={this.handleOnChangeInput}
            value={this.state.title}
          />
          <br />
          <Label name="description" labelName="Description" />
          <TextArea
            name="description"
            onChange={this.handleOnChangeInput}
            value={this.state.description}
          />
          <Label name="imageUrl" labelName="Image" />
          <Input
            type="text"
            name="imageUrl"
            onChange={this.handleOnChangeInput}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

export default PostForm;
