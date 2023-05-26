import { useState, useEffect } from "react";
import axios from "axios";

const RentaForm = () => {
  const initial_state = {
    clineteID: "",
    carID: "",
    sDate: "",
    fDate: "",
    finalized: "false",
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
      }, [state]);
    
      const submitForm = async (event) => {
        event.preventDefault();
         await axios.post("http://localhost:8000/rental", state);
        setState(initial_state);
      };
    
      const handleInput = (ev) => {
        const { id, value } = ev.target;
        setState({ ...state, [id]: value });
      };
    
      return (
        <>
          <form onSubmit={submitForm}>
          <figure>
            <label>Client</label>
            <input
              type="text"
              id="client"
              value={state.clineteID}
              onChange={handleInput}
            />
            <label>Car</label>
            <input
              type="text"
              id="car"
              value={state.carID}
              onChange={handleInput}
            />
            <label>Pick up Date</label>
            <input
              type="date"
              id="date"
              value={state.sDate}
              onChange={handleInput}
            />
              <label>Return Date</label>
             <input
              type="date"
              id="date"
              value={state.fDate}
              onChange={handleInput}
            />
              <label>finalized ?</label>
             <input
              type="checkbox"
              id="date"
              value={state.finalized}
              onChange={handleInput}
            />
          </figure>
          </form>
        </>
      );
    };
    
    export default RentaForm;
    