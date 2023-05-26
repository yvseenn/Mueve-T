import {VehicleContext}  from '../../context/Users.context'
import { useContext } from 'react'

const Fleet = () => {
  const {fleet} = useContext(VehicleContext)
  console.log(fleet);
  return (
    <div className="fleet">
            {fleet.map((car)=>(

                <figure key={car.id}>
                    <h3 className="flee_brand">{car.brand}</h3>
                    <h3 className="flee_model">{car.model}</h3>
                    <img className="fleet_image" src={car.image} alt={car.model} />
                </figure>
            ))}

        </div>
  )
            }
export default Fleet
