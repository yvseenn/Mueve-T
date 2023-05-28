import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {VehicleContextProvider} from './context/Users.context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <VehicleContextProvider>
      <App />
   </VehicleContextProvider>
 </BrowserRouter>
  
)
