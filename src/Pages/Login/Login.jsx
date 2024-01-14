import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5001/register"); // Assuming your API endpoint is "/users"

      const users = response.data;
      const userLoginData = users.find(
        (user) => user.email === email && user.password === password
      );

      if (userLoginData) {
        setSuccess("Login successful!");
        setError("");
        // You can redirect the user to another page upon successful login
        sessionStorage.setItem('token', "true");
        console.log(sessionStorage.getItem('token'));
        navigate("/");
       
      } else {
        setError("Invalid email or password. Please try again.");
        setSuccess("");
      }
    } catch (error) {
      setError("An error occurred while trying to log in. Please try again.");
      setSuccess("");
      console.error("Login error", error);
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="p-5 shadow-lg rounded-3">
        <h1 className="text-primary mb-4 text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-danger mb-3">{error}</div>}
          {success && <div className="text-success mb-3">{success}</div>}
          <button type="submit" className="btn btn-primary w-100">
            Sign in
          </button>
        </form>

        <div className="mt-4">
          New user?{" "}
          <Link to="/register" className="text-decoration-none fw-bold">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
