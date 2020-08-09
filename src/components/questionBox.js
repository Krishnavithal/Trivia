import React, { Component } from "react";
class QuestionBox extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      options: [...this.props.incorrect, this.props.correct],
      question: this.props.question,
    };
  }
  render() {
    console.log("Called again");
    this.props.question.replace(/&quot;/g, '"');
    if (this.props.question !== this.state.question) {
      this.setState({
        options: [...this.props.incorrect, this.props.correct],
        question: this.props.question,
      });
    }
    return (
      <div className="questionBox">
        <div className="question">{this.state.question}</div>
        {this.state.options.map((text) => (
          <button
            className="answerBtn"
            onClick={() => {
              this.setState({ options: [text] });
              this.props.selected(text);
            }}
          >
            {text}
          </button>
        ))}
      </div>
    );
  }
}

export default QuestionBox;
