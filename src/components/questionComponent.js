import React, { Component } from "react";
import "../styles/style.css";
import QuestionBox from "./questionBox";
//import Result from "./resultComponent";

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
  getQuestions = () => {
    console.log("get questions");
    fetch(
      "https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        //result.replace(/(&quot\;)/g, '"');
        this.setState({ questionBank: result.results }, () => {
          console.log(this.state);
        });
      });
    //   .then(
    //     this.state.questionBank.map(({ question }) =>
    //       question.replace(/(&quot;)/g, '"')
    //     )
    //  );
  };
  componentDidMount() {
    this.getQuestions();
  }
  render() {
    console.log("from questionComponent.js");
    console.log(this.props);
    this.state.questionBank.map((item) => {
      item.question = item.question.replace(/(&quot;)/g, '"');
      item.question = item.question.replace(/&#039;/g, "'");
      item.question = item.question.replace(/&rsquo;/g, "’");
      item.question = item.question.replace(/&lsquo;/g, "‘");
      item.question = item.question.replace(/&amp;/g, "&");
      //return item;
      //console.log(question)}
    });
    return (
      //   <div className="container">
      //     <div className="title">
      //       QUIZ{" "}
      //       <span style={{ float: "right" }}>
      //         Hi {localStorage.getItem("name")}
      //       </span>
      //     </div>
      //     {this.state.questionBank.length > 0 && this.state.responses < 5 && (
      //       //   this.state.questionBank.map(
      //       //     ({ question, incorrect_answers, correct_answer }) => (
      //       //       <QuestionBox
      //       //         question={question}
      //       //         incorrect={incorrect_answers}
      //       //         correct={correct_answer}
      //       //         selected={(answer) =>
      //       //           this.computeAnswer(answer, correct_answer)
      //       //         }
      //       //       />
      //       //     )
      //       //   )
      //       <QuestionBox
      //         question={this.state.questionBank[this.state.index].question}
      //         incorrect={
      //           this.state.questionBank[this.state.index].incorrect_answers
      //         }
      //         correct={this.state.questionBank[this.state.index].correct_answer}
      //         selected={(answer) =>
      //           this.computeAnswer(
      //             answer,
      //             this.state.questionBank[this.state.index].correct_answer
      //           )
      //         }
      //       />
      //     )}
      //     {this.state.responses === 5 ? (
      //       <Result score={this.state.score} playAgain={this.playAgain} />
      //     ) : null}
      //   </div>

      <div className="quiz-box custom-box" style={{ marginBottom: "100%" }}>
        <div className="stats">
          <div className="score-board" style={{ color: "red" }}>
            <span className="score-text">
              Hi {localStorage.getItem("name")}
            </span>
            <span className="correct-answers"></span>
          </div>
        </div>
        {this.state.questionBank.length > 0 && (
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
          />
        )}

        <div className="next-question">
          {this.state.responses === 5 ? (
            <button type="button" className="see-result-btn btns">
              See Your Result
            </button>
          ) : (
            <button type="button" className="next-question-btn btns">
              Next Question
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Question;
