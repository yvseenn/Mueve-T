import "./ReservationForm.css"
import  { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';

const ReservationForm = () => {
  const [client, setClient] = useState('');
  const [car, setCar] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rentPrice, setRentPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const reservationData = {
      client,
      car,
      sDate: startDate,
      fDate: endDate,
      rentPrice
    };

    axios.post('http://localhost:8000/rental', reservationData)
      .then((response) => {
        console.log('Reserva enviada con éxito:', response.data);
      })
      .catch((error) => {
        console.error('Error al enviar la reserva:', error);
      });
  };

  return (
    <div>
      <h1>Formulario de Reserva</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="client">Cliente:</label>
        <input
          type="text"
          id="client"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          required
        />

        <label htmlFor="car">Coche:</label>
        <input
          type="text"
          id="car"
          value={car}
          onChange={(e) => setCar(e.target.value)}
          required
        />

        <label htmlFor="startDate">Fecha de inicio:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        <label htmlFor="endDate">Fecha de fin:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />

        <label htmlFor="rentPrice">Precio de alquiler:</label>
        <input
          type="number"
          id="rentPrice"
          value={rentPrice}
          onChange={(e) => setRentPrice(e.target.value)}
          required
        />

        <Button type="submit">Reservar</Button>
      </form>
    </div>
  );
};

export default ReservationForm;
