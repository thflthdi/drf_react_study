import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "components/AppLayout";
import About from "./About";
import Home from "./Home";
import PostNew from "./PostNew";
import AccountsRoutes from "./accounts";
import LoginRequiredRoute from "Utils/LoginRequireRoute";

function Root() {
  return (
    <>
      <LoginRequiredRoute exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <LoginRequiredRoute exact path="/posts/new" component={PostNew} />
      <Route path="/accounts" component={AccountsRoutes} />
    </>
  );
}

export default Root;
