import axios from "axios";
import { useEffect, useState } from "react";
import './Fleet.scss';

const BASEURL = 'http://localhost:8000'
const Fleet = () => {
    const [cars, setCars]= useState([])

useEffect(() => {
    const getCars = async () => {
        const res = await axios.get( BASEURL + "/fleet")
        // console.log(res.data.Cars);
          setCars(res.data.Cars);
    }
    getCars();
},[]);

  return (
    <>
        <div className="fleet">
            {cars.map((car)=>(
                
                <figure key={car.id}>
                    <h3 className="flee_brand">{car.brand}</h3>
                    <h3 className="flee_model">{car.model}</h3>
                    <img className="fleet_image" src={car.image} alt={car.model} />
                </figure>
            ))}

        </div>
    </>
  )
}

export default Fleet;
