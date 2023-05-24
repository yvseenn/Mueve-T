import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name:"",
    surname:"",
    email: "",
    password: "",
    dni:"",
    birthdate: "",
    phoneNumber: "",
    direction: "",
  });
  const { name,surname,email,password,dni,birthdate,phoneNumber,direction} = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      name:"",
      surname:"",
      email: "",
      password: "",
      dni:"",
      birthdate: "",
      phoneNumber: "",
      direction: "",
    });
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
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
        <div>
          <label htmlFor="dni">dni</label>
          <input
            type="text"
            name="dni"
            value={dni}
            placeholder="Enter your name"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            placeholder="Enter your phone number"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="direction">Direction</label>
          <input
            type="text"
            name="direction"
            value={direction}
            placeholder="Enter your direction"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="birthdate">Birth Date</label>
          <input
            type="date"
            name="birthdate"
            value={birthdate}
            placeholder="Enter your birthdate"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;