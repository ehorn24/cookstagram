import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Cookstagram</h1>
      <p>
        The social network dedicated to the one thing that really matters -
        food, and how to make it.
      </p>
      <Link to="/signup">
        <button>Sign up</button>
      </Link>
      <Link to="/login">
        <button>Log in</button>
      </Link>
    </header>
  );
};

export default Header;
