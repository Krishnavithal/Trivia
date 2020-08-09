import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Result extends Component {
  state = {};
  render() {
    return (
      //   <div className="score-board">
      <>
        <div className="score">
          You scored {this.props.score} / 5 correct answers!
        </div>
        <div>
          {/* <button
            className="playBtn"
            onClick={() => {
              const { history } = this.props;
              history.push("/");
            }}
          >
            Play again!
          </button> */}
          <button
            className="playBtn"
            onClick={() => {
              const { history } = this.props;
              history.push("/");
            }}
          >
            Play again!
          </button>
        </div>
      </>
      //   </div>
    );
  }
}

export default withRouter(Result);
