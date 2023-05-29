import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./Gestion.css";

const Form = () => {
  const navigate = useNavigate();
  const initial_state = {
    brand: "",
    image: "",
    model: "",
    licensePlate: "",
    condition: "",
    purchasePrice: "",
    rentPrice: "",
    year: "",
  };

  const [state, setState] = useState(initial_state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000");
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.post("http://localhost:8000", state);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    postData();
  }, [state, navigate]);

  const submitForm = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:8000/fleet", state);
    setState(initial_state);
    alert("Coche creado exitosamente");
    navigate("/fleet", { replace: true });
  };

  const handleInput = async (ev) => {
    const { id, value } = ev.target;
    setState({ ...state, [id]: value });
  };

  return (
    <>
      <div className="total_gestion">
        <p className="p_crear">CREAR VEHICULO</p>
        <form className="container_gestion" onSubmit={submitForm}>
          <label className="label_gestion">Brand:</label>
          <input
            type="text"
            id="brand"
            value={state.brand}
            onChange={handleInput}
          />
          <label className="label_gestion">Image:</label>
          <input
            type="text"
            id="image"
            value={state.image}
            onChange={handleInput}
          />
          <label className="label_gestion">Model:</label>
          <input
            type="text"
            id="model"
            value={state.model}
            onChange={handleInput}
          />
          <label className="label_gestion">licensePlate:</label>
          <input
            type="text"
            id="licensePlate"
            value={state.licensePlate}
            onChange={handleInput}
          />
          <label className="label_gestion">condition:</label>
          <input
            type="text"
            id="condition"
            value={state.condition}
            onChange={handleInput}
          />
          <label className="label_gestion">purchasePrice:</label>
          <input
            type="text"
            id="purchasePrice"
            value={state.purchasePrice}
            onChange={handleInput}
          />
          <label className="label_gestion">rentPrice:</label>
          <input
            type="text"
            id="rentPrice"
            value={state.rentPrice}
            onChange={handleInput}
          />
          <label className="label_gestion">year:</label>
          <input
            type="text"
            id="year"
            value={state.year}
            onChange={handleInput}
          />
          <button className="button_crear" type="submit">
            Crear Coche
          </button>
        </form>
        <figure>
          <h3>{state.brand}</h3>
          <img src={state.image} alt={state.brand} width="200px" />
          <h4>{state.model}</h4>
        </figure>
      </div>
    </>
  );
};

export default Form;
