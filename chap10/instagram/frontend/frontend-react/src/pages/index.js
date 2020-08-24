import React from "react";
import { Route, Switch } from "react-router-dom";
import AppLayout from "components/AppLayout";
import About from "./About";
import Home from "./Home";
import AccountsRoutes from "./accounts";

function Root() {
  return (
    <AppLayout>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/accounts" component={AccountsRoutes} />
    </AppLayout>
  );
}

export default Root;
