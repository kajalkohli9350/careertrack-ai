import Navbar from "../components/Navbar";
import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://tracktern-ai.onrender.com/api/auth/register",
        formData,
      );

      alert("Registration Successful");

      console.log(res.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="register-container">
        <div className="register-form" style={{ maxWidth: "500px" }}>
          <h2>Register</h2>

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button className="registerbutton" onClick={handleSubmit}>
            Register
          </button>

          <p className="toggle-auth">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
