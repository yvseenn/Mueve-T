import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = ({ onLogin }) => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        onLogin(message);
      } else {
        toast.error(message, {
          position: "bottom-left",
        });
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={handleOnChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (message) => {
    toast.success(message, {
      position: "bottom-left",
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <LoginForm onLogin={handleLogin} />
      <span>
        Already have an account? <Link to={"/signup"}>Signup</Link>
      </span>
      <ToastContainer />
    </div>
  );
};

export default Login;
