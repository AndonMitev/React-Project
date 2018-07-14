import React, { Component } from "react";
import withLoading from "../../hoc/withLoading";
import userServices from "../../services/user-services";
import Input from "../common/InputForForm";
import Label from "../common/LabelForForm";
import TextArea from "../common/TextArea";

class RenderEditUserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      age: "",
      city: "",
      hobies: ""
    };
  }

  handleInputOnChange = event => {
    const fieldName = event.target.name;
    const value = event.target.value;
    this.setState({
      [fieldName]: value
    });
  };

  handleFormOnSubmit = event => {
    event.preventDefault();
    this.props.editCurrentUser(this.state);
  };

  componentDidMount() {
    this.setState({ ...this.props.data });
  }

  render = () => {
    return (
      <div className="container">
        <h3 className="display-4 text-center text-secondary">
          Edit your profile
        </h3>
        <hr />
        <div className="row text-center">
          <div className="offset-2 col-sm-8">
            <form onSubmit={this.handleFormOnSubmit} className="form-group">
              <Label name="email" labelName="Email" />
              <Input
                name="email"
                type="text"
                onChange={this.handleInputOnChange}
                value={this.state.email}
                className="form-control"
              />
              <br />
              <Label name="age" labelName="Age" />
              <Input
                name="age"
                type="number"
                onChange={this.handleInputOnChange}
                value={this.state.age}
                className="form-control"
              />
              <br />
              <Label name="city" labelName="City" />
              <Input
                name="city"
                type="text"
                onChange={this.handleInputOnChange}
                value={this.state.city}
                className="form-control"
              />
              <br />
              <Label
                name="hobies"
                labelName="Share with world something about you"
              />
              <TextArea
                name="hobies"
                type="text"
                onChange={this.handleInputOnChange}
                value={this.state.hobies}
                className="form-control"
              />
              <br />
              <Input
                className="btn btn-success mr-1"
                type="submit"
                value="Save changes"
              />
            </form>
          </div>
        </div>
      </div>
    );
  };
}

export default withLoading(RenderEditUserPage, userServices.myProfile);
