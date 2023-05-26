import  { useEffect, useState } from 'react';
import axios from 'axios';

const CarDetails = ({ id }) => {
  const [carDetails, setCarDetails] = useState(null);
    const BASEURL = 'http://localhost:8000'
  useEffect(() => {
    async function getVehicleByID(id) {
      try {
        const res = await axios.get(BASEURL + `/fleet/${id}`);
        setCarDetails(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getVehicleByID(id);
  }, [id]);

  if (!carDetails) {
    return <p>Loading car details...</p>;
  }

  return (
    <div>
<figure>
          <h2>Car Details</h2>
          <p>Car ID: {carDetails.id}</p>
          <p>Car Name: {carDetails.name}</p>
          <p>Car Model: {carDetails.model}</p>
</figure>
    </div>
  );
};

export default CarDetails;
