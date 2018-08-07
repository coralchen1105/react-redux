import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
      </div>
    </nav>
  );
};

export default Header;
