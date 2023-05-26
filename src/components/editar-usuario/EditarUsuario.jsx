import { useContext, useState } from "react"
import { VehicleContext } from "../../context/Users.context"
import './EditarUsuario.css';
export default function EditarUsuarioComponent(){
    const {usuario, changeName, changeEmail, changePassword} =useContext(VehicleContext);

    const [nombre, setNombre] = useState (usuario ? usuario.name : "");
    const [email, setEmail] = useState (usuario ? usuario.email : "");
    const [contraseña, setContraseña] = useState ( "");

    async function intentarCambiarDatos() {
        try {
          if (nombre) {
            await changeName(nombre);
            alert("Nombre cambiado correctamente");
          }
    
          if (email) {
            await changeEmail(email);
            alert("Correo electrónico cambiado correctamente");
          }
    
          if (contraseña) {
            await changePassword(contraseña);
            alert("Contraseña cambiada correctamente");
          }
        } catch (error) {
          alert(error.response.data);
        }
      }
    
      return (
        <form className="card">
             <div>
            <label>Nombre:</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
            <label>Contraseña:</label>
            <input
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              type="Password"
              placeholder="contraseña"
            />
          </div>
         
          <div>
            <button onClick={intentarCambiarDatos}>Guardar cambios</button>
          </div>
        </form>
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