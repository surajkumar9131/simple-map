import React, { Component } from "react";
import { connect } from "react-redux";
import { loggedInStatus } from "../../actions";
import ShelterMap from "./map";

class GoogleMap extends Component {
  state = {
    showMap: false
  };

  componentDidMount() {
    this.props.dispatch(loggedInStatus());

    setTimeout(() => {
      if (this.props.loggedIn.loggedIn) {
        this.setState({ showMap: true });
      } else {
        this.props.history.push("/");
      }
    }, 0);
  }

  render() {
    return <div>{this.state.showMap ? <ShelterMap /> : null}</div>;
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}

export default connect(mapStateToProps)(GoogleMap);
