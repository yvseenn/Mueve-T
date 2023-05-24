import {createContext,useEffect, useState} from 'react'
import axios from 'axios'


export const MAContext = createContext()

const BASEURL = 'http://localhost:8000'

export const MAContextProvider = ({children}) => {
    const [fleet, setFleet] =useState([])

    useEffect(() => {
        const getVehicles = async () => {
            const vehicle = await axios.get(`${BASEURL}/fleet`)
            setFleet(vehicle.data)
        };
        getVehicles();
    },[]);




return (
    <MAContext.Provider value={{fleet}}>
    {children}
    </MAContext.Provider>
)

}



