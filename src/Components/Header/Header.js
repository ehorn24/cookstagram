import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="app-title">Cookstagram</h1>
      <p className="app-desc">
        The social network dedicated to the one thing that really matters - food
        (and how to make it).
      </p>
      <Link to="/signup">
        <button className="signup-login">Sign up</button>
      </Link>
      <Link to="/login">
        <button className="signup-login">Log in</button>
      </Link>
    </header>
  );
};

export default Header;
