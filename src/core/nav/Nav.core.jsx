import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { VehicleContext } from '../../context/Users.context';
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function NavBar() {
  const { user, logOut } = useContext(VehicleContext);
  const navigate = useNavigate();

  function tryLogout() {
    logOut();
    navigate('/', { replace: true });
  }

  return (
    <Navbar bg="light" variant="light" expand="lg" >
      <Navbar.Brand href="/">LOGOTIPO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            🏠 HOME
          </Nav.Link>
          <Nav.Link as={Link} to="/fleet">
            🚗 FLOTA DE COCHES
          </Nav.Link>
          {user && (
            <Nav.Link as={Link} to="/rental">
              📅 GESTIONAR RESERVA
            </Nav.Link>
          )}
          {!user && (
            <Nav.Link as={Link} to="/login">
              📚 LOGIN
            </Nav.Link>
          )}
          {user && (
            <Nav.Link as={Link} to="/areaprivada">
              Area Privada
            </Nav.Link>
          )}
          {!user && (
            <Nav.Link as={Link} to="/signup">
              ✏️ REGISTER
            </Nav.Link>
          )}
          {user && (
            <Nav.Link as={Link} to="/crearvehiculo">
              CREAR VEHICULO
            </Nav.Link>
          )}
          {user && user.role === 'admin' && (
            <Nav.Link as={Link} to="/AdminDashBoard">
              Admin Dashboard
            </Nav.Link>
          )}
        </Nav>
        <Nav>
          <span className="text-light">{user ? user.name : ''}</span>
          {user && (
            <Button variant="danger" size='sm' className='mr-2 ml-2' onClick={tryLogout}>
              Logout
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
