import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Login</Link> &nbsp;&nbsp;
      <Link to="/map">Map</Link>
      &nbsp;&nbsp;
      <Link to="/user">User</Link>
    </div>
  );
};

export default Header;
