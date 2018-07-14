import React, { Component } from "react";
import RenderProfilePage from "./RenderUserPosts";
import RenderUserData from "./RenderUserData";

export default class ProfilePage extends Component {
  render = () => (
    <div>
      <RenderUserData {...this.props} />
      <RenderProfilePage {...this.props} />
    </div>
  );
}
