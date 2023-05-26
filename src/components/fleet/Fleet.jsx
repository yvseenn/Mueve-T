import { useState } from 'react';
import { VehicleContext } from '../../context/Users.context';
import { useContext } from 'react';
import CarDetails from './Car';
import "./Fleet.css"

const Fleet = () => {
  const { fleet } = useContext(VehicleContext);
  const [selectedCar, setSelectedCar] = useState(null);

  const showCarDetails = (carId) => {
    setSelectedCar(carId);
  };

  return (
    <div className="fleet">
      {fleet.map((car) => (
        <div className="car-card" key={car.id}>
          <h3 className="car-brand">{car.brand}</h3>
          <h3 className="car-model">{car.model}</h3>
          <img className="car-image" src={car.image} alt={car.model} />
          <button onClick={() => showCarDetails(car.id)}>Show Details</button>
        </div>
      ))}
      {selectedCar && <CarDetails id={selectedCar} key={selectedCar} />}
    </div>
  );
};

export default Fleet;
