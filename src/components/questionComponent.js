import React, { Component } from "react";
import "../styles/style.css";
import QuestionBox from "./questionBox";
import Result from "./resultComponent";
import { withRouter } from "react-router-dom";

class Question extends Component {
  state = { questionBank: [], score: 0, responses: 0, index: 0 };
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({ score: this.state.score + 1 });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
    this.setState({ index: this.state.index + 1 });
  };
  playAgain = () => {
    this.getQuestions();
    this.setState({ score: 0, responses: 0 });
  };
  check = () => {
    let temp = localStorage.getItem("name");
    if (temp === null || temp === "") {
      const { history } = this.props;
      history.push("/");
    }
  };
  getQuestions = () => {
    console.log("get questions");
    fetch(
      "https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({ questionBank: result.results }, () => {
          console.log(this.state);
        });
      });
  };
  componentDidMount() {
    this.check();
    this.getQuestions();
  }
  render() {
    console.log("from questionComponent.js");
    console.log(this.props);
    this.state.questionBank.forEach((item) => {
      item.question = item.question.replace(/(&quot;)/g, '"');
      item.question = item.question.replace(/&#039;/g, "'");
      item.question = item.question.replace(/&rsquo;/g, "’");
      item.question = item.question.replace(/&lsquo;/g, "‘");
      item.question = item.question.replace(/&amp;/g, "&");
    });
    return (
      <div
        className="quiz-box custom-box show"
        style={{ marginBottom: "100%" }}
      >
        <div className="stats">
          <div className="score-board" style={{ color: "red" }}>
            <span className="score-text">
              Hi {localStorage.getItem("name")}
            </span>
            <span className="correct-answers"></span>
          </div>
        </div>
        {this.state.questionBank.length > 0 && this.state.responses < 5 && (
          <QuestionBox
            qno={this.state.index}
            question={this.state.questionBank[this.state.index].question}
            incorrect={
              this.state.questionBank[this.state.index].incorrect_answers
            }
            correct={this.state.questionBank[this.state.index].correct_answer}
            selected={(answer) =>
              this.computeAnswer(
                answer,
                this.state.questionBank[this.state.index].correct_answer
              )
            }
            classType={"option"}
          />
        )}
        {this.state.responses === 5 ? (
          <Result
            score={this.state.score}
            playAgain={this.playAgain}
            response={this.state.responses}
            restart={() => {
              console.log("restart");
              //this.componentDidMount();
              window.location.reload();
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default withRouter(Question);
