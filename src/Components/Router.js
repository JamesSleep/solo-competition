import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Header from "./Header";
import DrawTable from "../Routes/DrawTable";
import MatchResult from "../Routes/MatchResult";
import Statistics from "../Routes/Statistics";
import RulePage from "../Routes/RulePage";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={DrawTable} />
        <Route path="/matchResult" exact component={MatchResult} />
        <Route path="/statistics" exact component={Statistics} />
        <Route path="/rulePage" exact component={RulePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
)