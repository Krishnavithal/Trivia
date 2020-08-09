import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login";
import Question from "./questionComponent";
import "../styles/style.css";
import "../index.css";

export default function RouteComponent() {
  console.log("in router component");
  const { userName, setUserName } = useState("");
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login
            userName={userName}
            handleChange={(a) => {
              setUserName(a);
            }}
          ></Login>
        </Route>
        <Route exact path="/questions">
          <Question userName={userName} />
        </Route>
      </Switch>
    </Router>
  );
}
//resultSingle.question.replace(/&quot;/g,"\"")
