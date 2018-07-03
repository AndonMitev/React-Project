import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../HomePage/Home";
import Register from "../HomePage/Register";
import Login from "../HomePage/Login";

const Routes = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
