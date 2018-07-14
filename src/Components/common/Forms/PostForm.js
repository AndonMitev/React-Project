import React, { Component } from "react";
import Input from "../InputForForm";
import Label from "../LabelForForm";
import TextArea from "../TextArea";
import FormManager from "../../../hoc/FromManager";
import model from "../../../models/post";

class PostForm extends Component {
  render() {
    const props = this.props.posts || this.props;
    return (
      <div className="container">
        <h3 className="display-4 text-center text-secondary">
          {this.props.name}
        </h3>
        <hr />
        <div className="row text-center">
          <h1>{props.error}</h1>
          <div className="offset-2 col-sm-8">
            <form
              onSubmit={this.props.handleFormOnSubmit}
              className="form-group"
            >
              <Label name="title" labelName="Game Title" />
              <Input
                type="text"
                name="title"
                onChange={this.props.handleInputOnChange}
                value={props.title}
                className="form-control"
                placeholder="Your game Title"
              />
              <br />
              <Label name="imageUrl" labelName="Image Link" />
              <Input
                type="text"
                name="imageUrl"
                onChange={this.props.handleInputOnChange}
                value={props.imageUrl}
                className="form-control"
                placeholder="Your game image url"
              />
              <br />
              <Label name="description" labelName="Game description" />
              <TextArea
                name="description"
                onChange={this.props.handleInputOnChange}
                value={props.description}
                className="form-control"
                placeholder="Your game description"
              />
              <br />
              <Input
                type="submit"
                value={this.props.name}
                className="btn btn-success mr-1"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormManager(PostForm, model);
