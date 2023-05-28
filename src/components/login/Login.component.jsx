import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VehicleContext } from "../../context/Users.context";

export default function LoginFormComponent() {
  const [mail, setMail] = useState("pereira@mail.com");
  const [pwd, setPwd] = useState("1234567");
  const [msgSuccess, setMsgSuccess] = useState("");
  const [msgError, setMsgError] = useState("");

  const { login, user } = useContext(VehicleContext);
  const navigate = useNavigate();

  async function tryToLogin() {
    try {
      const loggedInUser = await login(mail, pwd);
      if (loggedInUser) {
        setMsgSuccess("Logged in correctly!");
        setMsgError("");
      } else {
        setMsgSuccess("");
        setMsgError("User not found in the database");
      }
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
      <div className="container">
        <form
          className="mt-5 p-4 bg-light rounded shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="form-group">
            <label>Email:</label>
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="text-danger">{msgError}</div>
          <div className="text-success">{msgSuccess}</div>
          <button
            onClick={tryToLogin}
            className="btn btn-primary mt-3"
          >
            Login
          </button>
          <small className="d-block mt-3">
            ¿Todavía no estás registrado?{" "}
            <Link to="/signup">Regístrate aquí</Link>
          </small>
        </form>
      </div>
    );
  }
}
