import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

const BASEURL = "http://localhost:8000";

export const VehicleContext = createContext();

export default function VehicleContextProvider({ children }) {
  const INITIAL_STATE = {
    vehicles: [],
    user: null,
    IndividualVehicle: null
  };

  function reducer(state, action) {
    const copy = { ...state };

    switch (action.type) {
      case "GET_VEHICLES":
        copy.vehicles = action.payload;
        break;

      case "GET_SINGLE_VEHICLES":
        copy.IndividualVehicle = action.payload;
        break;

      case "ADD_VEHICLE":
        copy.vehicles.push(action.payload);
        break;

      case "DELETE_VEHICLE":
        const index = copy.vehicles.findIndex((x) => x.id === Number(action.payload));
        copy.vehicles.splice(index, 1);
        break;

      case "DO_LOGIN":
        copy.user = action.payload;
        break;

      case "DO_LOGOUT":
        copy.user = null;
        break;

      case "CHANGE_NAME":
        copy.user.name = action.payload;
        break;

      default:
        break;
    }

    return copy;
  }

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    async function getAll() {
      const res = await axios.get(BASEURL + "/fleet");
      dispatch({ type: "GET_VEHICLES", payload: res.data });
    }
    getAll();
  }, []);

  useEffect(() => {
    try {
      const userSaved = JSON.parse(localStorage.getItem("_user"));
      dispatch({ type: "DO_LOGIN", payload: userSaved });
    } catch (error) {
      return error;
    }
  }, []);

  async function addVehicle(addCar) {
    await axios.post(BASEURL + "/fleet", addCar);
    dispatch({ type: "ADD_VEHICLE", payload: addCar });
  }

  async function login(mail, pwd) {
    const res = await axios.post(BASEURL + "/login", { email: mail, password: pwd });
    dispatch({ type: "DO_LOGIN", payload: res.data.user });
    localStorage.setItem("_user", JSON.stringify(res.data.user));
  }

  async function signup(mail, pwd, name) {
    await axios.post(BASEURL + "/signup", { email: mail, password: pwd, name: name });
  }

  async function changeName(newName) {
    await axios.patch(BASEURL + `/auth/${state.user.id}`, { name: newName });
    dispatch({ type: "CHANGE_NAME", payload: newName });
  }

  function cerrarSesion() {
    dispatch({ type: "DO_LOGOUT" });
    localStorage.removeItem("_user");
  }

  async function getByID(id) {
    const res = await axios.get(BASEURL + `/fleet/${id}`);
    dispatch({ type: "GET_SINGLE_VEHICLES", payload: res.data });
  }

  async function deleteVehicle(id) {
    const res = await axios.delete(BASEURL + `/fleet/${id}`);
    dispatch({ type: "DELETE_VEHICLE", payload: res.data });
  }

  return (
    <VehicleContext.Provider
      value={{
        vehicles: state.vehicles,
        user: state.user,
        IndividualVehicle: state.IndividualVehicle,
        addVehicle,
        login,
        signup,
        changeName,
        getByID,
        deleteVehicle,
        cerrarSesion
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
}
