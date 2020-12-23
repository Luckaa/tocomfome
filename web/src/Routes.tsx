import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Home from './pages/Home/index';
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Redirect path="/" to="/home" />
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
      <Route component={Home} path="/home" />
    </BrowserRouter>
  );
};

export default Routes;
