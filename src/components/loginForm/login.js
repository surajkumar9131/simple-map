import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions";
import "./login.css";

class Login extends Component {
  loginHaldler() {
    const id = document.getElementById("user_name").value;
    const pass = document.getElementById("password").value;
    const loginDetails = {
      id: id,
      password: pass
    };

    this.props.dispatch(login(loginDetails));
    this.props.history.push("/map");
  }

  render() {
    console.log(this.props);
    return (
      <div className="login">
        <input type="text" id="user_name" placeholder="enter id" />
        <input type="password" id="password" placeholder="**********" />
        <button onClick={() => this.loginHaldler()}>Login</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ login }, dispatch);
// }

export default connect(mapStateToProps)(Login);
