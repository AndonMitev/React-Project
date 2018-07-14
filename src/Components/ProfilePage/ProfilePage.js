import React, { Component } from "react";
import RenderProfilePage from "./RenderProfilePage";
import RenderUserData from "./RenderUserData";
import userServices from "../../services/user-services";

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  render = () => (
    <div>
      <RenderUserData {...this.props} />
      <RenderProfilePage {...this.props} />
    </div>
  );
}
