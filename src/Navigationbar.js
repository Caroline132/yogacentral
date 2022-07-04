import logo from './img/YogaCentral.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";

function Navigationbar() {
  const history = useHistory();

  const handleClick = () => {
      history.push('/');
  }

  const handleClick2 = () => {
    history.push('/build');
  }

  const handleClick3 = () => {
    history.push('/blog');
  }

  const handleClick4 = () => {
    history.push('/register');
  }

  const handleClick5 = () => {
    history.push('/faq');
  }

  return (
    <div className="Navigationbar">
    <Navbar bg="white" expand="lg">
      <Container className="pt-2">
        <Navbar.Brand href="" onClick={handleClick}>
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link onClick={handleClick} className="px-5 poppins-light-nile-blue-22px">Home</Nav.Link>
            <Nav.Link onClick={handleClick2} className="px-5 poppins-light-nile-blue-22px">Build</Nav.Link>
            <Nav.Link onClick={handleClick3} className="px-5 poppins-light-nile-blue-22px">Blog</Nav.Link>
            <Nav.Link onClick={handleClick4} className="px-5 poppins-light-nile-blue-22px">Register</Nav.Link>
            <Nav.Link onClick={handleClick5} className="px-5 poppins-light-nile-blue-22px">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navigationbar;