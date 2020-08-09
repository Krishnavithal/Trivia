import React, { Component } from "react";

class QuestionBox extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      options: [...this.props.incorrect, this.props.correct],
      question: this.props.question,
      classNames: this.props.classType,
      clicked: false,
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
      <>
        <div class="question-box">
          <div class="current-question-num">{this.props.qno + 1}</div>
          <div class="question-text">{this.state.question}</div>
        </div>
        <div class="option-box">
          {this.state.options.map((text) => (
            <div
              class="option"
              ref={text}
              onClick={() => {
                console.log(this.refs[text].classList);
                if (this.props.correct === text)
                  this.refs[text].classList.add("correct");
                else this.refs[text].classList.add("wrong");
                setTimeout(() => {
                  console.log((this.refs[text].className = "option"));
                  this.props.selected(text);
                }, 1000);
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default QuestionBox;
