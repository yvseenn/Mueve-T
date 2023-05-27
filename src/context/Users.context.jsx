import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BASEURL = "http://localhost:8000";

export const VehicleContext = createContext();

export const VehicleContextProvider = ({ children }) => {
  const [fleet, setFleet] = useState([]);
  const [rental, setRental] = useState([]);
  // const [rentalID, setRentalID] = useState([]);
  const [user, setUser] = useState(null);

    // const [carID, setCarID] = useState([]);

  const [token, setToken] = useState("")



  useEffect(()=>{
    try{
      const userstr = localStorage.getItem("_user");
      const token =localStorage.getItem("_token").replaceAll('"','');

      if(token){
        setToken(token)
      }

      if(userstr){
        setUser(JSON.parse(userstr))
      }
    }catch{
      //
    }
   
  },[])

  useEffect(() => {
    const getAllRentals = async () => {
      const rentals = await axios.get(BASEURL + "/rental");
      setRental(rentals.data);
    };
    getAllRentals();
  }, []);
  // useEffect(() => {
  //   async function getRentalByID(id) {
  //     const rentalId = await axios.get(BASEURL + `/rental/${id}`);
  //     setRentalID(rentalId.data);
  //     console.log(rentalId.data);
  //   }
  //   getRentalByID();
  // }, []);

  useEffect(() => {
    async function getAllVehicles() {
      const res = await axios.get(BASEURL + "/fleet");
      setFleet(res.data.Cars);
      console.log(res.data.Cars);
    }
    getAllVehicles();
  }, []);

  async function signup(mail, pwd, name) {
    try {
      await axios.post(BASEURL + "user/signup", {
        email: mail,
        password: pwd,
        name: name,
      });
    } catch (error) {
      console.error(error);
    }
  }

  function logOut() {
    localStorage.removeItem("_user");
    localStorage.removeItem("_token");
    setUser(null)
    setToken("")
  }

  async function login(username, password) {
    const res = await axios.post(BASEURL + "/user/login", {
      email: username,
      password: password,
    });
    console.log(res.data)
    setUser(res.data.user);
    setToken(res.data.token)
    localStorage.setItem("_user", JSON.stringify(res.data.user));
    localStorage.setItem("_token", JSON.stringify(res.data.token));
  }

  async function updateUser(userData){
    const res = await axios.patch(BASEURL+ "/user/"+user._id,userData)
    return res.data
  }

  async function deleteVehicle(id) {
    await axios.delete(BASEURL + `/fleet/${id}?token=${token}`);
    setFleet(fleet.filter(x=>x._id!== id))
}

async function updateVehicle(id, updatedData) {
  await axios.patch(BASEURL + `/fleet/${id}?token=${token}`, updatedData);
  setFleet((prevFleet) => {
    return prevFleet.map((vehicle) => {
      if (vehicle._id === id) {
        return { ...vehicle, ...updatedData };
      }
      return vehicle;
    });
  });
}

    //   useEffect(() => {
    //   async function getVehicleByID(id) {
    //     const res = await axios.get(BASEURL + `/fleet/${id}`);
    //     setCarID(res.data);
    //     console.log(res.data);
    //   }
    //   getVehicleByID();
    // },[])

  //   async function addVehicle(addCar) {
  //     await axios.post(BASEURL + "/fleet", addCar);
  //     dispatch({ type: "ADD_VEHICLE", payload: addCar });
  //   }

  //   async function login(mail, pwd) {
  //     const res = await axios.post(BASEURL + "/user/login", { email: mail, password: pwd });
  //     dispatch({ type: "DO_LOGIN", payload: res.data.user });
  //     localStorage.setItem("_user", JSON.stringify(res.data.user));
  //   }

  //   async function signup(mail, pwd, name) {
  //     await axios.post(BASEURL + "/user/signup", { email: mail, password: pwd, name: name });
  //   }

  //   async function changeName(newName) {
  //     await axios.patch(BASEURL + `/auth/${state.user.id}`, { name: newName });
  //     dispatch({ type: "CHANGE_NAME", payload: newName });
  // >>>>>>> develop
  //   }

  // async function updateUser(id, newName) {
  //     const response = await axios.patch(`${BASEURL}auth/${id}`, { name: newName });
  // }

  

  // async function createRental() {
  //     const response = await axios.post(BASEURL + `rental`);
  // }

  // async function modifyRental(id, newData) {
  //     const response = await axios.patch(BASEURL + `rental/${id}`, newData);
  // }

  // async function deleteRental(id) {
  //     await axios.delete(BASEURL + `rental/${id}`);
  // }

  // async function addVehicle(addCar) {
  //     const response = await axios.post(BASEURL + "fleet", addCar);
  // }
  return (
    <VehicleContext.Provider
      value={{
        login,
        signup,
        logOut,
        updateUser,
        deleteVehicle,
        updateVehicle,
        fleet,
        rental,
        // rentalID,
        user,
        // carID
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};