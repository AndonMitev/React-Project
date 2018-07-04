import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../HomePage/Home";
import CreatePostPage from "../PostSection/CreatePostPage/CreatePostPage";
import PostsPage from "../PostSection/AllPostsPage/PostsPage";

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/post/all" component={PostsPage} />
    <Route path="/post/create" component={CreatePostPage} />
  </Switch>
);

export default AppRoutes;
