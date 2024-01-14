import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Reset previous error and success messages
      setError("");
      setSuccessMessage("");

      // Validation
      if (!name.trim() || !email.trim() || !password.trim()) {
        setError("All fields are required");
        return;
      }

      // Add additional validation if needed

      // Make API call to register user only if validation passes
     await axios.post('http://localhost:5001/register', {
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      });

      // Handle success response
      setSuccessMessage("User registered successfully");

      // Reset input fields
      setName("");
      setEmail("");
      setPassword("");

      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
    } catch (error) {
      // Handle error response
        setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="p-5 shadow-lg rounded-3">
        <h1 className="text-primary mb-4 text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div className="text-danger mb-3">
            {error && <p>{error}</p>}
          </div>
          <div className="text-success mb-3">
            {successMessage && <p>{successMessage}</p>}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
        <h6 className="text-center mt-3">Or Register with</h6>
        <div className="row row-cols-2 g-3 mt-2">
          <div className="col text-center"></div>
          <div className="col text-center"></div>
        </div>

        <div className="mt-4">
          New user?{" "}
          <Link to="/login" className="text-decoration-none fw-bold">
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
