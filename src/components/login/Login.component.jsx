import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {VehicleContext} from "../../context/Users.context"

export default function LoginFormComponent(){

  const [mail, setMail] = useState('')
  const [pwd, setPwd] = useState('')
  const [msgSuccess, setMsgSuccess] = useState('')
  const [msgError, setMsgError] = useState('')

  const {login,user} = useContext(VehicleContext)

  async function tryToLogin(){
      try{
          await login(mail,pwd)
          setMsgSuccess("Logged correctly!")
          setMsgError("")
      }catch(error){
          setMsgSuccess("")
          setMsgError(error.response.data)
      }    
  }

if(user){
  return (
    <Navigate to="/home" replace></Navigate>
  )
}else{
  return (
    <>
      <div>
                    <input value={mail} onChange={(e)=> setMail(e.target.value)} type="email" placeholder="email" />
                </div>
                <div>
                    <input value={pwd} onChange={(e)=> setPwd(e.target.value)} type="password" placeholder="contraseña" />
                </div>
                <div>
                   {msgError? <small style={{color:'red'}}>{msgError}</small>: ''} 
                </div>
                <div>
                   {msgSuccess? <small style={{color:'green'}}>{msgSuccess}</small>: ''} 
                </div>
                <div>
                    <button onClick={tryToLogin}>login</button>
                </div>
                <small>Todavía no estás registrado? <Link to="/signup">Regístrate aquí</Link></small>
    </>
  )
}

}