import  { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { VehicleContext } from '../../../context/Users.context';

const ReservasPorUsuario = () => {
  const [reservas, setReservas] = useState([]);
  const { user } = useContext(VehicleContext);


  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/rental?user=${user._id}`);
        setReservas(response.data);
        console.log(user._id);
      } catch (error) {
        console.error('Error al obtener las reservas:', error);
      }
    };

    fetchReservas();
  }, [user._id]);

  return (
    <div>
      <h2>Reservas del usuario {user._id}</h2>
      <ul>
        {reservas.map((reserva) => (
          <li key={reserva.id}>{reserva.sDate}
          {reserva.fDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservasPorUsuario;
