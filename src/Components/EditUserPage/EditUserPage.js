import React, { Component } from "react";
import RenderEditUserPage from "./RenderEditUserPage";
import userServices from "../../services/user-services";
import { toast } from "react-toastify";

class EditUserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      age: "",
      city: "",
      hobbies: ""
    };
  }

  //Getting new user data and make PUT request
  editCurrentUser = data => {
    const { username, email, age, city, hobbies } = data;
    this.setState({ username, email, age, city, hobbies }, () =>
      userServices
        .updateUser(data._id, this.state)
        .then(() => {
          toast.success(`User ${this.state.username} successful edited`, {
            position: toast.POSITION.TOP_RIGHT
          });
          this.props.history.push(`/user/${data._id}`);
        })
        .catch(err =>
          toast.error(err.error, {
            position: toast.POSITION.TOP_RIGHT
          })
        )
    );
  };

  render = () => {
    return (
      <RenderEditUserPage
        {...this.props}
        editCurrentUser={this.editCurrentUser}
      />
    );
  };
}

export default EditUserPage;
