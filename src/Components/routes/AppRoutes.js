import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../HomePage/Home";
import CreatePostPage from "../CreatePostPage/CreatePostPage";
import AllPostsPage from "../AllPostsPage/AllPostsPage";
import DetailsPostPage from "../DetailsPostPage/DetailsPostPage";
import EditPostPage from "../EditPostPage/EditPostPage";

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/post/all" component={AllPostsPage} />
    <Route path="/post/create" component={CreatePostPage} />
    <Route path="/post/details/:id" component={DetailsPostPage} />
    <Route path="/post/edit/:id" component={EditPostPage} />
  </Switch>
);

export default AppRoutes;

