import { VehicleContext } from '../../context/Users.context';
import { useContext } from 'react';
import "./Fleet.css"
import { Link } from 'react-router-dom';

const Fleet = () => {
  const { fleet } = useContext(VehicleContext);

  return (
    <div className="fleet_container">
      <div className='fleet'>
      {fleet.map((car) => (
        <div key={car._id} className="car-card" >
          <h3 className="car-brand">{car.brand}</h3>
          <h3 className="car-model">{car.model}</h3>
          <img className="car-image" src={car.image} alt={car.model} />
          <Link to={`/fleet/${car._id}`}>Show Details</Link>
          {/* <Link to={`/fleet/${car._id}`}>Edit Details</Link> */}
        </div>
        
      ))}
      </div>
      {/* <div className='separador'>
      </div> */}
    </div>
    
  );
};

export default Fleet;
