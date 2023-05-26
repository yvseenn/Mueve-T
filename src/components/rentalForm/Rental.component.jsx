import  { useState, useEffect } from "react";
import axios from "axios";

const ReservationForm = ({ carDetails }) => {
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    sDate: "",
    fDate: "",
    rentPrice: carDetails?.rentPrice || 0,
    carId: carDetails?.id || "",
  });

  useEffect(() => {
    setReservationData((prevData) => ({
      ...prevData,
      rentPrice: carDetails?.rentPrice || "",
      carId: carDetails?.id || "",
    }));
  }, [carDetails]);

  const handleChange = (e) => {
    setReservationData({
      ...reservationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/rental", reservationData);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={reservationData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={reservationData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="sDate">Start Date:</label>
          <input
            type="date"
            id="sDate"
            name="sDate"
            value={reservationData.sDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="fDate">End Date:</label>
          <input
            type="date"
            id="fDate"
            name="fDate"
            value={reservationData.fDate}
            onChange={handleChange}
          />
          {reservationData.rentPrice !== "" && (
            <p>Rent Price: ${reservationData.rentPrice}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReservationForm;
