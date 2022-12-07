import {Link,NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';



function NavBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink className='btn btn-outline-info' to='/'>Mi Tienda</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='btn btn-outline-warning' to="/ropa">Ropa</NavLink>
            <NavLink className='btn btn-outline-warning' to="/accesorios">Accesorios</NavLink>
            <NavDropdown title="Opciones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hombre</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dama
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Niños</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ofertas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to='/carrito'>
              <CartWidget />
            </Link>
            {/* <Nav.Link eventKey={2} href="#login">
              Ingresar
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
            </>
  );
}

export default NavBar;