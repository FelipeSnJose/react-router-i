import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from "react-bootstrap"

const Navigation = () => {
  return (
    <div>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="text-white ms-3 text-decoration-none">🏠 Home</Link>
            <Link to="/contacto" className="text-white ms-3 text-decoration-none">📙 Contacto</Link>
          </Nav>
          <Navbar.Brand>
            <Link to="/" className="text-white ms-3 text-decoration-none">Happy cake 🍰</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
