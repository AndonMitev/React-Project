import React from "react";
import { Switch, Route } from "react-router-dom";
import AllPostsPage from "../AllPostsPage/AllPostsPage";
import CreatePostPage from "../CreatePostPage/CreatePostPage";
import DetailsPostPage from "../DetailsPostPage/DetailsPostPage";
import EditPostPage from "../EditPostPage/EditPostPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import EditUserPage from "../EditUserPage/EditUserPage";
import Logout from "./Logout";

const CurrentViewComponent = () => (
  <Switch>
    <Route path="/" exact component={AllPostsPage} />
    <Route path="/home" component={AllPostsPage} />
    <Route path="/post/create" component={CreatePostPage} />
    <Route path="/post/details/:id" component={DetailsPostPage} />
    <Route path="/post/edit/:id" component={EditPostPage} />
    <Route path="/logout" component={Logout} />
    <Route path="/user/:id" exact component={ProfilePage} />
    <Route path="/user/edit/:id" component={EditUserPage} />
  </Switch>
);

export default CurrentViewComponent;
