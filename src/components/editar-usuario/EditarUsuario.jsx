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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Editar Usuario</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="nombre"
                    placeholder="Nombre"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mail" className="form-label">Email</label>
                  <input
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="correo"
                    placeholder="Correo electrónico"
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-primary" onClick={intentarCambiarDatos}>
                    Guardar cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
