import "./signup.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../shared/Api";
import { useState } from "react";

export default function SignupForm() {
  const [phone, setPhone] = useState("");
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
    <div className="container_signup">
      <form className="formulario_signup" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_input">
          <label htmlFor="name">Name</label>
          <input className="input_signup"
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
        </div>

        <div className="form_input">
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            {...register("surname", { required: true })}
          />
        </div>

        <div className="form_input">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
        </div>

        <div className="form_input">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
        </div>

        <div className="form_input">
          <label>Phone Number</label>
          <input
            type="text"
            // country={'es'}
            // value={phone}
            // onChange={(e)=> setPhone(e.target.value)}
            id="phoneNumber"
            {...register("phoneNumber", { required: true })}
          />
        </div>
        <div className="form_input">
          <label htmlFor="dni">DNI</label>
          <input
            type="text"
            id="dni"
            {...register("dni", { required: true })}
          />
        </div>

        <div className="form_input">
          <label htmlFor="dOB">Date Of birth</label>
          <input
            type="date"
            id="dateOfBirth"
            {...register("birthdate", { required: true })}
          />
        </div>

        <div className="form_input">
          <label htmlFor="direction">Direction</label>
          <input
            type="direction"
            id="direction"
            {...register("direction", { required: true })}
          />
        </div>
        
      </form>
      <div className="button">
      <button type="submit">Registrarse</button>
      </div>
    </div>
  );
}
