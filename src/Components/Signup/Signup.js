import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="static-message">
        <p>
          No need to input any info for now - just click on the "Create account"
          button!
        </p>
      </div>
      <h3>Create an account!</h3>
      <form
        action="submit"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <ul className="signup-fields">
          <li className="field">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="input-field"
            />
          </li>
          <li className="field">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="input-field"
            />
          </li>
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
          <li className="field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="input-field"
            />
          </li>
        </ul>
        <Link to="/feed/ellahorn">
          <button type="submit" className="create-account-button">
            Create account
          </button>
        </Link>
      </form>
      <h3>
        Already have an account? Log in{" "}
        <Link to="/login">
          <span className="login-link">here</span>
        </Link>
      </h3>
    </div>
  );
};

export default Signup;
