import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <h2>Cookstagram</h2>
      </Link>
    </nav>
  );
};

export default Navigation;
