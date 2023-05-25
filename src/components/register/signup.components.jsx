import { Link } from "react-router-dom";
import { VehicleContext } from "../../context/Users.context";
import { useContext, useState } from "react";

export default function SignupForm() {
  const { signup } = useContext(VehicleContext);

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [nombre, setNombre] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState("");
  const [msgError, setMsgError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async () => {
    try {
      await signup(email, pwd, nombre);
      setEmail("");
      setPwd("");
      setPwd2("");
      setNombre("");
      setMsgSuccess("Usuario registrado!");
      setMsgError("");
    } catch (error) {
      console.log(error);
      setMsgSuccess("");
      setMsgError(error.response.data);
    }
  };

  const passwordMatch = pwd === pwd2;
  const passwordLength = pwd.length >= 6;

  return (
    <>
      <div>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          type="text"
          placeholder="nombre"
        />
      </div>
      <div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
      </div>

      <button onClick={togglePasswordVisibility}>
        {showPassword ? "Ocultar 😑" : "Mostrar 😃"}
      </button>

      <div>
        <input
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          type={showPassword ? "text" : "password"}
          placeholder="contraseña"
        />
      </div>
      <div>
        <input
          value={pwd2}
          onChange={(e) => setPwd2(e.target.value)}
          type={showPassword ? "text" : "password"}
          placeholder="repite contraseña"
        />
      </div>
      <div>
        {!passwordMatch && (
          <small style={{ color: "red" }}>*Las contraseñas no coinciden*</small>
        )}
        {passwordMatch && !passwordLength && (
          <small style={{ color: "red" }}>
            *La contraseña debe tener al menos 6 caracteres*
          </small>
        )}
      </div>

      <div>
        {msgError && <small style={{ color: "red" }}>{msgError}</small>}
      </div>
      <div>
        {msgSuccess && <small style={{ color: "green" }}>{msgSuccess}</small>}
      </div>
      <div>
        <button
          disabled={!passwordMatch || !passwordLength}
          onClick={handleSignup}
        >
          registrar
        </button>
      </div>

      <small>
        Ya estás registrado? <Link to="/login">Loggeate</Link>
      </small>
    </>
  );
}
