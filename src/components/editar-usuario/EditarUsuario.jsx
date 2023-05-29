import { useContext, useState } from "react";
import { VehicleContext } from "../../context/Users.context";
import "./EditarUsuario.css";
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
    <div className="card">
      <div>
        <label>Nombre:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nombre"
        />
      </div>
      <div>
        <label>Correo electrónico:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Correo electrónico"
        />
      </div>

      <div>
        <button className="button_editar" onClick={intentarCambiarDatos}>Guardar cambios</button>
      </div>
    </div>
  );
}

