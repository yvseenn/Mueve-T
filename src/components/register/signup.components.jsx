import { Link } from "react-router-dom";
import { VehicleContext } from "../../context/Users.context";
import { useContext, useState } from "react";
import "./signup.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function SignupForm() {
  const { signup } = useContext(VehicleContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dni, setDni] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState("");
  const [msgError, setMsgError] = useState("");

  async function handleSignup() {
    try {
      await signup({
        email,
        password,
        name,
        surname,
        birthdate,
        phoneNumber,
        address,
        dni,
      });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setName("");
      setSurname("");
      setBirthdate(new Date());
      setPhoneNumber("");
      setAddress("");
      setDni("");
      setShowPassword(false);
      setMsgSuccess("User Registered");
      setMsgError("");
    } catch (error) {
      console.log(error);
      setMsgSuccess("");
      setMsgError(error.response.data);
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="register">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            required
          />
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            placeholder="Surname"
            required
          />
          <input
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            type="date"
            placeholder="Birthdate"
            required
          />
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            placeholder="Phone Number"
            required
          />
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Address"
            required
          />
          <input
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            type="text"
            placeholder="DNI"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="password-container">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <span
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </span>
        </div>

        <div className="password-container">
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            required
          />
        </div>

        <div className="small">
          {password !== confirmPassword && (
            <small style={{ color: "red" }}>Passwords do not match</small>
          )}
          {password.length > 0 && password.length < 6 && (
            <small style={{ color: "red" }}>
              Password should be at least 6 characters long
            </small>
          )}
        </div>

        <div className="msg">
          {msgError && <small style={{ color: "red" }}>{msgError}</small>}
        </div>
        <div>
          {msgSuccess && (
            <small style={{ color: "green" }}>{msgSuccess}</small>
          )}
        </div>
        <div>
          <button className="button" onClick={handleSignup}>
            Register
          </button>
        </div>

        <small>
          Already registered? <Link to="/login">Login</Link>
        </small>
      </div>
    </div>
  );
}
