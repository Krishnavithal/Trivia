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
          <div className="grid-container">
            <header>
              <a href="/">TRIVIA QUIZ</a>
            </header>
            <main>
              <div className="content">
                <div className="main">
                  <Login
                    userName={userName}
                    handleChange={(a) => {
                      setUserName(a);
                    }}
                  ></Login>
                </div>
              </div>
            </main>
            <footer>All rights reserved.</footer>
          </div>
        </Route>
        <Route path="/questions">
          <div className="grid-container">
            <header>
              <a href="/">TRIVIA QUIZ</a>
            </header>
            <main>
              <div className="content">
                <div className="main">
                  <Question userName={userName} />
                </div>
              </div>
            </main>
            <footer>All rights reserved.</footer>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
//resultSingle.question.replace(/&quot;/g,"\"")
