import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VehicleContext } from "../../context/Users.context";
import "./login.css";

export default function LoginFormComponent() {
  const [mail, setMail] = useState("pereira@mail.com");
  const [pwd, setPwd] = useState("1234567");
  const [msgSuccess, setMsgSuccess] = useState("");
  const [msgError, setMsgError] = useState("");

  const { login, user } = useContext(VehicleContext);
  const navigate = useNavigate();

  async function tryToLogin() {
    try {
      await login(mail, pwd);
      setMsgSuccess("Logged correctly!");
      setMsgError("");
    } catch (error) {
      console.log(error);
      setMsgSuccess("");
      setMsgError(error.message);
    }
  }

  if (user) {
    navigate("/areaprivada", { replace: true });
    return null;
  } else {
    return (
      <div className="container_login">
        <form
          className="form_login"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="card">
            <div className="input_login">
              <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                type="email"
                placeholder="email"
              />
            </div>
            <div className="input_login">
              <input
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                type="password"
                placeholder="contraseña"
              />
            </div>
            <div className="msg1">
              {msgError ? (
                <small style={{ color: "red" }}>{msgError}</small>
              ) : (
                ""
              )}
            </div>
            <div className="msg2">
              {msgSuccess ? (
                <small style={{ color: "green" }}>{msgSuccess}</small>
              ) : (
                ""
              )}
            </div>
              <button className="button" onClick={tryToLogin}>login</button>
           
            <small className="small">
              Todavía no estás registrado?{" "}
              <Link className="link_login" to="/signup">Regístrate aquí</Link>
            </small>
          </div>
        </form>
      </div>
    );
  }
}
