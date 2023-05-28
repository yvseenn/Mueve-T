import { useContext, useState } from "react";
import { VehicleContext } from "../../context/Users.context";

export default function EditarUsuarioComponent() {
  const { user, updateUser } = useContext(VehicleContext);

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  async function intentarCambiarDatos() {
    try {
      const resp = await updateUser({ email, name });
      console.log(resp);
      alert("usuario actualizado!");
    } catch (error) {
      alert(error.response.data);
    }
  }

  return (
    <div className="container-sm"> {/* Add 'container-sm' class */}
    <div className="card">
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="nombre"
          placeholder="Nombre"
        />
      </div>
      <div className="form-group">
        <label htmlFor="correo">Correo electrónico:</label>
        <input
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="correo"
          placeholder="Correo electrónico"
        />
      </div>
      <div>
        <button className="btn btn-primary mt-3" onClick={intentarCambiarDatos}>
          Guardar cambios
        </button>
      </div>
    </div>
  </div>
);
}