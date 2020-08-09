import React, { Component } from "react";
import "../styles/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = { userName: "", disable: true };
  render() {
    console.log("login.js");
    return (
      <>
        <div className="login">
          <div className="title">LogIn</div>
          {/* <form> */}
          <div className="form-group">
            <label style={{ fontSize: "30px" }}>UserName</label>
            <input
              //type="email"
              className="form-control"
              //aria-describedby="emailHelp"
              style={{ height: "40px", fontSize: "20px" }}
              onChange={(event) => {
                this.setState({ userName: event.target.value });
                console.log(this.state.userName);
              }}
              onKeyDown={() => {
                if (this.state.userName.length > 2)
                  this.setState({ disable: false });
                else this.setState({ disable: true });
              }}
            />
          </div>
          <br></br>
          <button
            //type="submit"
            disabled={this.state.disable}
            className="btn btn-primary"
            style={{ fontSize: "20px" }}
            onClick={() => {
              const { history } = this.props;
              //this.props.handleChange(this.state.userName);
              localStorage.setItem("name", this.state.userName);
              history.push("/questions");
              console.log(this.state.userName);
            }}
          >
            Submit
          </button>
          {/* </form> */}
        </div>
      </>
    );
  }
}

export default withRouter(Login);
