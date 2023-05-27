import CarDetails from "../../components/fleet/Car";
import CarEdit from "../../components/fleet/CarEdit";
import { VehicleContext } from "../../context/Users.context";
import { useContext } from "react";
export default function CarPage(){
const {user} = useContext(VehicleContext)
    return(
        <>
        <CarDetails></CarDetails>
        {user && user.role === "admin" ? <CarEdit></CarEdit>:" "}
        </>
    )
}