import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

function ReservationForm({ token }) {
  const [carData, setCarData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reservationError, setReservationError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCarData();
  }, [token]);

  const fetchCarData = async () => {
    try {
      if (!token) {
        console.error('Token is not defined');
        setIsLoading(false);
        return;
      }

      const clientData = JSON.parse(token);
      const response = await axios.get('http://localhost:8000/fleet');
      const carData = response.data;
      setCarData(carData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching car data:', error);
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const today = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start < today) {
      setReservationError('La fecha de inicio debe ser igual o posterior al día de hoy.');
      return;
    }

    if (end < start) {
      setReservationError('La fecha de finalización debe ser igual o posterior a la fecha de inicio.');
      return;
    }

    try {
      const clientData = JSON.parse(token);
      const reservationData = {
        clientId: clientData.objectId,
        carId: selectedCar,
        startDate: start.toISOString(),
        endDate: end.toISOString()
      };

      const response = await axios.post('http://localhost:8000/rental', reservationData);
      console.log('Reserva creada exitosamente:', response.data);
      // Perform any additional necessary actions, such as showing a success message
    } catch (error) {
      console.error('Error al crear la reserva:', error);
      // Handle the error appropriately, such as showing an error message
    }
  };

  if (isLoading) {
    return <div>Cargando los datos de la flota...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </div>
      {reservationError && <div>{reservationError}</div>}
      <button type="submit">Reserve</button>
    </form>
  );
}

export default ReservationForm;
