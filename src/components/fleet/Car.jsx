import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { VehicleContext } from "../../context/Users.context";
import ReservationForm from "../rentalForm/Rental.component";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const CarDetails = () => {
  const { deleteVehicle, user } = useContext(VehicleContext);
  const navigate = useNavigate();
  const [carDetails, setCarDetails] = useState(null);
  const BASEURL = "http://localhost:8000";

  const { id } = useParams();

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

  async function tryDeleteCoche() {
    try {
      await deleteVehicle(id);
      alert("Coche borrado");
      navigate("/fleet", { replace: true });
    } catch (error) {
      alert("Ha ocurrido un error");
    }
  }

  if (!carDetails) {
    return <p>Loading car details...</p>;
  }

  return (
    <div className="car-details-container">
      <div className="container">
        <figure className="contenedor_car">
          <h2>Car Details</h2>
          <p>Car brand: {carDetails.brand}</p>
          <img src={carDetails.image} alt={carDetails.name} />
          <p>Car model: {carDetails.model}</p>
          <p>Year: {carDetails.year}</p>
          <p>Price: {carDetails.rentPrice} €</p>
          <ReservationForm carDetails={carDetails}/>
          {user && user.role === "admin" && (
            <button className="btn btn-danger" onClick={tryDeleteCoche}>
              Delete
            </button>
          )}
        </figure>
      </div>
    </div>
  );
};

export default CarDetails;
