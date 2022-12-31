import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Cartwidget from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink className="btn btn-outline-info" to="/">
            Mi Tienda
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="btn btn-outline-warning" to="/ropa">
                Ropa
              </NavLink>
              <NavLink className="btn btn-outline-warning" to="/accesorios">
                Accesorios
              </NavLink>
            </Nav>
            <Nav>
              <NavLink to="/carrito">
                <Cartwidget />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
