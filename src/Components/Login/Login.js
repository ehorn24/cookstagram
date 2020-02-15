import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <form
        action="submit"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <ul>
          <li>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </li>
        </ul>
        <Link to="/feed">
          <button type="submit">Log in</button>
        </Link>
      </form>
      <h3>
        Don't have an account yet? Create one <Link to="/signup">here</Link>
      </h3>
    </div>
  );
};

export default Login;
