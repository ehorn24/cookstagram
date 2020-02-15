import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <h2 className="nav-title">Cookstagram - Static Version</h2>
      </Link>
    </nav>
  );
};

export default Navigation;
