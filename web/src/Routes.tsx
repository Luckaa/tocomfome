import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
    </BrowserRouter>
  );
};

export default Routes;
