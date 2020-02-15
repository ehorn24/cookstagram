import React from "react";

const Signup = () => {
  return (
    <div>
      <h3>Create an account!</h3>
      <form action="submit">
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
        </ul>
      </form>
    </div>
  );
};

export default Signup;
