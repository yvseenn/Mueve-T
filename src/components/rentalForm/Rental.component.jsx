import { useState, useEffect } from "react";
import axios from "axios";
import "./ReservationForm.css";

const ReservationForm = () => {
  const [reservationData, setReservationData] = useState({
    client: "",
    car: "",
    sDate: "",
    fDate: "",
    rentPrice: "",
    finalized: false,
  });

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:8000/rental");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8000/rental", reservationData);

      setReservationData({
        client: "",
        car: "",
        sDate: "",
        fDate: "",
        rentPrice: "",
        finalized: false,
      });
      alert("Reservation created successfully!");
    } catch (error) {
      console.error("Error creating reservation:", error);
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
    <div className="container_rental">
      <p className="p_gestionar">GESTIONAR</p>
      <form onSubmit={handleSubmit} className="form_container">
        <label>
          Client:
          <input
            type="text"
            name="client"
            value={reservationData.client}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Car:
          <select
            name="car"
            value={reservationData.car}
            onChange={handleCarSelect}
          >
            <option value="">Select a car</option>
            {cars.length > 0 &&
              cars.map((car) => (
                <option key={car._id} value={car._id}>
                  {car.brand}
                </option>
              ))}
          </select>
        </label>
        <br />

        <label>
          Start Date:
          <input
            type="date"
            name="sDate"
            value={reservationData.sDate}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          End Date:
          <input
            type="date"
            name="fDate"
            value={reservationData.fDate}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Rent Price:
          <input
            type="number"
            name="rentPrice"
            value={reservationData.rentPrice}
            onChange={handleChange}
            disabled
          />
        </label>
        <br />

        <button className="button_gestionar" type="submit">Create Reservation</button>
      </form>
    </div>
  );
};

export default ReservationForm;
