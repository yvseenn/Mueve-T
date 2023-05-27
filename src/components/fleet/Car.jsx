import  { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { VehicleContext } from '../../context/Users.context';
import './car.scss';
const CarDetails = () => {

    const {deleteVehicle,user} = useContext(VehicleContext)
    const navigate = useNavigate()
  const [carDetails, setCarDetails] = useState(null);
    const BASEURL = 'http://localhost:8000'

    const {id} = useParams()

  useEffect(() => {
    async function getVehicleByID() {
      try {
        const res = await axios.get(BASEURL + `/fleet/${id}`);
        setCarDetails(res.data.Vehicle);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getVehicleByID(id);
  }, []);

  async function tryDeleteCoche(){
    try {
        await deleteVehicle(id)
        alert("coche borrado")
        navigate("/fleet",{replace: true})
    }
    catch (error) {
        alert("ha ocurrido un error")
    }
    
  }

  if (!carDetails) {
    return <p>Loading car details...</p>;
  }

  return (
    <div>
<figure className='contenedor_car'>
          <h2>Car Details</h2>
          <p>Car brand: {carDetails.brand}</p>
          <p>Car model: {carDetails.model}</p>
          <p>year: {carDetails.year}</p>

        {
           user && user.role==="admin"?
            <button onClick={tryDeleteCoche}>borrar</button>: ""
        }
          
</figure>
    </div>
  );
};

export default CarDetails;
