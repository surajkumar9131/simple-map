import React, { Component } from "react";
import { connect } from "react-redux";
import { userList, loggedInStatus } from "../../actions";

class User extends Component {
  state = {
    details: []
  };

  componentDidMount() {
    this.props.dispatch(loggedInStatus());

    setTimeout(() => {
      if (this.props.loggedIn.loggedIn) {
        this.props.dispatch(userList());

        this.setState({
          details: [this.props.loggedIn.userList]
        });
      } else {
        this.props.history.push("/");
      }
    }, 0);
  }

  render() {
    return (
      <div>
        <div>{this.state.details}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}

export default connect(mapStateToProps)(User);
