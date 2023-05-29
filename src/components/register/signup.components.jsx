import "./signup.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/Api";

export default function SignupForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (formData) => {
    console.log(formData);
    API.post("user/signup", formData)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <form className="formulario_signup" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input
            className="form-control"
            type="text"
            id="surname"
            {...register("surname", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            className="form-control"
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Password:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            className="form-control"
            type="text"
            id="phoneNumber"
            {...register("phoneNumber", { required: true })}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="dni">DNI</label>
          <input
            className="form-control"
            type="text"
            id="dni"
            {...register("dni", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dOB">Date Of birth</label>
          <input
            className="form-control"
            type="date"
            id="dateOfBirth"
            {...register("birthdate", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="direction">Direction</label>
          <input
            className="form-control"
            type="direction"
            id="direction"
            {...register("direction", { required: true })}
          />
        </div>
        
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Registrarse</button>
        </div>
      </form>
      <div className="button">
      <button type="submit">Registrarse</button>
      </div>
    </div>
  );
}
