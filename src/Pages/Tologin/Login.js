import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";

export const Login = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);

    // Additional validation logic can be added here if needed

    // For simplicity, assuming validation is successful
    setLoggedIn(true);
    navigate("/home");
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleLoginToApp = () => {
    setLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="Valid">
      <div className="title"> Sign up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(handleLogin)}>
          <input
            type="text"
            className="form-control"
            {...register("firstName", {
              required: "First name is required",
            })}
            placeholder="First name..."
          />
          <p>{errors.firstName?.message}</p>

          <input
            type="text"
            className="form-control"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Please enter a valid email address",
              },
            })}
            placeholder="Email ID..."
          />
          <p>{errors.email?.message}</p>

          <button type="submit">Login to app</button>
        </form>
      </div>

      {isLoggedIn ? (
        <div>
          <p>Thank you</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please click here to shop </p>
          <button onClick={handleLoginToApp}>Click to shop</button>
        </div>
      )}

      {children}
    </div>
  );
};
