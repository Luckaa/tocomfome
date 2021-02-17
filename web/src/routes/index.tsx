import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes = () => {
  return (
    <BrowserRouter>
      <Redirect path="/" to="/register" />
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
      <Route component={Home} path="/home" />
    </BrowserRouter>
  );
};

export default Routes;
