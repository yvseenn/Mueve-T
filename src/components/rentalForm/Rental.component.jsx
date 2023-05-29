import "./ReservationForm.css";
import { useState, useContext } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { VehicleContext } from "../../context/Users.context";

const ReservationForm = (carDetails) => {
  const [client, setClient] = useState("");
  const [car, setCar] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rentPrice, setRentPrice] = useState("");
  const { user } = useContext(VehicleContext);
  const [reservationError, setReservationError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start < today) {
      setReservationError("La fecha de inicio debe ser igual o posterior al día de hoy.");
      return;
    }

    if (end < start) {
      setReservationError("La fecha de finalización debe ser igual o posterior a la fecha de inicio.");
      return;
    }

    const reservationData = {
      client: user._id,
      car: carDetails.carDetails._id,
      sDate: startDate,
      fDate: endDate,
      rentPrice,
    };

    axios
      .post("http://localhost:8000/rental", reservationData)
      .then((response) => {
        console.log("Reserva enviada con éxito:", response.data);
      })
      .catch((error) => {
        console.error("Error al enviar la reserva:", error);
      });
      alert('Reservation created successfully!');
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCarSelect = (event) => {
    const selectedCarId = event.target.value;
    const selectedCar = cars.find((car) => car._id === selectedCarId);
    if (selectedCar) {
      setReservationData((prevData) => ({
        ...prevData,
        car: selectedCarId,
        rentPrice: selectedCar.rentPrice,
      }));
    }
  };

  return (
    <div>
      <h1>Formulario de Reserva</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="client">Cliente:</label>
        <input
          type="text"
          id="client"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          required
        /> */}

        {/* <label htmlFor="car">Coche:</label>
        <input
          type="text"
          id="car"
          value={car}
          onChange={(e) => setCar(e.target.value)}
          required
        /> */}

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

        {/* <label htmlFor="rentPrice">Precio de alquiler:</label>
        <p
          type="number"
          id="rentPrice"
          value={carDetails.carDetails.rentPrice}
          onChange={(e) => setRentPrice(e.target.value)}
          required
        ></p> */}

        {reservationError && <div>{reservationError}</div>}

        <Button type="submit">Reservar</Button>
      </form>
    </div>
  );
};

export default ReservationForm;
