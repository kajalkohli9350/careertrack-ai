import Navbar from "../components/Navbar";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const res = await axios.post(
      "https://tracktern-ai.onrender.com/api/auth/login",
      formData
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    navigate("/dashboard");

  } catch (error) {

    alert(error.response.data.message);

  }

};

  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-form" style={{ maxWidth: "450px" }}>
          <h2>Login</h2>

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

          <button className="login-button" onClick={handleSubmit}>
            Login
          </button>

          <p className="toggle-auth">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
      
    </>
  );
}

export default Login;
