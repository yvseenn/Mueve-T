import { Link } from "react-router-dom";
import { VehicleContext } from "../../context/Users.context";
import { useContext, useState } from "react";

export default function signupForm(){
  
const {signup} =useContext(VehicleContext)

const [email,setEmail] = useState('')
const [pwd,setPwd] = useState('')
const [pwd2,setPwd2] = useState('')
const [nombre,setNombre] = useState('')
const [verPwd, setVerPwd] = useState(false)
const [msgSuccess, setMsgSuccess] = useState('')
const [msgError, setMsgError] = useState('')


async function tryToSignup(){
  try{
    await signup(email,pwd,nombre)
    setEmail('')
    setPwd('')
    setPwd2('')
    setNombre('')
    setVerPwd(false)
    setMsgSuccess('Usuario registrado!')
    setMsgError('')
}catch(error){
    console.log(error)
    setMsgSuccess('')
    setMsgError(error.response.data)
}

}

return (
  <>
     <div>
                <input value={nombre} onChange={(e)=> setNombre(e.target.value)} type="text" placeholder="nombre" />
            </div>
            <div>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="email" />
            </div>

            <button onClick={()=>setVerPwd(!verPwd)}>{verPwd?'Ocultar 😑': 'Mostrar 😃'}</button>

            <div>
                <input value={pwd} onChange={(e)=> setPwd(e.target.value)} type={verPwd?'text':'password'} placeholder="contraseña" />
            </div>
            <div>
                <input value={pwd2} onChange={(e)=> setPwd2(e.target.value)} type={verPwd?'text':'password'} placeholder="repite contraseña" />
            </div>
            <div>
               {pwd2===pwd? '': <small style={{color:'red'}}>*Las contraseñas no coinciden*</small>} 
            </div>

            <div>
               {msgError? <small style={{color:'red'}}>{msgError}</small>: ''} 
            </div>
            <div>
               {msgSuccess? <small style={{color:'green'}}>{msgSuccess}</small>: ''} 
            </div>
            <div>
                <button disabled={pwd2!==pwd} onClick={tryToSignup}>registrar</button>
            </div>
            
            <small>Ya estás registrado? <Link to="/login">Loggeate</Link></small>
  </>
)

}