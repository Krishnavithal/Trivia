import React, { Component } from "react";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = { userName: "", disable: true, message: "" };
  render() {
    console.log("login.js");
    return (
      // <>
      //   <div className="login">
      //     <div className="title">LogIn</div>
      //     {/* <form> */}
      //     <div className="form-group">
      //       <label style={{ fontSize: "30px" }}>UserName</label>
      //       <input
      //         //type="email"
      //         className="form-control"
      //         //aria-describedby="emailHelp"
      //         style={{ height: "40px", fontSize: "20px" }}
      //         onChange={(event) => {
      //           this.setState({ userName: event.target.value });
      //           console.log(this.state.userName);
      //         }}
      //         onKeyDown={() => {
      //           if (this.state.userName.length > 2)
      //             this.setState({ disable: false });
      //           else this.setState({ disable: true });
      //         }}
      //       />
      //     </div>
      //     <br></br>
      //     <button
      //       //type="submit"
      //       disabled={this.state.disable}
      //       className="btn btn-primary"
      //       style={{ fontSize: "20px" }}
      //       onClick={() => {
      //         const { history } = this.props;
      //         //this.props.handleChange(this.state.userName);
      //         localStorage.setItem("name", this.state.userName);
      //         history.push("/questions");
      //         console.log(this.state.userName);
      //       }}
      //     >
      //       Submit
      //     </button>
      //     {/* </form> */}
      //   </div>
      // </>
      <div
        className="quiz-home-box custom-box show"
        style={{ marginBottom: "100%", marginTop: "30px" }}
      >
        <div className="form-group">
          <label style={{ fontSize: "30px" }}>UserName</label>
          <input
            //type="email"
            onError={this.state.message}
            className="form-control"
            //aria-describedby="emailHelp"
            style={{ height: "40px", fontSize: "20px" }}
            onChange={(event) => {
              this.setState({ userName: event.target.value });
              console.log(this.state.userName);
            }}
            onKeyDown={() => {
              if (this.state.userName.length > 2)
                this.setState({ disable: false, message: "" });
              else
                this.setState({
                  disable: true,
                  message: "Name should contain atleast 3 characters.",
                });
            }}
          />
        </div>
        <br />
        <button
          //disabled={this.state.disable}
          type="button"
          className="start-quiz-btn btns"
          onClick={() => {
            const { history } = this.props;
            //this.props.handleChange(this.state.userName);
            localStorage.setItem("name", this.state.userName);
            history.push("/questions");
            console.log(this.state.userName);
          }}
        >
          Start The Quiz
        </button>
      </div>
    );
  }
}

export default withRouter(Login);
