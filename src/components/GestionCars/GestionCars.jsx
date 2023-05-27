import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router';

const Form = () => {
  const navigate = useNavigate();
  const initial_state = {
    brand: "",
    image: "",
    model: "",
    licensePlate: '',
    condition: '',
    purchasePrice: '',
    rentPrice: '',
    year: '',
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
        alert('Coche creado exitosamente');
        navigate('/fleet', { replace: true });
      };
    
      const handleInput = async (ev) => {
        const { id, value } = ev.target;
        setState({ ...state, [id]: value });
      };
    
      return (
        <>
          <form onSubmit={submitForm}>
            <label>Brand:</label>
            <input
              type="text"
              id="brand"
              value={state.brand}
              onChange={handleInput}
            />
            <label>Image:</label>
            <input
              type="text"
              id="image"
              value={state.image}
              onChange={handleInput}
            />
            <label>Model:</label>
            <input
              type="text"
              id="model"
              value={state.model}
              onChange={handleInput}
            />
              <label>licensePlate:</label>
             <input
              type="text"
              id="licensePlate"
              value={state.licensePlate}
              onChange={handleInput}
            />
            <label>condition:</label>
             <input
              type="text"
              id="condition"
              value={state.condition}
              onChange={handleInput}
            />
            <label>purchasePrice:</label>
               <input
              type="text"
              id="purchasePrice"
              value={state.purchasePrice}
              onChange={handleInput}
            />
             <label>rentPrice:</label>
               <input
              type="text"
              id="rentPrice"
              value={state.rentPrice}
              onChange={handleInput}
            />
            <label>year:</label>
               <input
              type="text"
              id="year"
              value={state.year}
              onChange={handleInput}
            />
            <button type="submit">Crear Coche</button>
          </form>
          <figure>
            <h3>{state.brand}</h3>
            <img src={state.image} alt={state.brand} width="200px" />
            <h4>{state.model}</h4>
          </figure>
        </>
      );
    };
    
    export default Form;
    