import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h3>Create an account!</h3>
      <form
        action="submit"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <ul>
          <li>
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name" id="first-name" />
          </li>
          <li>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name" id="last-name" />
          </li>
          <li>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </li>
          <li>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
            />
          </li>
        </ul>
        <Link to="/feed/ellahorn">
          <button type="submit">Create account</button>
        </Link>
      </form>
      <h3>
        Already have an account? Log in <Link to="/login">here</Link>
      </h3>
    </div>
  );
};

export default Signup;
