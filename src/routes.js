import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/loginForm/login";
import User from "./components/user/user";
import Header from "./components/header";
import GoogleMap from "./components/map/index";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/user" component={User} />
      <Route path="/map" component={GoogleMap} />
      <Route path="/" component={LoginForm} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
