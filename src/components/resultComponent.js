import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../styles/style.css";

class Result extends Component {
  state = {};
  render() {
    return (
      //   <div className="score-board">
      //   <>
      //     <div className="score">
      //       You scored {this.props.score} / 5 correct answers!
      //     </div>
      //     <div>
      //       <button
      //         className="playBtn"
      //         onClick={() => {
      //           const { history } = this.props;
      //           history.push("/");
      //         }}
      //       >
      //         Play again!
      //       </button>
      //     </div>
      //   </>
      //   </div>

      <div
        className="quiz-over-box custom-box show"
        style={{ marginBottom: "100%" }}
      >
        <h1>Quiz Result</h1>
        <h4>
          Total Questions: <span className="total-questions">5</span>
        </h4>
        <h4>
          Attempt: <span className="total-attempt">{this.props.response}</span>
        </h4>
        <h4>
          Correct : <span className="total-correct">{this.props.score}</span>
        </h4>
        <h4>
          Wrong: <span className="total-wrong">{5 - this.props.score}</span>
        </h4>
        {/* <h4>Percentage: <span className="total-percentage">33.33%</span></h4> */}
        <button
          type="button"
          className="start-again-quiz-btn btns"
          onClick={() => {
            //const { history } = this.props;
            // console.log("clicked");
            //history.push("/questions");
            this.props.restart();
            //window.location.reload();
          }}
        >
          Start Again
        </button>
        <button
          type="button"
          className="go-home-btn btns"
          onClick={() => {
            localStorage.clear();
            const { history } = this.props;
            history.push("/");
          }}
        >
          Go To Home
        </button>
      </div>
    );
  }
}

export default withRouter(Result);
