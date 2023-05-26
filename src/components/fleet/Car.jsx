import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const CarDetails = () => {
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

  if (!carDetails) {
    return <p>Loading car details...</p>;
  }

  return (
    <div>
<figure>
          <h2>Car Details</h2>
          <p>Car brand: {carDetails.brand}</p>
          <p>Car model: {carDetails.model}</p>
          <p>year: {carDetails.year}</p>
</figure>
    </div>
  );
};

export default CarDetails;
