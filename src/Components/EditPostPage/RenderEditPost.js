import React, { Component } from "react";
import Input from "../common/InputForForm";
import Label from "../common/LabelForForm";
import TextArea from "../common/TextArea";
import postRequest from "../../services/post-services";
import withLoading from "../../hoc/withLoading";
import validatePost from "../../models/post";

class RenderEditPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      imageUrl: "",
      youtubeUrl: "",
      createdBy: ""
    };
  }

  handleInputOnChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleFormOnSubmit = event => {
    event.preventDefault();
    let error = validatePost.validatePostState(this.state);
    if (error) {
      this.setState({ error });
      return;
    }

    this.setState({ error: "", createdBy: this.props.data }, () =>
      this.props.editCurrentPost(this.state)
    );
  };

  componentDidMount() {
    this.setState({ ...this.props.data });
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
            <form onSubmit={this.handleFormOnSubmit} className="form-group">
              <Label name="title" labelName="Title" />
              <Input
                type="text"
                name="title"
                onChange={this.handleInputOnChange}
                value={this.state.title}
                className="form-control"
              />
              <br />
              <Label name="imageUrl" labelName="Image Link" />
              <Input
                type="text"
                name="imageUrl"
                onChange={this.handleInputOnChange}
                value={this.state.imageUrl}
                className="form-control"
              />
              <br />
              <Label name="description" labelName="Description" />
              <TextArea
                name="description"
                onChange={this.handleInputOnChange}
                value={this.state.description}
                className="form-control"
              />
              <br />
              <Input
                type="submit"
                value="Save Changes"
                className="btn btn-success mr-1"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withLoading(RenderEditPost, postRequest.getSinglePost);
