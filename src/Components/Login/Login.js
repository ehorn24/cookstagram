import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div class="login-page">
      <div className="static-message">
        <p>
          No need to input any info for now - just click on the "Log in" button!
        </p>
      </div>
      <form
        action="submit"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <ul className="login-fields">
          <li className="field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="input-field"
            />
          </li>
          <li className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-field"
            />
          </li>
        </ul>
        <Link to="/feed/ellahorn">
          <button type="submit" className="login-button">
            Log in
          </button>
        </Link>
      </form>
      <h3>
        Don't have an account yet? Create one{" "}
        <Link to="/signup">
          <span className="create-account-link">here</span>
        </Link>
      </h3>
    </div>
  );
};

export default Login;
