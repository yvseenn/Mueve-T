import { useContext, useState } from "react"
import { VehicleContext } from "../../context/Users.context"

export default function EditarUsuarioComponent(){

    const {usuario, cambiarNombre} = useContext(VehicleContext)
    const[nombre, setNombre] = useState(usuario?usuario.name: '')

    async function intentarCambiarNombre(){
        try {
            await  changeName(nombre)
        } catch (error) {
            alert(error.response.data)
        }
    }

    return(

        <div>
            <div>
                <input value={usuario?usuario.email: ''} type="email" readOnly={false}></input>
            </div>
            <div>
                <input value={nombre} onChange={(e)=> setNombre(e.target.value)} type="text" placeholder="nombre"></input>
            </div>
            <div>
                <button onClick={intentarCambiarNombre}>guardar cambios</button>
            </div>
        </div>
    )
}