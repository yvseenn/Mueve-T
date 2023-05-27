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
        <button onClick={intentarCambiarDatos}>Guardar cambios</button>
      </div>
    </div>
  );
}

//     async function intentarCambiarNombre(){
//         try {
//             await changeName(nombre);
//             alert("Nombre cambiado correctamente");
//         } catch(error){
//             alert(error.response.data);
//         }
//     }

//     async function intentarCambiarEmail() {
//         try {
//           await changeEmail(email);
//           alert("Correo electrónico cambiado correctamente");
//         } catch (error) {
//           alert(error.response.data);
//         }
//       }

//       async function intentarCambiarContrasena() {
//         try {
//           await changePassword(contrasena);
//           alert("Contraseña cambiada correctamente");
//         } catch (error) {
//           alert(error.response.data);
//         }
//       }

//       return (
//         <div>
//           <div>
//             <label>Correo electrónico:</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="correo electrónico"
//             />
//             {/* <button onClick={intentarCambiarEmail}>Guardar cambios</button> */}
//           </div>
//           <div>
//             <label>Contraseña:</label>
//             <input
//               value={contraseña}
//               onChange={(e) => setContraseña(e.target.value)}
//               type="password"
//               placeholder="contraseña"
//             />
//             {/* <button onClick={intentarCambiarContrasena}>Guardar cambios</button> */}
//           </div>
//           <div>
//             <label>Nombre:</label>
//             <input
//               value={nombre}
//               onChange={(e) => setNombre(e.target.value)}
//               type="text"
//               placeholder="nombre"
//             />
//             {/* <button onClick={intentarCambiarNombre}>Guardar cambios</button> */}
//           </div>
//         </div>
//       );
// }

//     const {usuario, changeName} = useContext(VehicleContext)
//     const[nombre, setNombre] = useState(usuario?usuario.name: '')

//     async function intentarCambiarNombre(){
//         try {
//             await  changeName(nombre)
//         } catch (error) {
//             alert(error.response.data)
//         }
//     }

//     return(

//         <div>
//             <div>
//                 <input value={usuario?usuario.email: ''} type="email" readOnly={false}></input>
//             </div>
//             <div>
//                 <input value={nombre} onChange={(e)=> setNombre(e.target.value)} type="text" placeholder="nombre"></input>
//             </div>
//             <div>
//                 <button onClick={intentarCambiarNombre}>guardar cambios</button>
//             </div>
//         </div>
//     )
// }
