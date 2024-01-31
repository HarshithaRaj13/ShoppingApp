import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

export const Login = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">
          Enter email
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter Valid e-mail address"
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput2" class="form-label">
          Password
        </label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput2"
          placeholder="Enter password"
        />
      </div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, User!</p>

          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Login</button>

          <p>Please log in:</p>
        </div>
      )}

      {children}
    </div>
  );
};
