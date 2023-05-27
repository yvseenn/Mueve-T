import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { VehicleContext } from '../../context/Users.context';
import './carEdit.scss';

const CarEdit = () => {
  const { updateVehicle, user } = useContext(VehicleContext);
  const navigate = useNavigate();
  const [carDetails, setCarDetails] = useState(null);
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    licensePlate: '',
    image: '',
    condition: '',
    purchasePrice: '',
    rentPrice: '',
  });

  const BASEURL = 'http://localhost:8000';
  const { id } = useParams();

  useEffect(() => {
    async function getVehicleByID() {
      try {
        const res = await axios.get(BASEURL + `/fleet/${id}`);
        setCarDetails(res.data.Vehicle);
         setFormData(res.data.Vehicle);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getVehicleByID(id);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateVehicle(id, formData);
      alert('Coche actualizado');
      navigate('/fleet', { replace: true });
    } catch (error) {
      alert('Ha ocurrido un error');
    }
  };

  if (!carDetails) {
    return <p>Loading car details...</p>;
  }

  return (
    <div >
        <figure className='contenedor_edit' >
      <h2>Edit Car</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Car brand:
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />
        </label>
        <label>
          Car model:
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </label>
        <label>
          Imagen:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Patente:
          <input
            type="text"
            name="licensePlate"
            value={formData.licensePlate}
            onChange={handleChange}
          />
        </label>
        <label>
        Condicion:
          <input
            type="text"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
          />
        </label>
        <label>
        Precio Venta:
          <input
            type="text"
            name="purchasePrice"
            value={formData.purchasePrice}
            onChange={handleChange}
          />
        </label>
        <label>
        Precio Renta:
          <input
            type="text"
            name="rentPrice"
            value={formData.rentPrice}
            onChange={handleChange}
          />
        </label>
       
           <button onClick={updateVehicle}>editar</button>
        
      </form>
      </figure>
    </div>
  );
};

export default CarEdit;